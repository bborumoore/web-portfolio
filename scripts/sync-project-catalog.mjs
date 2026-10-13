import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

const workspaceRoot = process.cwd();
const configPath = resolve(workspaceRoot, "src/data/projectCatalogConfig.json");
const outputPath = resolve(workspaceRoot, "src/data/projects.generated.json");

const config = JSON.parse(readFileSync(configPath, "utf8"));

const repoJson = execSync(
  [
    "gh repo list",
    config.githubUsername,
    "--limit 200",
    "--json name,description,url,homepageUrl,updatedAt,primaryLanguage,isArchived,isPrivate",
  ].join(" "),
  { encoding: "utf8" },
);

const repositories = JSON.parse(repoJson);

const toStatus = (repo) => {
  if (repo.isArchived) {
    return "archived";
  }

  const year = Number(repo.updatedAt.slice(0, 4));
  return year >= new Date().getUTCFullYear() - 1 ? "active" : "maintained";
};

const toCategory = (repo) => {
  const language = repo.primaryLanguage?.name?.toLowerCase() || "";

  if (["yaml", "python"].includes(language)) {
    return "Automation & Security";
  }

  if (["c#", "mathematica"].includes(language)) {
    return "Game Development";
  }

  if (["html", "javascript", "typescript"].includes(language)) {
    return "Web Development";
  }

  return "General Software";
};

const projects = repositories
  .filter((repo) => !repo.isPrivate)
  .filter((repo) => !config.excludedRepos.includes(repo.name))
  .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
  .map((repo) => ({
    id: repo.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    title: repo.name.replace(/-/g, " "),
    summary:
      repo.description ||
      "Repository listed from GitHub. Add a custom summary in src/data/projects.json.",
    category: toCategory(repo),
    status: toStatus(repo),
    highlight: false,
    year: Number(repo.updatedAt.slice(0, 4)),
    repoUrl: repo.url,
    liveUrl: repo.homepageUrl || "",
    stack: [repo.primaryLanguage?.name || "Unknown"],
    imageKey: "none",
  }));

writeFileSync(outputPath, JSON.stringify(projects, null, 2), "utf8");

console.log(
  `Generated ${projects.length} project entries at src/data/projects.generated.json`,
);

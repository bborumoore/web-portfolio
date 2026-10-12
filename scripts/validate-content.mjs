import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

const root = process.cwd();
const readJson = (path) =>
  JSON.parse(readFileSync(resolve(root, path), "utf8"));

const profile = readJson("src/data/profile.json");
const timeline = readJson("src/data/timeline.json");
const projects = readJson("src/data/projects.json");

const errors = [];

const requireString = (value, path) => {
  if (typeof value !== "string" || value.trim().length === 0) {
    errors.push(`${path} must be a non-empty string`);
  }
};

const requireArray = (value, path) => {
  if (!Array.isArray(value) || value.length === 0) {
    errors.push(`${path} must be a non-empty array`);
  }
};

requireString(profile.displayName, "profile.displayName");
requireString(profile.fullName, "profile.fullName");
requireString(profile.headline, "profile.headline");
requireString(profile.location, "profile.location");
requireString(profile.email, "profile.email");
requireArray(profile.aboutParagraphs, "profile.aboutParagraphs");
requireArray(profile.focusAreas, "profile.focusAreas");
requireArray(profile.values, "profile.values");

if (!Array.isArray(timeline) || timeline.length === 0) {
  errors.push("timeline must contain at least one entry");
} else {
  timeline.forEach((item, index) => {
    requireString(item.period, `timeline[${index}].period`);
    requireString(item.role, `timeline[${index}].role`);
    requireString(item.organization, `timeline[${index}].organization`);
    requireString(item.summary, `timeline[${index}].summary`);
  });
}

const allowedStatus = new Set(["active", "maintained", "archived"]);
const ids = new Set();

if (!Array.isArray(projects) || projects.length === 0) {
  errors.push("projects must contain at least one entry");
} else {
  projects.forEach((project, index) => {
    requireString(project.id, `projects[${index}].id`);
    requireString(project.title, `projects[${index}].title`);
    requireString(project.summary, `projects[${index}].summary`);
    requireString(project.category, `projects[${index}].category`);
    requireString(project.status, `projects[${index}].status`);
    requireString(project.repoUrl, `projects[${index}].repoUrl`);
    requireArray(project.stack, `projects[${index}].stack`);

    if (ids.has(project.id)) {
      errors.push(`projects[${index}].id duplicates "${project.id}"`);
    }
    ids.add(project.id);

    if (!allowedStatus.has(project.status)) {
      errors.push(
        `projects[${index}].status must be one of: ${[...allowedStatus].join(", ")}`,
      );
    }

    if (!project.repoUrl.startsWith("https://github.com/")) {
      errors.push(`projects[${index}].repoUrl must be a GitHub URL`);
    }

    if (typeof project.year !== "number" || project.year < 2000 || project.year > 2100) {
      errors.push(`projects[${index}].year must be a valid year number`);
    }
  });
}

if (errors.length > 0) {
  console.error("Content validation failed:");
  for (const error of errors) {
    console.error(` - ${error}`);
  }
  process.exit(1);
}

console.log("Content validation passed.");

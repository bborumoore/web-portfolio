import { useEffect, useMemo, useState } from "react";
import profile from "./data/profile.json";
import projects from "./data/projects.json";
import timeline from "./data/timeline.json";
import { projectMedia } from "./data/projectMedia";
import { buildCategories, filterAndSortProjects } from "./lib/projectFilters";
import SiteFooter from "./ui/SiteFooter";
import SiteHeader from "./ui/SiteHeader";
import ProjectCard from "./ui/ProjectCard";
import "./styles/site.css";

const statuses = ["all", "active", "maintained", "archived"];
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "A to Z", value: "alphabetical" },
];

function updateMetaDescription(content) {
  const meta = document.querySelector("meta[name='description']");
  if (meta) {
    meta.setAttribute("content", content);
  }
}

export default function App() {
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("newest");

  const categories = useMemo(() => buildCategories(projects), []);

  const filteredProjects = useMemo(
    () => filterAndSortProjects(projects, { category, status, term, sort }),
    [category, status, term, sort],
  );

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.highlight),
    [],
  );

  const projectStats = useMemo(
    () => ({
      total: projects.length,
      active: projects.filter((project) => project.status === "active").length,
      maintained: projects.filter((project) => project.status === "maintained")
        .length,
      archived: projects.filter((project) => project.status === "archived").length,
    }),
    [],
  );

  useEffect(() => {
    document.title = `${profile.displayName} | ${profile.headline}`;
    updateMetaDescription(
      `${profile.displayName}: ${profile.shortBio} Explore project history, case studies, and ways to connect.`,
    );
  }, []);

  return (
    <>
      <SiteHeader name={profile.displayName} headline={profile.headline} />
      <main id="main-content">
        <section className="hero container">
          <div className="hero-layout">
            <div>
              <p className="eyebrow">Front page to the internet</p>
              <h1>{profile.fullName}</h1>
              <p className="headline">{profile.headline}</p>
              <p className="short-bio">{profile.shortBio}</p>
              <p className="hero-meta">
                <span>{profile.location}</span>
                <span aria-hidden="true">|</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href={profile.cta.primaryUrl}>
                  {profile.cta.primaryLabel}
                </a>
                <a
                  className="button"
                  href={profile.cta.secondaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.cta.secondaryLabel}
                </a>
                <a className="button" href="/resume/Brian-Moore-Resume.md" download>
                  Download resume
                </a>
              </div>

              <ul className="metric-grid" aria-label="Project portfolio summary">
                <li>
                  <span>{projectStats.total}</span>
                  <p>Public projects</p>
                </li>
                <li>
                  <span>{projectStats.active}</span>
                  <p>Active</p>
                </li>
                <li>
                  <span>{projectStats.maintained}</span>
                  <p>Maintained</p>
                </li>
                <li>
                  <span>{projectStats.archived}</span>
                  <p>Archived</p>
                </li>
              </ul>
            </div>
            <figure className="hero-portrait">
              <img src={projectMedia.selfPortrait} alt="Portrait of Brian Moore" />
            </figure>
          </div>
        </section>

        <section id="about" className="container section">
          <h2>About</h2>
          <div className="about-grid">
            <div>
              {profile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <aside className="focus-card">
              <h3>Current focus</h3>
              <ul>
                {profile.focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3>Values</h3>
              <ul>
                {profile.values.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="timeline" className="container section">
          <h2>Career history</h2>
          <ol className="timeline">
            {timeline.map((entry) => (
              <li key={`${entry.period}-${entry.role}`}>
                <p className="timeline-period">{entry.period}</p>
                <h3>
                  {entry.role} <span>@ {entry.organization}</span>
                </h3>
                <p>{entry.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="container section">
          <h2>Flagship projects</h2>
          <p className="section-subtitle">
            Selected projects that best represent current direction and quality
            standards.
          </p>
          <div className="project-grid project-grid--featured">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                imageSrc={projectMedia[project.imageKey]}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="container section">
          <div className="projects-header">
            <h2>Project index</h2>
            <p>
              Curated from public GitHub repositories. Prototype work is omitted
              from this public view.
            </p>
          </div>

          <form className="project-controls" onSubmit={(event) => event.preventDefault()}>
            <label>
              Search
              <input
                type="search"
                name="search"
                value={term}
                onChange={(event) => setTerm(event.target.value)}
                placeholder="Search title, stack, category..."
              />
            </label>

            <label>
              Category
              <select
                name="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {categories.map((option) => (
                  <option key={option} value={option}>
                    {option === "all" ? "All categories" : option}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Status
              <select
                name="status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                {statuses.map((option) => (
                  <option key={option} value={option}>
                    {option === "all" ? "All statuses" : option}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Sort
              <select
                name="sort"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </form>

          <p className="project-count" aria-live="polite">
            Showing {filteredProjects.length} of {projects.length} public projects.
          </p>

          <div className="status-legend" aria-label="Project status legend">
            <span className="status status--active">active</span>
            <span className="status status--maintained">maintained</span>
            <span className="status status--archived">archived</span>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                imageSrc={projectMedia[project.imageKey]}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="container section contact">
          <h2>Let&apos;s connect</h2>
          <p>
            I&apos;m open to remote opportunities and speaking conversations.
            Start with email and include a little context around your team or
            event.
          </p>
          <div className="contact-actions">
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              Contact via email
            </a>
            <a
              className="button"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="button"
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

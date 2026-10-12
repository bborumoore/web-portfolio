function ExternalLink({ href, children }) {
  if (!href) {
    return null;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function ProjectCard({ project, imageSrc }) {
  const { title, summary, stack, status, category, repoUrl, liveUrl } = project;
  const hasImage = Boolean(imageSrc);

  return (
    <article className="project-card">
      <div
        className={`project-image ${hasImage ? "project-image--media" : "project-image--placeholder"}`}
        aria-hidden={!hasImage}
      >
        {hasImage ? (
          <img src={imageSrc} alt={`${title} preview`} loading="lazy" />
        ) : (
          <span>{title.slice(0, 2).toUpperCase()}</span>
        )}
      </div>

      <div className="project-card-content">
        <div className="project-heading">
          <h3>{title}</h3>
          <p className="project-meta">
            <span className={`status status--${status}`}>{status}</span>
            <span>{category}</span>
          </p>
        </div>

        <p>{summary}</p>

        <ul className="stack-list" aria-label={`${title} technologies`}>
          {stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          <ExternalLink href={repoUrl}>Repository</ExternalLink>
          <ExternalLink href={liveUrl}>Live Demo</ExternalLink>
        </div>
      </div>
    </article>
  );
}

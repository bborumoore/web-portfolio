const sortStrategies = {
  newest: (a, b) => b.year - a.year || a.title.localeCompare(b.title),
  oldest: (a, b) => a.year - b.year || a.title.localeCompare(b.title),
  alphabetical: (a, b) => a.title.localeCompare(b.title),
};

function matchesSearch(project, term) {
  if (!term) {
    return true;
  }

  const normalizedTerm = term.trim().toLowerCase();
  const searchable = [
    project.title,
    project.summary,
    project.category,
    project.status,
    ...(project.stack || []),
  ]
    .join(" ")
    .toLowerCase();

  return searchable.includes(normalizedTerm);
}

export function buildCategories(projects) {
  return ["all", ...new Set(projects.map((project) => project.category))];
}

export function filterAndSortProjects(projects, filters) {
  const { category, status, term, sort } = filters;
  const sorter = sortStrategies[sort] || sortStrategies.newest;

  return projects
    .filter((project) => category === "all" || project.category === category)
    .filter((project) => status === "all" || project.status === status)
    .filter((project) => matchesSearch(project, term))
    .sort(sorter);
}

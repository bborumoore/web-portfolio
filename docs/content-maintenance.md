# Content Maintenance

## Manual Editing Workflow (Primary)
1. Update portfolio text in `src/data/profile.json`.
2. Update timeline entries in `src/data/timeline.json`.
3. Add or edit project cards in `src/data/projects.json`.
4. If a project has media, map its image in `src/data/projectMedia.js`.

## Optional GitHub Sync Helper
For periodic refreshes, run:

```bash
node scripts/sync-project-catalog.mjs
```

This creates `src/data/projects.generated.json` using the public repos from `Bborumoore`, excludes prototype repositories listed in `src/data/projectCatalogConfig.json`, and applies automatic category/status defaults.

Use the generated file as a draft, then copy selected edits into `src/data/projects.json` for curation.

## Prototype Handling
- Prototype repositories are intentionally excluded from public display.
- To change this behavior, edit `excludedRepos` in `src/data/projectCatalogConfig.json`.

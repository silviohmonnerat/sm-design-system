# Versioning Strategy

This repository follows **Semantic Versioning (SemVer)** per package.

## Patch (x.y.Z)
- Bug fixes
- Internal refactors
- No API changes

## Minor (x.Y.0)
- New features
- Backward-compatible API changes

## Major (X.0.0)
- Breaking changes
- Renamed packages
- Removed APIs

## Rules

- Versions are managed **only by Changesets**
- Manual version edits are forbidden
- Every PR that changes code must include a changeset
- CI is the single source of truth

# AGENTS.md

Operational rules for AI coding agents in this repository.

## Scope And Priority

1. This file defines global agent behavior for this repo.
2. [CLAUDE.md](CLAUDE.md) defines product, design, SEO, and conversion direction.
3. If both apply, follow both. If there is ambiguity, keep business intent from [CLAUDE.md](CLAUDE.md) and implement with the safest technical approach.

## Next.js Version Warning

This project uses a Next.js version that may differ from legacy assumptions.

Before writing or changing framework code:

1. Check the relevant docs in node_modules/next/dist/docs/.
2. Prefer current APIs and conventions over remembered patterns.
3. Respect deprecations and migration guidance.

## Core Tech Constraints

1. Use Next.js App Router.
2. Use TypeScript.
3. Use Tailwind CSS.
4. Use semantic HTML.
5. Use Server Components by default.
6. Use Client Components only when required by interactivity or browser-only APIs.
7. Avoid unnecessary libraries.
8. Avoid complex state management.
9. Do not add backend booking logic for now; booking must be an external booking link placeholder.

## Product Intent Guardrails

Every change should support at least one outcome:

1. Build trust.
2. Explain services clearly.
3. Showcase quality.
4. Make booking easier.
5. Improve local SEO for Hobart, Tasmania.

## Content And Design Guardrails

1. Keep a premium dark barbershop aesthetic.
2. Maintain high contrast and clear CTA hierarchy.
3. Keep layouts clean, focused, and mobile-first.
4. Use real content; do not use lorem ipsum in visible UI.
5. Do not create fake reviews.
6. Do not copy copyrighted source text.

## SEO Requirements (When Editing Page Content)

1. Ensure only one H1 per page.
2. Use local keywords naturally (Hobart, Tasmania context).
3. Include metadata and Open Graph metadata when relevant.
4. Keep semantic section structure.
5. Use descriptive alt text for images.
6. Keep structure ready for future suburb landing pages and blog expansion.

## Coding Standards

1. Prefer small, composable components.
2. Keep naming explicit and consistent.
3. Keep public APIs stable unless change is required.
4. Add brief comments only where logic is non-obvious.
5. Do not introduce broad refactors unrelated to the task.

## Delivery Checklist For Agents

Before finishing a task:

1. Confirm the change matches [CLAUDE.md](CLAUDE.md) goals.
2. Confirm App Router and Server Component defaults are respected.
3. Confirm no unnecessary dependency was added.
4. Confirm SEO basics are still valid after edits.
5. Run lint/build checks when possible and report results clearly.

## Out Of Scope For Now

1. Custom booking platform implementation.
2. Backend-heavy architecture.
3. Overengineered abstractions without clear need.

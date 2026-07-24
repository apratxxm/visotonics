<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

Before exploring this codebase, read `touchmatrix.md` at the repo root first — it's a dense reference map of routes, components, state, and dependency edges. It's cheaper than grepping the tree. Regenerate it (don't hand-edit) after any structural change — see its own "Staleness contract" section for exactly which changes trigger a rebuild.

Also read `DECISIONS.md` at the repo root before making changes that touch SEO/indexing, analytics/tracking, the lead-capture backend, campaign landing pages, or legal/compliance content — it records *why* past decisions were made and what they constrain (e.g. domain hardcoding, which pages are deliberately noindexed, the chosen email/analytics providers, deferred legal work). Treat it as load-bearing context, not background reading.

Append a new dated entry to `DECISIONS.md` whenever you make or the user makes a decision that will constrain or surprise future work — a new architectural choice, a provider/vendor pick, a deliberately-deferred piece of work, a naming/URL convention, anything with a "why" that isn't obvious from the code alone. Don't rewrite or delete past entries; if a decision gets reversed, add a new entry noting the reversal and why. Routine implementation detail belongs in git history, not here — only log decisions that narrow future choices.

# AGENTS.md

## Cursor Cloud specific instructions

### Codebase overview

This is a multi-app portfolio platform with **four independent apps** (no monorepo tooling). Each has its own `package.json` / dependencies and must be installed and run separately.

| App | Path | Stack | Dev command | Default port |
|-----|------|-------|-------------|-------------|
| Portfolio (root) | `/workspace/` | React 18 + Vite | `npm run dev` | 5173 |
| Growth Apps | `/workspace/growth-apps/` | React 19 + Vite + Supabase | `npm run dev` | 5173 (use `--port` to avoid conflict) |
| Grocery List Generator | `/workspace/productivity-tools/apps/Grocery_list_generator/` | TypeScript + Vite | `npm run dev` | 3000 |
| Meal Decider | `/workspace/productivity-tools/apps/Meal_decider/` | Python Flask | `python3 app.py` | 5001 |

### Non-obvious caveats

- **Growth Apps `index.html` location**: The `index.html` is inside `public/` instead of the project root. The Vite dev server serves it at `/index.html` (not `/`). The `npm run build` command fails because Vite expects `index.html` at the project root. This is a known pre-existing issue.
- **Grocery List Generator build**: `npm run build` runs `tsc && vite build`. There are pre-existing TypeScript errors (unused variables) that block the build. The dev server (`npm run dev`) works fine.
- **Meal Decider Flask app**: Requires `flask` and `openpyxl` pip packages. Run from its own directory so Excel database files are created in the correct location. The Chrome browser in this VM may show "Error code 4" for Flask pages due to memory constraints; the server works correctly (verify with `curl`).
- **Supabase (optional)**: Growth Apps uses Supabase for auth/calendar features. It works in guest mode without Supabase credentials. To enable Supabase, copy `.env.example` to `.env` in the repo root and fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- **Port conflicts**: When running multiple apps simultaneously, assign distinct ports using `--port` flag (e.g., `npm run dev -- --port 5174`).
- **Standard commands**: See `README.md` for portfolio setup. See `productivity-tools/apps/Grocery_list_generator/README.md` for grocery app docs.

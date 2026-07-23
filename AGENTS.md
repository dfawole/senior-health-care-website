<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project coding standards

- **No inline styles.** No `style={{}}` or `style=""` anywhere. Use Tailwind
  utility classes exclusively. If something genuinely can't be expressed in
  Tailwind, add it to `app/globals.css` instead. Enforced by the
  `react/forbid-dom-props` ESLint rule.
- **Strict DRY.** No duplicated markup, styles, or logic across pages or
  components. Shared UI (buttons, cards, section wrappers, CTA blocks) lives
  in `/components` and is reused, not copy-pasted. Page routes should stay
  thin — compose shared components with content from `/content`.
- **TypeScript strict mode, no `any`.** `tsconfig.json` has `strict: true`;
  `@typescript-eslint/no-explicit-any` is set to `error`.
- **Error handling.** Wrap async logic (API routes, data fetching) in
  try/catch and return typed error responses. Route-level error boundaries
  live at `app/error.tsx` (segment errors) and `app/global-error.tsx` (root
  layout errors).
- **Naming conventions.** PascalCase for components (`Header.tsx`,
  `CTAButton.tsx`), camelCase for functions and variables.
- **No hardcoded copy in components.** All user-facing strings live in
  `/content` (e.g. `content/site.ts`, `content/navigation.ts`,
  `content/pages.ts`) and are imported into components/pages, so copy edits
  don't require touching component logic.
- **ESLint + Prettier.** Run `npm run lint` and `npm run format:check`
  before considering work done. `eslint-config-prettier` disables
  stylistic rules that would conflict with Prettier;
  `prettier-plugin-tailwindcss` keeps class ordering consistent.

# jr-xxi

Personal site for [Joshua Richey](https://www.joshuar.com), built with [Gatsby](https://www.gatsbyjs.com/) 3 and React 17.

**Live:** [https://www.joshuar.com](https://www.joshuar.com)

**Source:** [github.com/joshuarrr/jr-xxi](https://github.com/joshuarrr/jr-xxi)

## Deploy (Netlify)

This site is hosted on **Netlify** and **deploys automatically** when you push to the Git branch Netlify uses for production (usually `main`). You do not run a separate deploy step from this repo.

Build settings live in the **Netlify UI** (not in a `netlify.toml` here). They should match what Gatsby expects:

- **Build command:** `yarn build` or `npm run build` (runs `gatsby build`)
- **Publish directory:** `public`

The Netlify project may also use **[@netlify/plugin-gatsby](https://docs.netlify.com/integrations/frameworks/gatsby/)** from the Plugins list. Netlify may suggest adding **`gatsby-plugin-netlify`** in `gatsby-config.js` if you rely on Gatsby-style redirects.

## Local development

Install dependencies, then start the dev server:

```bash
npm install
npm run develop
```

The site runs at [http://localhost:8000](http://localhost:8000). GraphiQL: [http://localhost:8000/___graphql](http://localhost:8000/___graphql).

To preview a **production build** locally:

```bash
npm run build
npm run serve
```

### Node.js and OpenSSL

**Netlify’s build image** uses the Node version set in **Site settings → Build & deploy → Environment** (or an `.nvmrc` if you add one). Default scripts are written so **`gatsby build` works there** without extra `NODE_OPTIONS`.

If you use a **newer Node** locally (for example current releases with OpenSSL 3) and Webpack fails with `ERR_OSSL_EVP_UNSUPPORTED`, use the OpenSSL legacy provider **only on your machine**:

```bash
npm run develop:openssl
# or
npm run build:openssl
```

Do **not** put `--openssl-legacy-provider` in the default `build` script: older Node versions used on CI can reject that flag when it is set via `NODE_OPTIONS`.

## Scripts

| Script | Purpose |
|--------|---------|
| `develop` / `start` | Gatsby dev server |
| `build` | Production build → `public/` |
| `serve` | Serve `public/` after `build` |
| `clean` | Clear Gatsby cache and `public/` |
| `develop:openssl` / `start:openssl` / `build:openssl` | Same as above, for local Node + OpenSSL 3 issues |

## Project layout

- **`src/pages/`** — File-based routes (e.g. `index.js` → `/`)
- **`src/components/`** — Shared UI
- **`src/styles/`** — CSS
- **`gatsby-config.js`** — Gatsby config; `siteMetadata.siteUrl` is used for the sitemap and SEO

## Further reading

- [Gatsby documentation](https://www.gatsbyjs.com/docs/)
- [Netlify + Gatsby](https://docs.netlify.com/integrations/frameworks/gatsby/)

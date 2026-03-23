# Boadlia Associates Website

Corporate law firm website built with React and Vite.

## Netlify Quick Start

1. Install dependencies
   - `npm install`

2. Build the site
   - `npm run build`

3. Deploy to Netlify
   - Connect your Git repository in Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`

4. SPA routing fallback
   - Netlify rewrites are configured via `public/_redirects` and `netlify.toml`
   - Deep links like `/services/corporate-commercial` will resolve to `index.html`

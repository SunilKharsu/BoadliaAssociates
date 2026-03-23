# Netlify Deploy Checklist

1. Ensure dependencies are installed
   - Run: `npm install`

2. Build locally to confirm output
   - Run: `npm run build`
   - Verify that `dist/` is created

3. Confirm SPA routing fallback
   - `public/_redirects` exists with:
     `/*    /index.html   200`
   - `netlify.toml` contains the same redirect rule

4. Push code to your Git repository
   - Commit changes
   - Push to the branch you will deploy

5. Create a new site on Netlify
   - Connect the Git repository
   - Choose the correct branch

6. Verify Netlify build settings
   - Build command: `npm run build`
   - Publish directory: `dist`

7. Deploy and validate
   - Open the deployed site URL
   - Test deep links like `/services/corporate-commercial` and `/blog/patent-strategy-growth`

8. Optional checks
   - Run Lighthouse for performance and SEO
   - Add a custom domain
   - Enable HTTPS (Netlify provides this automatically)

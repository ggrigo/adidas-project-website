# Deployment Guide

## Quick Deploy to Netlify (5 minutes)

### Step 1: Push to GitHub

```bash
# Navigate to your project
cd adidas-project-website

# Create a new repository on GitHub (https://github.com/new)
# Then link it:
git remote add origin https://github.com/YOUR_USERNAME/adidas-project-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select your repository
5. Netlify will auto-detect settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

### Step 3: Enable Password Protection

1. Once deployed, go to **Site Settings** > **Visitor Access**
2. Click **Password Protection**
3. Set a password (share this with stakeholders)
4. Save

Your site is now live and password-protected!

## Alternative: Netlify CLI Deploy

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## Updating the Site Weekly

### Option 1: Edit on GitHub

1. Go to your repository on GitHub
2. Navigate to `app/weekly-progress/page.tsx`
3. Click "Edit this file" (pencil icon)
4. Update the content
5. Commit changes
6. Netlify auto-deploys in ~2 minutes

### Option 2: Local Updates

```bash
# Make your changes
git add .
git commit -m "Update weekly progress for [date]"
git push

# Netlify auto-deploys
```

## Custom Domain (Optional)

1. In Netlify: **Site Settings** > **Domain Management**
2. Click "Add custom domain"
3. Follow instructions to configure DNS
4. SSL certificate is added automatically

## Troubleshooting

### Build Fails

```bash
# Test locally first
npm run build

# If successful locally, check Netlify build logs
# Usually it's a missing environment variable or Node version
```

### Password Not Working

- Clear browser cache
- Try incognito mode
- Check password was saved in Netlify settings

### Site Not Updating

- Check Netlify deploy status
- Verify git push was successful
- Check build logs for errors

## Support

- Netlify Docs: https://docs.netlify.com
- Next.js Docs: https://nextjs.org/docs

## Monitoring

- **Build Status**: https://app.netlify.com/sites/YOUR_SITE/deploys
- **Analytics**: https://app.netlify.com/sites/YOUR_SITE/analytics
- **Visitor Logs**: Available with password protection

---

**Ready to deploy?** Follow Step 1-3 above and you'll be live in 5 minutes!

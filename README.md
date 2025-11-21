# adidas AI Learning & Leadership Development - Project Website

Professional project website for enterprise AI deployment tracking and stakeholder communication.

## Features

- **Landing Page**: Hero section, key stats, status dashboard, value proposition
- **Executive Briefing**: Comprehensive overview for decision-makers
- **Weekly Progress**: Real-time project status and updates
- **Document Repository**: Central location for all project artifacts
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Password Protection**: Netlify-based access control

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Netlify (static export)
- **Build Tool**: Turbopack

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run start
```

## Deployment to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Connect to Git**:
   - Push this repository to GitHub/GitLab
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect your repository

2. **Build Settings** (auto-detected from netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 20

3. **Deploy**:
   - Click "Deploy site"
   - Netlify will build and deploy automatically

4. **Enable Password Protection**:
   - Go to Site Settings > Visitor Access
   - Enable "Password Protection"
   - Set a password for stakeholder access

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize new site
netlify init

# Deploy to production
netlify deploy --prod
```

### Option 3: Drag and Drop

```bash
# Build the site
npm run build

# Drag the 'out' folder to Netlify's deploy dropzone
# at https://app.netlify.com/drop
```

## Updating Content

### Weekly Progress Reports

1. Edit `app/weekly-progress/page.tsx`
2. Update the data for the current week
3. Commit and push to trigger automatic deployment

### Executive Briefing

1. Edit `app/executive-briefing/page.tsx`
2. Update content as needed
3. Commit and push

### Document Repository

1. Add documents to `public/documents/` folder
2. Update the documents list in `app/documents/page.tsx`
3. Commit and push

## Project Structure

```
adidas-project-website/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── executive-briefing/
│   │   └── page.tsx               # Executive briefing
│   ├── weekly-progress/
│   │   └── page.tsx               # Weekly progress reports
│   ├── documents/
│   │   └── page.tsx               # Document repository
│   ├── layout.tsx                  # Root layout with header/footer
│   └── globals.css                 # Global styles
├── components/
│   ├── Header.tsx                  # Navigation header
│   ├── Footer.tsx                  # Site footer
│   ├── StatusCard.tsx              # Status card component
│   └── ProgressBar.tsx             # Progress bar component
├── public/                         # Static assets
├── netlify.toml                    # Netlify configuration
└── package.json                    # Dependencies
```

## Customization

### Colors

Update the primary color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Modify these values
    500: '#0056e6',
    600: '#0044b3',
    700: '#003380',
  }
}
```

### Content Updates

- **Stats and Progress**: Update values in `app/page.tsx`
- **Status Dashboard**: Modify progress percentages in component props
- **Contact Information**: Edit `components/Footer.tsx`

## Support

**Questions or Issues:**
- Lars Boeddener: lars@baresquare.com
- Georgios Grigoriadis: georgios@baresquare.com

## License

Proprietary - adidas & Baresquare Partnership

---

**Last Updated**: November 21, 2025
**Next Review**: December 3, 2025

# Madini Moyoni Investment Website

A professional investment-focused website for Madini Moyoni, showcasing their UK-Tanzania mining consortium and $5M investment opportunity.

## Deployment Instructions for Netlify

### Prerequisites
1. Netlify account
2. SendGrid API key for contact form functionality

### Deployment Steps

1. **Build the frontend:**
   ```bash
   npm run build:frontend
   ```

2. **Deploy to Netlify:**
   - Upload the `dist/public` folder to Netlify
   - Or connect your Git repository to Netlify for automatic deployments

3. **Configure Environment Variables in Netlify:**
   - Go to Site Settings > Environment Variables
   - Add: `SENDGRID_API_KEY` = your SendGrid API key

4. **Netlify Configuration:**
   - The `netlify.toml` file is already configured
   - Contact form will use Netlify Functions
   - All routes will redirect properly

### Contact Form
- Uses Netlify Functions for serverless backend
- Sends emails via SendGrid to info@madinimoyoni.co.uk
- Fully responsive and mobile-optimized

### Features
- ✅ Fully responsive design (mobile & desktop)
- ✅ SEIS calculator with authentic financial data
- ✅ Team member profiles with authentic photos
- ✅ Investment journey with multiple tiers
- ✅ Working contact form with email notifications
- ✅ Mobile section navigation
- ✅ SEO optimized

### Tech Stack
- React + TypeScript
- Vite build system
- Tailwind CSS
- shadcn/ui components
- Netlify Functions
- SendGrid email service

### Support
For technical issues, contact the development team or refer to Netlify's documentation for deployment troubleshooting.
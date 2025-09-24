# Psychologische Praxis Judith Marty - Website

## Project Overview

This is a static HTML website for "Psychologische Praxis Judith Marty", a psychological therapy practice in Zurich, Switzerland. The website serves as the main online presence for the practice, offering information about services including psychotherapy, counseling, supervision, and workshops.

## Architecture & Setup

### Frontend Architecture
- **Component-based architecture** using vanilla JavaScript and jQuery
- **Static HTML files** for all pages (index.html, about.html, kontakt.html, etc.)
- **Shared components** loaded dynamically via `assets/components.js`
- **CSS Framework** built on Milligram CSS with custom styling in `assets/main.css`
- **Responsive design** with mobile-first approach

### Server Setup
- **Express.js server** (`server.js`) serving static files on port 5000
- **Cache control** headers disabled for development
- **Route handling** for clean URLs (supports both `/page` and `/page.html`)
- **Host binding** to `0.0.0.0:5000` for Replit environment compatibility

### Key Components
- **Navigation** with dropdown menu functionality
- **Footer** with contact information and service links
- **Cookie banner** for GDPR compliance
- **Google Analytics** integration (ID: G-SMWX6CRR00)
- **Vercel Speed Insights** integration for Core Web Vitals and performance monitoring

## Development & Deployment

### Local Development
- Server runs on port 5000 using Express.js
- Start with `npm start` 
- Automatic cache control headers prevent caching issues

### Replit Configuration
- **Workflow**: "Website" runs `npm start` 
- **Output**: WebView for website preview
- **Deployment**: Configured for "autoscale" deployment target

### File Structure
```
/
├── server.js (Express server for static file serving)
├── package.json (Node.js dependencies)
├── index.html (Homepage)
├── about.html, kontakt.html, etc. (Individual pages)
├── assets/
│   ├── components.js (Shared navigation, footer, cookie banner)
│   ├── common.js (Google Analytics setup)
│   ├── main.css (Custom styling)
│   ├── milligram.min.css, normalize.css (CSS frameworks)
│   ├── images/ (Professional photos, logo, backgrounds)
│   ├── audio/ (Meditation MP3s in German/English)
│   └── documents/ (PDF forms and information sheets)
```

## Recent Changes

### September 24, 2025
- **Vercel Speed Insights Integration**: Added performance monitoring to track Core Web Vitals (LCP, FID, CLS, TTFB) and real user metrics. Integrated via CDN script in `assets/components.js` for automatic loading on all pages.

### September 22, 2025
- **GitHub Import Setup**: Configured fresh clone to run in Replit environment
- **Express Server**: Created `server.js` with static file serving and clean URL routing
- **Workflow Configuration**: Set up "Website" workflow to run on port 5000
- **Deployment Setup**: Configured autoscale deployment target
- **Cache Control**: Added headers to prevent caching issues in development

## Technical Notes

### Dependencies
- Express.js for static file serving
- jQuery (loaded from CDN) for DOM manipulation
- Google Fonts and external analytics
- Vercel Speed Insights (loaded from CDN) for performance monitoring

### Performance Considerations
- Images optimized for responsive design (desktop/mobile variants)
- Components loaded dynamically to reduce duplication
- Clean URL structure for SEO

### Content Management
- All text content in German for Swiss audience
- Semantic HTML structure for accessibility
- Professional photography and branding assets
- GDPR-compliant privacy policy and cookie management

## User Preferences

*No specific user preferences documented yet - will be updated as the user expresses preferences for coding style, workflow, or tools.*
# Psychologische Praxis Judith Marty - Website

## Project Overview

This is a static website for "Psychologische Praxis Judith Marty", a psychological therapy practice in Zurich, Switzerland. The website serves as the main online presence for the practice, offering information about services including psychotherapy, counseling, supervision, and workshops. The site is built using Eleventy (11ty) static site generator with Liquid templating.

## Architecture & Setup

### Frontend Architecture
- **Eleventy Static Site Generator** using Liquid templating engine
- **Component-based templates** with reusable layouts and partials
- **Data-driven navigation** and site metadata via JSON files
- **CSS Framework** built on Milligram CSS with custom styling in `assets/main.css`
- **Responsive design** with mobile-first approach
- **Build-time rendering** for optimal performance and SEO

### Build System
- **Eleventy (v3.1.2)** compiles Liquid templates to static HTML
- **Input directory**: `src/` contains all templates and data
- **Output directory**: `_site/` contains the built static site
- **Template formats**: Liquid, HTML, Markdown
- **Build command**: `npm run build` (runs Eleventy)
- **Dev command**: `npm run dev` (runs Eleventy with live reload)

### Server Setup
- **Express.js server** (`server.js`) serves built files from `_site/` on port 5000
- **Cache control** headers disabled for development
- **Route handling** for clean URLs (supports both `/page` and `/page.html`)
- **Host binding** to `0.0.0.0:5000` for Replit environment compatibility

### Template System
- **Layouts**: `src/_includes/layouts/base.liquid` - Main layout with header, navigation, footer
- **Partials**:
  - `src/_includes/partials/navigation.liquid` - Dropdown navigation menu
  - `src/_includes/partials/footer.liquid` - Footer with contact info and service links
  - `src/_includes/partials/finisher.liquid` - Copyright and privacy policy link
  - `src/_includes/partials/cookie-banner.liquid` - GDPR cookie consent banner
- **Data Files**:
  - `src/_data/site.json` - Site metadata, contact info, analytics IDs, cookie notice text
  - `src/_data/navigation.json` - Navigation menu structure with dropdown items

### Key Components
- **Navigation** with dropdown menu functionality (JavaScript-enhanced)
- **Footer** with contact information and service links
- **Cookie banner** for GDPR compliance with sessionStorage
- **Google Analytics** integration (ID: G-SMWX6CRR00)
- **Vercel Speed Insights** integration for Core Web Vitals monitoring
- **Active page highlighting** in navigation

### JavaScript
- **assets/navigation.js** - Provides interactive functionality:
  - Dropdown menu toggle and outside-click-to-close
  - Active menu item highlighting based on current page
  - Cookie banner show/hide with sessionStorage persistence
  - Page fade-in animations
  - Vercel Speed Insights initialization
- **assets/common.js** - Google Analytics configuration
- **jQuery** loaded from CDN for DOM manipulation

## Development & Deployment

### Local Development
- **Build**: `npm run build` - Compiles Eleventy templates to _site/
- **Dev**: `npm run dev` - Runs Eleventy with live reload (BrowserSync)
- **Start**: `npm start` - Runs Express server serving _site/ on port 5000
- **Workflow**: "Website" runs `npm run build && npm start`

### Production Deployment
- **Platform**: Vercel
- **Project**: "praxis-judith-marty"
- **URL**: www.judith-marty.ch
- **Deployment**: Configured for "autoscale" deployment target

### Replit Configuration
- **Workflow**: "Website" runs `npm run build && npm start`
- **Output**: WebView for website preview
- **Port**: 5000

### File Structure
```
/
├── .eleventy.js (Eleventy configuration)
├── server.js (Express server serving _site/)
├── package.json (Node.js dependencies including Eleventy)
├── src/ (Source files for Eleventy)
│   ├── _data/
│   │   ├── site.json (Site metadata, contact, analytics)
│   │   └── navigation.json (Menu structure)
│   ├── _includes/
│   │   ├── layouts/
│   │   │   └── base.liquid (Main layout template)
│   │   └── partials/
│   │       ├── navigation.liquid (Navigation menu)
│   │       ├── footer.liquid (Footer section)
│   │       ├── finisher.liquid (Copyright section)
│   │       └── cookie-banner.liquid (Cookie consent)
│   └── pages/
│       ├── index.liquid (Homepage)
│       ├── about.liquid, praxis.liquid, kontakt.liquid (Info pages)
│       ├── psychotherapie.liquid, supervision.liquid, etc. (Service pages)
│       └── [14 pages total]
├── _site/ (Built output - served by Express)
├── assets/
│   ├── navigation.js (Interactive functionality)
│   ├── common.js (Google Analytics)
│   ├── main.css (Custom styling)
│   ├── milligram.min.css, normalize.css (CSS frameworks)
│   ├── images/ (Photos, logo, backgrounds)
│   ├── audio/ (Meditation MP3s in German/English)
│   └── documents/ (PDF forms and information sheets)
└── [Legacy HTML files - now migrated to src/pages/]
```

## Recent Changes

### October 1, 2025
- **Eleventy Migration**: Complete migration from static HTML with JavaScript component injection to Eleventy static site generator with Liquid templates
  - Installed and configured Eleventy v3.1.2 with Liquid templating
  - Created base.liquid layout with flexible stage/hero section and dynamic content classes
  - Built reusable partials for navigation, footer, finisher, and cookie banner
  - Migrated all 14 pages to Liquid templates with proper front matter
  - Created data files for site metadata and navigation structure
  - Developed navigation.js for dropdown, active highlighting, and cookie banner functionality
  - Updated build workflow to compile with Eleventy before serving
  - Updated server.js to serve from _site/ directory
- **Benefits**: Improved maintainability, centralized configuration, build-time rendering, easier content updates

### September 24, 2025
- **Vercel Speed Insights Integration**: Added performance monitoring to track Core Web Vitals (LCP, FID, CLS, TTFB) and real user metrics

### September 22, 2025
- **GitHub Import Setup**: Configured fresh clone to run in Replit environment
- **Express Server**: Created `server.js` with static file serving and clean URL routing
- **Workflow Configuration**: Set up "Website" workflow to run on port 5000
- **Deployment Setup**: Configured autoscale deployment target
- **Cache Control**: Added headers to prevent caching issues in development

## Technical Notes

### Dependencies
- **@11ty/eleventy** (v3.1.2) - Static site generator
- **Express.js** - Static file server for development
- **jQuery** (CDN) - DOM manipulation for interactive features
- **Milligram CSS** - Minimal CSS framework
- **Google Analytics** - Usage tracking
- **Vercel Speed Insights** - Performance monitoring

### Performance Considerations
- **Build-time rendering** - All HTML generated at build time, not runtime
- **Static assets** - Images, CSS, JS served directly without processing
- **Optimized images** - Desktop and mobile variants for responsive design
- **Clean URL structure** - SEO-friendly URLs
- **Component reuse** - DRY principle with Liquid partials
- **Data-driven** - Centralized configuration in JSON files

### Content Management
- **14 pages total**: Homepage, 5 service pages, 8 information pages
- **German language** - All content for Swiss audience
- **Semantic HTML** - Accessibility-focused structure
- **GDPR compliance** - Cookie banner with consent management
- **Professional assets** - Photography and branding materials

### Template Development
- **Front matter variables**: layout, title, description, permalink, pageClass, headerRowVisible, stage
- **Liquid filters available**: Standard Liquid filters plus Eleventy filters
- **Data access**: {{ site.* }} for site.json, {{ navigation.* }} for navigation.json
- **Includes**: {% include "partials/name.liquid" %}
- **Content injection**: {{ content }} in layouts

## User Preferences

*No specific user preferences documented yet - will be updated as the user expresses preferences for coding style, workflow, or tools.*

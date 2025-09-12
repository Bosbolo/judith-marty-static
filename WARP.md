# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static HTML website for the "Psychologische Praxis Judith Marty" (Judith Marty Psychology Practice), a psychological therapy practice in Zurich, Switzerland. The website is currently live and serves as the main online presence for the practice.

## Architecture & Structure

### Frontend Architecture
The website uses a **component-based architecture** implemented with vanilla JavaScript and jQuery:
- **Shared Components**: Navigation, footer, and cookie banner components are loaded dynamically via `assets/components.js`
- **Consistent Layout**: All pages follow the same HTML structure pattern with header, content, and footer sections
- **CSS Framework**: Built on Milligram CSS framework with custom styling in `assets/main.css`
- **Responsive Design**: Mobile-first approach with responsive breakpoints and device-specific image serving

### Page Structure Pattern
Every HTML page follows this consistent pattern:
1. **Head Section**: Meta tags, CSS/JS imports, Google Analytics, inline JavaScript
2. **Header Section** (`#top-container`): Logo and navigation
3. **Content Section** (`#content`): Page-specific content with semantic class names
4. **Footer Section**: Dynamically loaded footer and finisher components
5. **Cookie Banner**: GDPR-compliant cookie notice

### Key Technical Components
- **Dynamic Navigation**: Dropdown navigation implemented with vanilla JavaScript
- **Component System**: Reusable navigation, footer, and cookie banner loaded via `components.js`
- **Fade-in Effects**: jQuery-based page animations on load
- **Cookie Management**: Session-based cookie consent tracking
- **Contact Form**: PHP-based contact form in `kontakt.php` (currently commented out)
- **Google Analytics**: Integrated tracking with ID `G-SMWX6CRR00`
- **Photo Gallery**: Unite Gallery plugin for practice photos
- **Audio Content**: Embedded meditation recordings (German/English)

## Development Commands

### Local Development
```bash
# Start a simple HTTP server for local testing
python -m http.server 8000
# or
php -S localhost:8000

# Open in browser
open http://localhost:8000
```

### File Operations
```bash
# View all HTML pages
ls *.html

# Search for specific content across pages
grep -r "search_term" *.html *.php

# Check for broken links or references
grep -r "assets/" *.html *.php

# View component definitions
cat assets/components.js

# Find pages using specific components
grep -r "navigationComponent\|footerComponent\|cookieNoticeBanner" *.html
```

### Content Validation
```bash
# Validate HTML structure
# Check all asset references are properly linked
grep -o 'assets/[^"]*' *.html | sort | uniq

# Test local server with all assets
python -m http.server 8000 && open http://localhost:8000

# Check for broken internal links
grep -r "href=" *.html | grep -v "http" | grep -v "mailto" | grep -v "tel"
```

## Important Development Notes

### Assets Directory Structure
The `assets/` directory contains all required static resources:
- **CSS Files**: `normalize.css`, `milligram.min.css`, `main.css`
- **JavaScript**: `components.js` with navigation, footer, and cookie banner components
- **Images**: Professional photos, SVG logo, backgrounds
- **Gallery**: Photo gallery with Unite Gallery plugin (`unitegallery/`)
- **Audio Files**: Meditation MP3s (German and English)
- **PDF Documents**: Forms and information sheets for psychotherapy
- **Fonts**: Custom Helvetica Neue UltraLight font

### PHP Contact Form
The contact form in `kontakt.php` is currently commented out but contains fully functional PHP code for:
- Form validation
- Email sending functionality
- Spam protection
- Server-side processing

### GitHub Actions
There's a basic GitHub Actions workflow (`.github/workflows/blank.yml`) that currently only runs hello world commands. This could be extended for:
- HTML validation
- Asset optimization
- Deployment automation

## Content Management

### Page Types
- **Landing Page** (`index.html`): Main overview with service offerings
- **Service Pages**: Detailed pages for each service (psychotherapy, coaching, supervision, etc.)
- **About Pages**: Information about practitioners
- **Contact**: Contact information and form
- **Legal**: Privacy policy (`datenschutzerklaerung.html`)

### Content Patterns
All service pages follow similar content structure:
- Service description
- Methodology explanation
- Pricing/tariff information
- Contact call-to-action
- Emergency contact information (where applicable)

### Multilingual Considerations
- Primary language: German
- Site targets Swiss German-speaking audience
- Uses Swiss-specific terminology and contact information

## Deployment Considerations

### Static Hosting
This website can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting with PHP support (for contact form)

### Domain & SSL
- Production domain: `https://www.judith-marty.ch`
- All internal links reference this domain
- Requires SSL certificate for GDPR compliance

### SEO & Analytics
- Each page has specific meta descriptions
- Google Analytics integration
- Sitemap and robots.txt included
- Semantic HTML structure for accessibility

## Key Files for Development

- **`index.html`**: Main landing page template
- **`kontakt.php`**: Contains PHP contact form logic (commented out)
- **`assets/components.js`**: Shared navigation, footer, and cookie banner components
- **`assets/main.css`**: Custom styling with responsive breakpoints
- **`datenschutzerklaerung.html`**: Privacy policy (important for GDPR)
- **All service HTML files**: Follow consistent pattern for easy templating

## Component System

The website uses a simple component system via `assets/components.js`:
- **navigationComponent**: Dropdown navigation with active page highlighting
- **footerComponent**: Contact info and service links
- **finisherComponent**: Copyright and legal links
- **cookieNoticeBanner**: GDPR-compliant cookie consent

Components are dynamically loaded via jQuery and injected into placeholder divs on each page.

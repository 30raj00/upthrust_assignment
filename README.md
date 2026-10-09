# Upthrust Landing Page

This is my implementation of the Upthrust interview assignment. I built this landing page using the provided Figma design and assets, focusing on performance, responsiveness, and a clean code structure.

## Tech Stack
- HTML5 & CSS3
- Vanilla JavaScript
- Google Model Viewer (for the 3D model)

## What I Built
- **Responsive Layout**: Designed to match the Figma specs across mobile, tablet, and desktop viewports.
- **Dynamic Services & 3D Scroll**: The 4 services are injected dynamically via JavaScript, featuring a horizontal scroll layout synced with the background pipe.
- **Functional Forms & Tracking**: Both contact forms work and push a `form_submit` event to the Google Tag Manager (GTM) data layer upon success.
- **SEO & Accessibility**: Added a unique page title, meta description, Open Graph tags, canonical link, semantic tags, and alt texts.

## Project Structure
- `index.html` - Main markup and SEO tags
- `style.css` - Custom styles and responsive layouts
- `script.js` - Dynamic rendering, scroll effects, and form handling
- `assets/` - Images and 3D model files
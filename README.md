Portfolio template - Carmen García Areso

Professional portfolio showcasing multimedia and graphic design work with GSAP scroll animations. Built for the Web Foundations final project at UDIT (Grade 2: Bootstrap + GSAP).

 Live Demo: https://carmengareso.github.io/final-project/
Mostrar imagen

 About This Project
This is a modern, responsive portfolio designed to showcase my work as a multimedia and graphic designer. The site features smooth GSAP-powered animations, a clean dark aesthetic with vibrant magenta accents, and a carefully curated selection of my best projects.
Key Features

 Smooth GSAP animations - ScrollTrigger reveals, parallax effects
 Fully responsive - Mobile-first design optimized for all devices
 Dark/Light theme toggle - User preference with localStorage
 Custom typography - Three carefully selected fonts (Urbanist, Space Grotesk, Playfair Display)
 Real projects - Featuring Umbral, LUAR, and De Agujas y Alturas
 Accessibility-first - Respects prefers-reduced-motion
 Performance optimized - GPU-accelerated animations


 Tech Stack
Core Technologies

HTML5 - Semantic markup
CSS3 - Custom properties, flexbox, grid, backdrop-filter
JavaScript (ES6+) - Modern syntax with GSAP integration

Frameworks & Libraries

Bootstrap 5.3.2 - Responsive grid and utilities
GSAP 3.12 - Professional animation library

ScrollTrigger for scroll-based animations
ScrollToPlugin for smooth navigation



Design & Typography

Urbanist - Body text (400, 500, 600, 700)
Space Grotesk - Headings (400, 500, 600, 700)
Playfair Display - Hero name (italic)

Brand Colors

Primary: #e415e8 (Vibrant Magenta)
Background: #0f0f0f (Near Black)
Text: #f5f5f5 (Near White)


 Getting Started
Prerequisites

A modern web browser (Chrome, Firefox, Safari, Edge)
A code editor (VS Code recommended)
Git installed on your machine

Installation

Clone the repository

bash   git clone https://github.com/Carmengareso/final-project.git
   cd final-project

Open in your code editor

bash   code .

View locally

Option 1: Open index.html directly in your browser
Option 2: Use VS Code Live Server extension (recommended)

Install "Live Server" extension
Right-click index.html → "Open with Live Server"





Deployment
The site is deployed on GitHub Pages:

Live URL: https://carmengareso.github.io/final-project/
Deployment source: main branch, / (root) folder
Automatic deployment on push to main


 Project Structure
final-project/
├── index.html              # Main HTML file
├── 404.html                # Custom 404 error page
├── README.md               # This file
├── LICENSE                 # MIT License
├── .gitignore              # Git ignore rules
│
├── assets/
│   ├── css/
│   │   ├── index.css           # Barrel file (imports all CSS)
│   │   ├── base.css            # Variables, resets, typography
│   │   ├── theme.css           # Theme configuration
│   │   ├── navigation.css      # Navbar styles
│   │   ├── style.css           # Section-specific styles
│   │   ├── accessibility.css   # Motion preferences, focus states
│   │   └── responsive.css      # Media queries
│   │
│   ├── js/
│   │   └── main.js             # GSAP animations & interactions
│   │
│   └── images/
│       ├── intro-portfolio.png  # Hero background
│       ├── about-me.png         # About section image
│       ├── project 1.png        # Umbral project
│       ├── project 2.jpg        # LUAR project
│       ├── project 3.png        # De Agujas y Alturas
│       └── favicon.ico          # Site favicon
│
└── docs/
    └── plan.md                  # Initial project planning
CSS Architecture
The project uses a barrel file pattern with index.css as the entry point:
css@import url(theme.css);        /* 1. Theme variables & brand colors */
@import url(base.css);         /* 2. Typography & utilities */
@import url(navigation.css);   /* 3. Navbar styles */
@import url(style.css);        /* 4. Section styles */
@import url(accessibility.css); /* 5. Motion preferences */
@import url(responsive.css);   /* 6. Media queries */

 Featured Projects
1. Umbral
Revista conceptual sobre Marina Abramović

Explores performance art through the lens of Marina Abramović
Themes: body, pain, time, resistance
Format: Conceptual magazine

2. LUAR
Fotografía + Diseño de Marca

Photography combined with brand design
Solid aesthetic with impactful visual experience
Brand identity development

3. De Agujas y Alturas
Libro de Fotografía

Explores the relationship between society and high heels
Photo book format
Social commentary through fashion


 Browser Support
BrowserVersionStatusChrome90+ Full supportFirefox88+ Full supportSafari14+ Full supportEdge90+ Full support
Mobile:

iOS Safari 14+
Chrome Android 90+
Samsung Internet 14+


 Accessibility Features

 Semantic HTML5 structure
 Proper heading hierarchy
 ARIA labels on interactive elements
 Keyboard navigation support
 Focus visible states
 prefers-reduced-motion support
 Alt text on all images
 Color contrast meets WCAG AA standards


 Performance
Optimization Techniques

Lazy loading images - loading="lazy" on images below the fold
GPU-accelerated animations - Only animating transform and opacity
CDN delivery - Bootstrap and GSAP from fast CDNs
Minimal dependencies - No unnecessary libraries
Custom fonts - Loaded via Google Fonts with display=swap


Credits
Built By
Carmen García Areso

Email: carmen.garcia@alumnos.udit.es
LinkedIn: linkedin.com/in/carmengareso
GitHub: @Carmengareso

Technologies

Bootstrap 5 - CSS Framework
GSAP - Animation Library
Google Fonts - Typography

Course

Course: Web Foundations - UDIT (University of Design, Innovation and Technology)
Professor: Rubén Vega Balbás, PhD
Academic Year: 2024-2025
Grade Level: Grade 2 (Bootstrap + GSAP)

Inspiration

Web Atelier (UDIT) - Course materials
GSAP ScrollTrigger Examples
Awwwards - Design inspiration


 License
This project is licensed under the MIT License - see the LICENSE file for details.
What this means:

 Free to use commercially
 Free to modify
 Free to distribute
 Must include original license and copyright notice


Academic Declaration
This project was created as the final project for the Web Foundations course at UDIT (University of Design, Innovation and Technology) during the 2024-2025 academic year.
AI Usage: This project was built using course materials, personal research, and assistance from Claude AI for code review, debugging, and optimization suggestions. All core design and implementation decisions were made independently. AI was used following the two-phase approach (Planning → Implementation) as specified in the course requirements.

Contact
Carmen García Areso

Email: carmen.garcia@alumnos.udit.es
LinkedIn: linkedin.com/in/carmengareso
GitHub: @Carmengareso
Portfolio: carmengareso.github.io/final-project


<div align="center">
 Built with passion using Bootstrap 5 + GSAP
View Live Site | Report Bug
© 2025 Carmen García Areso · UDIT
</div>
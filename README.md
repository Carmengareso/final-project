# 🎨 Portfolio Carmen García Areso

> Professional portfolio showcasing multimedia and graphic design work with GSAP scroll animations. Built with Bootstrap 5 for the Web Foundations course at UDIT.

**🔗 Live Demo:** [https://carmengareso.github.io/final-project/](https://carmengareso.github.io/final-project/)

![Portfolio Preview](./assets/images/preview.png)

---

## 📋 About This Project

This is a modern, responsive portfolio template designed for multimedia and graphic designers. It demonstrates professional web development standards learned in the Web Foundations course at UDIT (Grade 2: Bootstrap + GSAP track).

### Key Features

- 🎭 **Smooth GSAP animations** - ScrollTrigger reveals, parallax effects, and timeline sequences
- 📱 **Fully responsive** - Mobile-first design optimized for all devices
- 🌓 **Dark/Light theme toggle** - User preference with localStorage persistence
- 🎨 **Fluid typography** - Scales smoothly with `clamp()` for all screen sizes
- 🎪 **Floating ambient shapes** - Subtle animated background elements
- ♿ **Accessibility-first** - Respects `prefers-reduced-motion` and includes proper ARIA labels
- 🚀 **Performance optimized** - GPU-accelerated animations, lazy-loaded images

---

## 🛠️ Tech Stack

### Core Technologies
- **HTML5** - Semantic markup with proper heading hierarchy
- **CSS3** - Custom properties, flexbox, grid, backdrop-filter
- **JavaScript (ES6+)** - Modern syntax with GSAP integration

### Frameworks & Libraries
- **[Bootstrap 5.3.2](https://getbootstrap.com/)** - Responsive grid and utilities (via CDN)
- **[GSAP 3.12](https://gsap.com/)** - Professional animation library (via CDN)
  - ScrollTrigger plugin for scroll-based animations
  - ScrollToPlugin for smooth navigation

### Design Patterns
- **Barrel file CSS architecture** - Modular stylesheets with single entry point
- **BEM-inspired naming** - Clear, maintainable class names
- **Mobile-first responsive design** - Progressive enhancement approach

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Git installed on your machine

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Carmengareso/final-project.git
   cd final-project
   ```

2. **Open in your code editor**
   ```bash
   code .
   ```

3. **View locally**
   - Option 1: Open `index.html` directly in your browser
   - Option 2: Use VS Code Live Server extension (recommended)
     - Install "Live Server" extension
     - Right-click `index.html` → "Open with Live Server"

### Deployment

The site is deployed on **GitHub Pages**:
- Live URL: https://carmengareso.github.io/final-project/
- Deployment source: `main` branch, `/ (root)` folder
- Automatic deployment on push to main

---

## 📁 Project Structure

```
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
│       ├── favicon.ico         # Site favicon
│       ├── og-image.jpg        # Open Graph image (social sharing)
│       ├── preview.png         # README screenshot
│       └── project-*.jpg       # Project images
│
└── docs/
    └── brief.md                # Initial project planning (optional)
```

### CSS Architecture

The project uses a **barrel file pattern** with `index.css` as the single entry point:

```css
@import url(theme.css);        /* 1. Theme variables */
@import url(base.css);         /* 2. Base styles & typography */
@import url(navigation.css);   /* 3. Navbar styles */
@import url(style.css);        /* 4. Section styles */
@import url(accessibility.css); /* 5. Accessibility features */
@import url(responsive.css);   /* 6. Media queries */
```

**Benefits:**
- ✅ Modular and easy to maintain
- ✅ Clear separation of concerns
- ✅ Single `<link>` tag in HTML
- ✅ Easy to find specific styles

---

## 🎨 Customization Guide

### 1. Personal Information

Update these in `index.html`:

```html
<!-- Hero Section -->
<h1 class="display-1 fw-bold hero-title">Your Name</h1>
<p class="lead hero-subtitle mb-4">Your Title</p>

<!-- Footer -->
<p class="mb-0">&copy; 2025 Your Name. Built with Bootstrap 5 + GSAP.</p>
```

### 2. Colors & Branding

Edit `assets/css/base.css`:

```css
:root {
	--bs-primary: #6366f1;        /* Change to your brand color */
	--bs-primary-rgb: 99, 102, 241;
	--bs-body-bg: #0f0f0f;        /* Background color */
	--bs-body-color: #f5f5f5;     /* Text color */
}
```

### 3. Projects

Replace placeholder projects in the Projects section with your own work:

```html
<img src="./assets/images/your-project.jpg" alt="Project Name" />
<h3 class="card-title h5">Your Project Name</h3>
<p class="card-text text-muted small">Brief description...</p>
```

### 4. Skills

Update skill bars in the Skills section:

```html
<div class="skill-item gsap-reveal mb-4">
	<div class="d-flex justify-content-between mb-2">
		<span class="fw-semibold">Your Skill</span>
		<span class="text-muted">85%</span>
	</div>
	<div class="progress" style="height: 8px">
		<div class="progress-bar skill-bar" data-width="85"></div>
	</div>
</div>
```

The `data-width` attribute controls the animated width percentage.

### 5. Contact Information

Update email and social links:

```html
<a href="mailto:your.email@example.com" class="btn btn-primary btn-lg mb-4">
	Start a Conversation
</a>

<!-- Update GitHub, LinkedIn, Twitter links -->
<a href="https://github.com/YOUR-USERNAME" ...>
```

---

## ⚡ Performance

### Lighthouse Scores (Target)
- 🟢 Performance: 90+
- 🟢 Accessibility: 95+
- 🟢 Best Practices: 95+
- 🟢 SEO: 100

### Optimization Techniques Used
- **Lazy loading images** - `loading="lazy"` on all images below the fold
- **GPU-accelerated animations** - Only animating `transform` and `opacity`
- **CDN delivery** - Bootstrap and GSAP loaded from fast CDNs
- **Minimal dependencies** - No unnecessary libraries
- **Reduced motion support** - Respects user accessibility preferences

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Full support |
| Firefox | 88+     | ✅ Full support |
| Safari  | 14+     | ✅ Full support |
| Edge    | 90+     | ✅ Full support |

**Mobile:**
- iOS Safari 14+
- Chrome Android 90+
- Samsung Internet 14+

---

## ♿ Accessibility Features

- ✅ Semantic HTML5 structure
- ✅ Proper heading hierarchy (single `<h1>`, logical flow)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus visible states for all interactive elements
- ✅ `prefers-reduced-motion` support - disables animations for users who need it
- ✅ Alt text on all meaningful images
- ✅ Color contrast meets WCAG AA standards

---

## 🙏 Credits

### Built By
**Carmen García Areso**
- GitHub: [@Carmengareso](https://github.com/Carmengareso)
- Email: [carmengarcia@example.com](mailto:carmengarcia@example.com)

### Technologies
- [Bootstrap 5](https://getbootstrap.com/) - CSS Framework
- [GSAP](https://gsap.com/) - Animation Library
- [Picsum Photos](https://picsum.photos/) - Placeholder Images

### Course
- **Course:** Web Foundations - UDIT (University of Design, Innovation and Technology)
- **Professor:** Rubén Vega Balbás, PhD
- **Academic Year:** 2024-2025
- **Grade Level:** Grade 2 (Bootstrap + GSAP)

### Inspiration
- [Web Atelier (UDIT)](https://github.com/ruvebal/web-atelier-udit) - Course materials and lessons
- [GSAP ScrollTrigger Examples](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) - Animation patterns
- [Awwwards](https://www.awwwards.com/) - Design inspiration

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

**What this means:**
- ✅ Free to use commercially
- ✅ Free to modify
- ✅ Free to distribute
- ✅ Must include original license and copyright notice

---

## 🤝 Contributing

This is a student project, but improvements are welcome!

To suggest changes:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📬 Contact

**Carmen García Areso**
- Email: carmengarcia@example.com
- GitHub: [@Carmengareso](https://github.com/Carmengareso)
- Portfolio: [https://carmengareso.github.io/final-project/](https://carmengareso.github.io/final-project/)

---

## 🎓 Academic Declaration

This project was created as the final project for the Web Foundations course at UDIT (University of Design, Innovation and Technology) during the 2024-2025 academic year.

**AI Usage:** This project was built using course materials, personal research, and assistance from Claude AI for code review, debugging, and optimization suggestions. All core design and implementation decisions were made independently.

---

<div align="center">

**⭐ Built with ❤️ using Bootstrap 5 + GSAP**

[View Live Site](https://carmengareso.github.io/final-project/) | [Report Bug](https://github.com/Carmengareso/final-project/issues) | [Request Feature](https://github.com/Carmengareso/final-project/issues)

</div>
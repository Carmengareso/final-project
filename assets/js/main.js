/**
 * ==========================================================================
 * GRADE 2: BOOTSTRAP + GSAP PORTFOLIO DEMO
 * Professional scroll animations with GSAP ScrollTrigger
 * ==========================================================================
 */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const prefersReducedMotion = window.matchMedia(
	'(prefers-reduced-motion: reduce)'
).matches;

// ==========================================================================
// 2. HERO ANIMATIONS
// ==========================================================================

function initHeroAnimations() {
	if (prefersReducedMotion) return;

	const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

	heroTl
		.from('.hero-title', {
			y: 100,
			opacity: 0,
			duration: 1.5,
		})
		.from(
			'.hero-subtitle',
			{
				y: 50,
				opacity: 0,
				duration: 0.8,
			},
			'-=0.6'
		)
		// ❌ COMENTADO: No tienes .hero-cta en tu HTML
		// .from(
		// 	'.hero-cta',
		// 	{
		// 		y: 30,
		// 		opacity: 0,
		// 		duration: 0.6,
		// 	},
		// 	'-=0.4'
		// )
		.from(
			'.scroll-indicator',
			{
				opacity: 0,
				duration: 0.5,
			},
			'-=0.2'
		);

	// Floating shapes
	gsap.to('.shape-1', {
		x: 50,
		y: -30,
		duration: 8,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut',
	});

	gsap.to('.shape-2', {
		x: -40,
		y: 40,
		duration: 10,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut',
	});

	gsap.to('.shape-3', {
		x: 30,
		y: 20,
		duration: 7,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut',
	});

	// Parallax
	gsap.to('.hero-bg', {
		yPercent: 30,
		ease: 'none',
		scrollTrigger: {
			trigger: '.hero',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
		},
	});

	gsap.to('.floating-shapes', {
		yPercent: 20,
		ease: 'none',
		scrollTrigger: {
			trigger: '.hero',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
		},
	});
}

// ==========================================================================
// 3. SCROLL REVEAL ANIMATIONS
// ==========================================================================

function initScrollReveals() {
	if (prefersReducedMotion) return;

	gsap.utils.toArray('.gsap-reveal').forEach((el) => {
		gsap.from(el, {
			y: 50,
			opacity: 0,
			duration: 0.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: el,
				start: 'top 85%',
				toggleActions: 'play none none none',
			},
		});
	});
}

// ==========================================================================
// 4. SKILL BARS ANIMATION
// ==========================================================================

function initSkillBars() {
	const skillBars = document.querySelectorAll('.skill-bar');

	skillBars.forEach((bar) => {
		const targetWidth = bar.dataset.width + '%';

		if (prefersReducedMotion) {
			bar.style.width = targetWidth;
			return;
		}

		gsap.to(bar, {
			width: targetWidth,
			duration: 1.2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: bar,
				start: 'top 90%',
				toggleActions: 'play none none none',
			},
		});
	});
}

// ==========================================================================
// 5. PROJECT CARDS STAGGER ANIMATION
// ==========================================================================

function initProjectCards() {
	if (prefersReducedMotion) return;

	ScrollTrigger.batch('.project-card', {
		onEnter: (batch) =>
			gsap.from(batch, {
				y: 60,
				opacity: 0,
				duration: 0.8,
				stagger: 0.15,
				ease: 'power2.out',
			}),
		start: 'top 90%',
		once: true,
	});
}

// ==========================================================================
// 6. NAVBAR BACKGROUND ON SCROLL
// ==========================================================================

function initNavbarScroll() {
	const navbar = document.querySelector('.navbar');

	ScrollTrigger.create({
		start: 'top -100',
		onUpdate: (self) => {
			if (self.scroll() > 100) {
				navbar.classList.add('scrolled');
			} else {
				navbar.classList.remove('scrolled');
			}
		},
	});
}

// ==========================================================================
// 7. Smooth Scroll for Anchor Links
// ==========================================================================

function initSmoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e) => {
			const targetId = anchor.getAttribute('href');
			if (targetId === '#') return;

			const target = document.querySelector(targetId);
			if (target) {
				e.preventDefault();

				const navbarCollapse = document.querySelector('.navbar-collapse');
				if (navbarCollapse.classList.contains('show')) {
					bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
				}

				const navHeight = document.querySelector('.navbar').offsetHeight;

				gsap.to(window, {
					duration: 0.8,
					scrollTo: { y: target, offsetY: navHeight },
					ease: 'power2.inOut',
				});
			}
		});
	});
}

// ==========================================================================
// 8. Initialize Everything
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
	// Theme Toggle
	const toggleBtn = document.getElementById('themeToggle');
	const root = document.documentElement;

	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) root.setAttribute('data-theme', savedTheme);

	toggleBtn?.addEventListener('click', () => {
		const current = root.getAttribute('data-theme') || 'dark';
		const next = current === 'dark' ? 'light' : 'dark';
		root.setAttribute('data-theme', next);
		localStorage.setItem('theme', next);
	});

	// Init animations
	initHeroAnimations();
	initScrollReveals();
	initSkillBars();
	initProjectCards();
	initNavbarScroll();
	initSmoothScroll();

	// Refresh after images load
	window.addEventListener('load', () => {
		ScrollTrigger.refresh();
	});
});

// ==========================================================================
// 9. Cleanup
// ==========================================================================

window.cleanupAnimations = () => {
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	gsap.killTweensOf('*');
};
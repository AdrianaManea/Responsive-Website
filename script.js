const pageOverlay = document.querySelector('.page-overlay');
const header = document.querySelector('.header')
const navigation = document.querySelector('.navigation')
const navItems = document.querySelectorAll('.nav-item');
const headerContent = document.querySelector('.header-content');
const scroll = document.querySelector('.scroll');
const sections = document.querySelectorAll('.section');
const lines = document.querySelectorAll('.lines');

// Controller
const controller = new ScrollMagic.Controller();

// Timeline
const tl = gsap.timeline({defaults: {duration: 1}});

tl.fromTo(pageOverlay, {x: 0}, {x: '100%'})
	.fromTo(lines, {opacity: 0, scaleY: 0}, {opacity: 1, scaleY: 1}, '-=1')
	.fromTo(header, {opacity: 0, y: -60}, {opacity: 1, y: 0}, '-=1')
	.fromTo(navigation, {opacity: 0, y: -60}, {opacity: 1, y: 0}, '-=1')
	.fromTo(navItems, {opacity: 0, y: -60}, {opacity: 1, y: 0, stagger: 0.10}, '-=1.3')
	.fromTo(headerContent, {opacity: 0, y: -60}, {opacity: 1, y: 0}, '-=1.3')
	.fromTo(scroll, {opacity: 0}, {opacity: 1})

const scrollAnimations =  () => {
	sections.forEach((section) => {
		const tl = gsap.timeline({defaults: {durations: 1}})
		tl.fromTo(section, {opacity: 0, y: -50, scale: 0}, {opacity: 1, y: 0, scale: 1})

		// Scroll Magic Scene
		let scene = new ScrollMagic.Scene({
			triggerElement: section,
			triggerHook: 0.72,
			reverse: false
		})
		.setTween(tl)
		// .addIndicators({colorStart: 'white', colorTrigger: 'white'})
		.addTo(controller)

	})
}


scrollAnimations()
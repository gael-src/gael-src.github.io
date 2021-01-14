// GSAP ANIMATIONS
// console.log(gsap);

gsap.registerPlugin(ScrollTrigger);

// HEADER HIDDEN
window.onscroll = function () {
	headerScrollFunction();
};

function headerScrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("nav-container").style.top = "0";
	} else {
		document.getElementById("nav-container").style.top = "-50px";
	}
}

// PARALLAX
// Animate Parallax (https://codepen.io/GreenSock/pen/JjYPQpN)
const parallax = document.querySelector(".main-container-parallax");
gsap.to(parallax, {
	yPercent: 50,
	ease: "none",
	scrollTrigger: {
		trigger: ".main-container", // Avec GSAP tu peux passer juste une string au lieu d'un querySelector (il le fait lui meme, mais c'est bien de savoir utiliser query je pense)
		start: "top top",
		scrub: true,
	},
});

// WORKS
// Animate projets au scroll
// (loop sur tout les elements, et on les anime un par un, avec un delay pour chacun baseé sur l'index)
const projects = document.querySelectorAll(".project-wrapper");
projects.forEach((box, index) => {
	gsap.fromTo(
		box,
		{
			y: 100,
			autoAlpha: 0,
		},
		{
			scrollTrigger: box,
			y: 0,
			autoAlpha: 1,
			duration: 1.8, //   duration: 0.6,
			delay: index * 0.175, //   delay: index * 0.075,
			ease: "power3.out",
		}
	);
});

// SKILLS
// SKILLS TITLE
// Animate "Skills" title en entrée dans le viewport
const title = document.querySelector("#skills-id .section-title");
gsap.fromTo(
	title,
	{
		x: 50,
		autoAlpha: 0,
	},
	{
		scrollTrigger: title,
		x: 0,
		autoAlpha: 1,
		duration: 1.8, // duration: 0.6,
		delay: 0.5, // delay: 0.5,
		ease: "power3.out",
	}
);

// SKILLS LISTS
// Animate "Skills" wrappers en entrée dans le viewport
// Les objets, c'est cool :)
const skills = {
	container: document.querySelector(".skills-container"),
	wrappers: document.querySelectorAll("#skills-id .skills-wrapper"),
};
// Regarde la propriété stagger de GSAP: c'est un peu comme faire un forEach, mais c'est different...
// Appelle moi et je t'explique
gsap.fromTo(
	skills.wrappers,
	{
		x: 50,
		autoAlpha: 0,
	},
	{
		scrollTrigger: skills.container,
		x: 0,
		autoAlpha: 1,
		duration: 0.6,
		stagger: 0.5,
		delay: 0.75,
		ease: "power3.out",
	}
);

// ABOUT
// ABOUT TITLE
const titleAbout = document.querySelector("#about-id .section-title-about");
gsap.fromTo(
	titleAbout,
	{
		x: 50,
		autoAlpha: 0,
	},
	{
		scrollTrigger: titleAbout,
		x: 0,
		autoAlpha: 1,
		duration: 1.2,
		delay: 0.8,
		ease: "power3.out",
	}
);

// ABOUT TEXT
const about = {
	container: document.querySelector(".main-about"),
	wrappers: document.querySelectorAll("#about-id .about-wrapper"),
	quoteWrapper: document.querySelectorAll("#about-id .about-quote-wrapper"),
};
// ABOUT TEXT
gsap.fromTo(
	about.wrappers,
	{
		x: 50,
		autoAlpha: 0,
	},
	{
		scrollTrigger: about.container,
		x: 0,
		autoAlpha: 1,
		duration: 1.2, // duration: 0.6,
		stagger: 0.5,
		delay: 1.8, // delay: 0.75,
		ease: "power3.out",
	}
);
// ABOUT QUOTE
gsap.fromTo(
	about.quoteWrapper,
	{
		x: -50,
		autoAlpha: 0,
	},
	{
		scrollTrigger: about.container,
		x: 0,
		autoAlpha: 1,
		duration: 2.2, // duration: 0.6,
		stagger: 0.5,
		delay: 2.8, // delay: 0.75,
		ease: "power3.out",
	}
);

// CONTACT
// CONTACT TITLE
const titleContact = document.querySelector("#contact-id .section-title");
gsap.fromTo(
	titleContact,
	{
		y: -50,
		autoAlpha: 0,
	},
	{
		scrollTrigger: titleContact,
		y: 0,
		autoAlpha: 1,
		duration: 1.2,
		delay: 0.8,
		ease: "power3.out",
	}
);

// CONTACT LINKS
const contact = {
	container: document.querySelector(".footer-container"),
	wrappers: document.querySelectorAll("#contact-id .contact-container-footer"),
};
gsap.fromTo(
	contact.wrappers,
	{
		y: 50,
		autoAlpha: 0,
	},
	{
		scrollTrigger: contact.container,
		y: 0,
		autoAlpha: 1,
		duration: 1.8, // duration: 0.6,
		stagger: 0.5,
		delay: 1.8, // delay: 0.75,
		ease: "power3.out",
	}
);

// HOME ??????
// HOME IMAGE
// Reference de l'element DOM <div class="main-container-background"></div>
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
const element = document.querySelector(".main-container-background");

// Petit snippet pour preloader une image en JavaScript
// Une fois l'image chargeée, on applique le style CSS avec du JS
// Et on anime l'image :)
const img = new Image();
img.src = "./assets/dominik-lange-unsplash.jpg";
img.decode().then(() => {
	element.style.backgroundImage = "url(" + img.src + ")";

	// Animation opacity: 0 à 1
	gsap.fromTo(
		element,
		{
			autoAlpha: 0,
		},
		{
			autoAlpha: 1,
			duration: 1,
			ease: "power3.out",
		}
	);

	// Animation de scale
	gsap.fromTo(
		element,
		{
			scale: 1.25,
		},
		{
			scale: 1,
			duration: 10,
			ease: "power3.out",
		}
	);
});

// HOME TEXT
// Animation Timeline
const timeline = gsap.timeline({
	paused: true,
});
timeline.fromTo(
	document.querySelectorAll(".js-stagger"),
	{
		// querySelectorAll et pas querySelector pour en choper + que le premier element
		x: -10,
		autoAlpha: 0,
	},
	{
		x: 0,
		autoAlpha: 1,
		stagger: 0.75,
		duration: 1,
		ease: "power3.inOut",
	},
	1
);
// HEADER
// timeline.fromTo(
// 	document.querySelector(".header-container"),
// 	1,
// 	{
// 		y: "-100%",
// 	},
// 	{
// 		y: "0%",
// 		ease: "power2.out",
// 	},
// 	4
// );
timeline.restart();

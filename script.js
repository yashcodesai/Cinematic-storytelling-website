/* ==================================================
   THE LAST SIGNAL - VERSION 2
   CINEMATIC SCROLL EXPERIENCE
================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ==================================================
   PERFORMANCE SETTINGS
================================================== */

ScrollTrigger.config({
  ignoreMobileResize: true
});

/* ==================================================
   HERO INTRO
================================================== */

const heroTimeline = gsap.timeline();

heroTimeline
.from(".hero-label", {
  opacity: 0,
  y: 60,
  duration: 1
})

.from(".hero-title", {
  opacity: 0,
  scale: 1.2,
  duration: 1.8,
  ease: "power4.out"
}, "-=0.5")

.from(".hero-description", {
  opacity: 0,
  y: 50,
  duration: 1
}, "-=1")

.from(".scroll-indicator", {
  opacity: 0,
  y: 20,
  duration: 1
}, "-=0.5");

/* ==================================================
   HERO GLOW PARALLAX
================================================== */

gsap.to(".hero-glow", {

  scale: 1.5,

  rotation: 180,

  ease: "none",

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }

});

/* ==================================================
   NEBULA FLOATING ANIMATION
================================================== */

gsap.to(".nebula-1", {

  x: 150,
  y: -100,

  duration: 25,

  repeat: -1,

  yoyo: true,

  ease: "sine.inOut"

});

gsap.to(".nebula-2", {

  x: -200,
  y: 120,

  duration: 35,

  repeat: -1,

  yoyo: true,

  ease: "sine.inOut"

});

gsap.to(".nebula-3", {

  x: 100,
  y: -150,

  duration: 30,

  repeat: -1,

  yoyo: true,

  ease: "sine.inOut"

});

/* ==================================================
   ENTITY FLOATING
================================================== */

gsap.utils.toArray(".entity").forEach((entity) => {

  gsap.to(entity, {

    y: -80,

    duration: 6,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

  });

});

/* ==================================================
   SIGNAL CORE
================================================== */

if(document.querySelector(".signal-core")){

  gsap.to(".signal-core", {

    scale: 1.3,

    opacity: 0.6,

    repeat: -1,

    yoyo: true,

    duration: 3,

    ease: "power1.inOut"

  });

}

/* ==================================================
   SIGNAL RINGS
================================================== */

gsap.utils.toArray(".rings").forEach((ring)=>{

  gsap.to(ring, {

    rotation: 360,

    duration: 60,

    repeat: -1,

    ease: "none"

  });

});

/* ==================================================
   ALIEN EYE
================================================== */

if(document.querySelector(".eye")){

  gsap.to(".eye", {

    scale: 1.05,

    duration: 4,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

  });

}

if(document.querySelector(".eye-inner")){

  gsap.to(".eye-inner", {

    scale: 0.75,

    duration: 2,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

  });

}

/* ==================================================
   CHAPTER REVEALS
================================================== */

gsap.utils.toArray(".chapter-content").forEach((section)=>{

  gsap.from(section, {

    opacity: 0,

    y: 120,

    duration: 1,

    scrollTrigger: {

      trigger: section,

      start: "top 85%",

      end: "top 40%",

      scrub: 1

    }

  });

});

/* ==================================================
   CHAPTER TITLES
================================================== */

gsap.utils.toArray(".chapter-title").forEach((title)=>{

  gsap.from(title, {

    opacity: 0,

    y: 150,

    scale: 0.9,

    scrollTrigger: {

      trigger: title,

      start: "top 90%",

      end: "top 50%",

      scrub: true

    }

  });

});

/* ==================================================
   MASSIVE TEXT
================================================== */

gsap.from(".massive-text", {

  opacity: 0,

  scale: 0.4,

  scrollTrigger: {

    trigger: ".massive-section",

    start: "top center",

    end: "bottom center",

    scrub: true

  }

});

gsap.to(".massive-text", {

  letterSpacing: "15px",

  scrollTrigger: {

    trigger: ".massive-section",

    start: "top center",

    end: "bottom center",

    scrub: true

  }

});

/* ==================================================
   GRID MOVEMENT
================================================== */

if(document.querySelector(".grid")){

  gsap.to(".grid", {

    backgroundPosition: "300px 300px",

    ease: "none",

    scrollTrigger: {

      trigger: ".grid",

      start: "top bottom",

      end: "bottom top",

      scrub: true

    }

  });

}

/* ==================================================
   STARFIELD MOTION
================================================== */

gsap.to(".space-universe", {

  backgroundPositionY: "-500px",

  ease: "none",

  scrollTrigger: {

    trigger: document.body,

    start: "top top",

    end: "bottom bottom",

    scrub: true

  }

});

/* ==================================================
   FINAL SECTION
================================================== */

gsap.from(".final-title", {

  opacity: 0,

  y: 120,

  scrollTrigger: {

    trigger: ".final-section",

    start: "top 70%",

    end: "top 30%",

    scrub: true

  }

});

gsap.from(".final-sub", {

  opacity: 0,

  y: 80,

  scrollTrigger: {

    trigger: ".final-section",

    start: "top 65%",

    end: "top 25%",

    scrub: true

  }

});

/* ==================================================
   PULSE ANIMATION
================================================== */

gsap.to(".pulse", {

  scale: 3,

  opacity: 0,

  repeat: -1,

  duration: 2,

  ease: "power1.out"

});

/* ==================================================
   CHAPTER FADE IN
================================================== */

gsap.utils.toArray(".chapter").forEach((chapter)=>{

  gsap.from(chapter, {

    opacity: 0.5,

    scrollTrigger: {

      trigger: chapter,

      start: "top 90%",

      end: "top 50%",

      scrub: true

    }

  });

});

/* ==================================================
   REFRESH
================================================== */

window.addEventListener("load", () => {

  ScrollTrigger.refresh();

});
gsap.registerPlugin(ScrollTrigger);

/**
 *intro page animation after scroll
 */
// Question: how to change this to effect in different media??
const introOnScroll = gsap
  .timeline()
  .to(".name", {
    x: "27vw",
    duration: 1.5,
    ease: Power4.In,
  })
  .to(
    ".name h3",
    {
      opacity: 0,
      duration: 2,
      ease: Power4.In,
    },
    "<"
  )
  .to(
    ".moon",
    {
      x: "24vw",
      y: "12vh",
      duration: 3,
      ease: Power4.In,
    },
    "-=1.5"
  )
  // TODO: add split text, stagger enter effect
  .to(
    ".word",
    {
      opacity: 1,
      duration: 2.5,
      ease: "expo.inOut",
    },
    "<"
  );

// scroll trigger need to put after timeline
ScrollTrigger.create({
  animation: introOnScroll,
  // markers: true,
  trigger: "#intro",
  start: "200px 10%",
  end: "200px",
  toggleActions: "play none none none",
});
/////////////////////////////

/**
 * intro parellax effect
 */
gsap.to("#intro .name", {
  y: -600,
  scrollTrigger: {
    // id: "intro-parallax",
    trigger: "#passions",
    scrub: true,
    start: "top bottom",
  },
});

gsap.to("#intro .word", {
  y: -750,
  scrollTrigger: {
    trigger: "#passions",
    scrub: true,
    start: "top bottom",
  },
});

// Issue: animation of moon is jumpy
// gsap.to("#intro .moon", {
//   y: -500,
//   scrollTrigger: {
//     trigger: "#passions",
//     scrub: true,
//     start: "top bottom",
//   },
// });

/////////////////////////////

/**
 * passion bullet point
 * .bullet
 */
// const bullets = gsap.utils.toArray(".bullet");
gsap.from(".bullet", {
  duration: 1,
  y: 150,
  ease: Power4.In,
  stagger: 0.1,
  scrollTrigger: {
    markers: true,
    trigger: "#passions",
    start: "top 15%",
    toggleActions: "play none none none",
  },
});

////////////////////////////

/**
 * skill progress bar animation
 */
gsap.from(".text-cloud", {
  x: "-60vw",
  duration: 2,
  ease: Power4.InOut,
  scrollTrigger: {
    // markers: true,
    trigger: ".text-cloud",
    start: "top 70%",
  },
});
gsap.from(".cloud-shadow", {
  x: "-60vw",
  delay: 0.5,
  duration: 3,
  ease: Power4.InOut,
  scrollTrigger: {
    // markers: true,
    trigger: ".text-cloud",
    start: "top 70%",
  },
});

const cloudShapeTL = gsap
  .timeline({
    scrollTrigger: {
      // markers: true,
      trigger: "#skills",
      start: "300 30%",
      toggleActions: "play none none none",
    },
  })
  .from("#html", {
    x: "-60vw",
    y: "10vh",
    scale: 2,
    duration: 2,
    ease: Power4.In,
  })
  .from(
    "#css",
    {
      x: "40vw",
      y: "5vh",
      scale: 0.7,
      duration: 2,
      ease: Power4.In,
    },
    "<"
  )
  .from(
    "#js",
    {
      x: "-50vw",
      y: "-5vh",
      scale: 1,
      duration: 2,
      ease: Power4.In,
    },
    "<"
  )
  .from(
    "#ts",
    {
      x: "15vw",
      y: "10vh",
      scale: 1,
      duration: 2,
      ease: Power4.In,
    },
    "<"
  )
  .from(
    "#react",
    {
      x: "-40vw",
      y: "5vh",
      scale: 0.7,
      duration: 2,
      ease: Power4.In,
    },
    "<"
  )
  .from(
    "#node",
    {
      x: "-20vw",
      y: "5vh",
      scale: 1.2,
      duration: 2,
      ease: Power4.In,
    },
    "<"
  )
  .from(
    "#python",
    {
      x: "30vw",
      y: "5vh",
      scale: 0.9,
      duration: 2,
      ease: Power4.In,
    },
    "<"
  );

const cloudTextTL = gsap
  .timeline({
    scrollTrigger: {
      // markers: true,
      trigger: "#skills",
      start: "300 30%",
      toggleActions: "play none none none",
    },
  })
  .from(".cloud p", { opacity: 0, delay: 2, duration: 0.1 });

////////////////////////////

/**
 * porjects animation
 */
const projects = gsap.utils.toArray(".project-wraper");
// console.log(projects);
projects.forEach((el, idx) => {
  gsap.to(el, {
    x: idx % 2 === 0 ? 400 : -400,
    opacity: 0,
    scrollTrigger: {
      // markers: true,
      id: idx,
      scrub: true,
      trigger: el,
      start: "top 10%",
    },
  });
});

////////////////////////////

// intro page animation on desktop
const introScrollOnPC = () =>
  gsap
    .timeline({
      scrollTrigger: {
        // markers: true,
        trigger: "#intro",
        start: "30px top",
        end: "30px",
        toggleActions: "play none none none",
      },
    })
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
      ".moon-container",
      {
        x: "24vw",
        y: "12vh",
        duration: 3,
        ease: Power4.In,
      },
      "-=1.5"
    )
    .to(
      ".word",
      {
        opacity: 1,
        duration: 2.5,
        ease: "expo.inOut",
      },
      "<"
    );

// intro page animation on mobile
const introScrollOnMobile = () =>
  gsap
    .timeline({
      scrollTrigger: {
        // markers: true,
        trigger: "#intro",
        start: "30px top",
        end: "bottom 90%",
        scrub: 0.5,
        toggleActions: "play none none none",
      },
    })
    .to(".name h3", {
      opacity: 0,
    })
    .to(
      ".name",
      {
        y: "35vh",
      },
      "<"
    )
    .to(
      ".moon-container",
      {
        x: "120vw",
        y: "40vh",
      },
      "<"
    )
    .to(
      ".word",
      {
        opacity: 1,
      },
      "<"
    );

// intro page parallax fade out effect
const introParallax = () =>
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#passions",
        scrub: true,
        start: "top bottom",
      },
    })
    .to("#intro .name", {
      y: -600,
    })
    .to(
      "#intro .word",
      {
        y: -750,
      },
      "<"
    )
    .to(
      "#intro .moon",
      {
        y: -500,
      },
      "<"
    );

// hide scroll down pointer on small screen
const hideScrollOnSS = () =>
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#intro",
        start: "bottom bottom",
        end: "+=300px",
        scrub: true,
      },
    })
    .to(".scroll-down", {
      opacity: 0,
    });

// hide scroll down pointer on big screen
const hideScrollOnBS = () =>
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "-300px bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })
    .to(".scroll-down", {
      opacity: 0,
    });

// hide toTop pointer on intro page
gsap.set(".to-top", { opacity: 0 });
gsap.to(".to-top", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#passions",
    start: "top bottom",
    end: "+=600px",
    scrub: 1,
  },
});

// corner deco frame animations
const corners = () => {
  gsap.set(".corners>div>*", {
    width: "calc(100% - 80px)",
    height: "calc(100% - 80px)",
  });
  gsap.to(".corners>div>*", {
    width: 70,
    height: 70,
    duration: 2,
    ease: Power4.InOut,
    scrollTrigger: {
      trigger: "#intro",
      start: "30px top",
      end: "30px",
      toggleActions: "play none none none",
    },
  });
};
// execute animations per media size
ScrollTrigger.matchMedia({
  "(min-width: 769px)": () => {
    introScrollOnPC();
    introParallax();
    hideScrollOnBS();
    corners();
  },
  "(max-width: 768px)": () => {
    introScrollOnMobile();
    hideScrollOnSS();
  },
});

/**
 * passion bullet points stagger in effect
 */
gsap.from(".bullet", {
  duration: 1,
  y: 150,
  ease: Power4.In,
  stagger: 0.1,
  scrollTrigger: {
    // markers: true,
    trigger: "#passions",
    start: "top 15%",
    toggleActions: "play none none none",
  },
});

/**
 * skill progress bar animation
 */
gsap.from(".text-cloud", {
  x: "-60vw",
  y: 100,
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
  y: 60,
  delay: 0.2,
  duration: 2.4,
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

/**
 * porject cards fade out animations
 */
const projects = gsap.utils.toArray(".project-wraper");
projects.forEach((el, idx) => {
  ScrollTrigger.matchMedia({
    "(min-width: 640px)": () => {
      gsap.to(el, {
        x: idx % 2 === 0 ? 400 : -400,
        opacity: 0,
        scrollTrigger: {
          // markers: true,
          id: idx,
          scrub: true,
          trigger: el,
          start: "0px top",
        },
      });
    },
    "(max-width: 639px)": () => {
      gsap.to(el, {
        x: idx % 2 === 0 ? 400 : -400,
        opacity: 0,
        scrollTrigger: {
          // markers: true,
          id: idx,
          scrub: true,
          trigger: el,
          start: "300px top",
        },
      });
    },
  });
});

/**
 * toggle navbar on small screen
 */
const screenWidth = $(window).width();
if (screenWidth <= 768) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementsByClassName("nav-bar")[0].style.top = "0";
    } else {
      document.getElementsByClassName("nav-bar")[0].style.top = "-40px";
    }
    prevScrollpos = currentScrollPos;
  };
}

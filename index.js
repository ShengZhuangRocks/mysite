const introScroll = gsap.timeline({ paused: true }).to(".corners>div>*", {
  width: "70px",
  height: "70px",
  border: "solid white 3px",
  duration: 2.5,
  ease: "expo.inOut",
});

// Question: how to change this to effect in different media??
const nameOut = gsap
  .timeline({ paused: true })
  .to(".name", {
    x: "27vw",
    duration: 2.5,
    ease: "expo.inOut",
  })
  .to(
    ".name h3",
    {
      opacity: 0,
      duration: 2.5,
      ease: "expo.inOut",
    },
    "<"
  )
  .to(
    ".moon",
    {
      x: "24vw",
      y: "12vh",
      duration: 5,
      ease: "power1.inOut",
    },
    "<"
  )
  .to(
    ".word",
    {
      opacity: 1,
      duration: 2.5,
      ease: "expo.inOut",
    },
    "-=4"
  );

const cloudTL = gsap
  .timeline({ paused: true })
  .from("#html", {
    x: "-60vw",
    y: "10vh",
    scale: 2,
    duration: 3,
  })
  .from(
    "#css",
    {
      x: "40vw",
      y: "5vh",
      scale: 0.7,
      duration: 3,
    },
    "<"
  )
  .from(
    "#js",
    {
      x: "-50vw",
      y: "-5vh",
      scale: 1,
      duration: 3,
    },
    "<"
  )
  .from(
    "#ts",
    {
      x: "15vw",
      y: "10vh",
      scale: 1,
      duration: 3,
    },
    "<"
  )
  .from(
    "#react",
    {
      x: "-40vw",
      y: "5vh",
      scale: 0.7,
      duration: 3,
    },
    "<"
  )
  .from(
    "#node",
    {
      x: "-20vw",
      y: "5vh",
      scale: 1.2,
      duration: 3,
    },
    "<"
  )
  .from(
    "#python",
    {
      x: "30vw",
      y: "5vh",
      scale: 0.9,
      duration: 3,
    },
    "<"
  );

const cloudTextTL = gsap
  .timeline({ paused: true })
  .from(".cloud p", { opacity: 0, delay: 3, duration: 0.1 });

// const navbarTl = gasp
//   .timeline({ paused: true })
//   .to(".nav-bar", { duration: 0.1, backgroundColor: "#ffffff", ease: "none" });

$(document).ready(() => {
  history.scrollRestoration = "auto";
  const onScroll = () => {
    const htmlToTop = document.querySelector("#html").getBoundingClientRect()
      .top;
    let scrollAmount = $(window).scrollTop();
    // let smallScreenHeight = 1.5 * document.clientHeight;
    // animation of intro
    if (scrollAmount > 30) {
      introScroll.play();
      nameOut.play();
    } else if (scrollAmount <= 30) {
      introScroll.reverse();
      nameOut.reverse();
    }
    // animation of skill clouds
    if (htmlToTop < 300) {
      cloudTL.play();
      cloudTextTL.play();
    } else if (htmlToTop > 600) {
      cloudTL.reverse();
      cloudTextTL.reverse();
    }
    console.log(htmlToTop);
    // nav-bar
    // if (htmlToTop > smallScreenHeight) {
    //   navbarTl.play();
    // } else {
    //   navbarTl.reverse();
    // }
  };
  gsap.ticker.add(onScroll);
});

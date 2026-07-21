/* =========================================
   TYPING EFFECT
========================================= */

const typingText = document.getElementById("typing-text");

const phrases = [
  "Web Developer",
  "Creative Problem Solver",
  "Software Engineering Student",
  "Building ideas into digital experiences"
];

let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;


function typeEffect() {

  if (!typingText) {
    return;
  }

  const currentPhrase = phrases[phraseIndex];


  if (isDeleting) {

    typingText.textContent =
      currentPhrase.substring(
        0,
        characterIndex - 1
      );

    characterIndex--;

  } else {

    typingText.textContent =
      currentPhrase.substring(
        0,
        characterIndex + 1
      );

    characterIndex++;

  }


  let typingSpeed =
    isDeleting ? 35 : 70;


  if (
    !isDeleting &&
    characterIndex === currentPhrase.length
  ) {

    typingSpeed = 1600;

    isDeleting = true;

  } else if (
    isDeleting &&
    characterIndex === 0
  ) {

    isDeleting = false;

    phraseIndex =
      (phraseIndex + 1) %
      phrases.length;

    typingSpeed = 400;

  }


  setTimeout(
    typeEffect,
    typingSpeed
  );

}


typeEffect();



/* =========================================
   REVEAL SECTIONS ON SCROLL
========================================= */

const reveals =
  document.querySelectorAll(".reveal");


function revealOnScroll() {

  reveals.forEach((section) => {

    const sectionTop =
      section.getBoundingClientRect().top;

    const windowHeight =
      window.innerHeight;


    if (
      sectionTop <
      windowHeight - 80
    ) {

      section.classList.add("show");

    }

  });

}


window.addEventListener(
  "scroll",
  revealOnScroll
);


revealOnScroll();



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const navLinks =
  document.querySelectorAll(
    ".navbar nav a"
  );


const sections =
  document.querySelectorAll(
    "main section[id]"
  );


function updateActiveNavigation() {

  let currentSection = "";


  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 180;


    if (
      window.scrollY >=
      sectionTop
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navLinks.forEach((link) => {

    link.classList.remove("active");


    if (
      link.getAttribute("href") ===
      "#" + currentSection
    ) {

      link.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  updateActiveNavigation
);


updateActiveNavigation();



/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
  document.querySelector(".navbar");


function updateNavbar() {

  if (!navbar) {
    return;
  }


  if (window.scrollY > 40) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

}


window.addEventListener(
  "scroll",
  updateNavbar
);


updateNavbar();



/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
  document.getElementById(
    "menu-toggle"
  );


const navMenu =
  document.getElementById(
    "nav-menu"
  );


if (
  menuToggle &&
  navMenu
) {

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        navMenu.classList.toggle(
          "open"
        );


      menuToggle.classList.toggle(
        "active"
      );


      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    }
  );


  navLinks.forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        navMenu.classList.remove(
          "open"
        );

        menuToggle.classList.remove(
          "active"
        );

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }
    );

  });

}



/* =========================================
   PREVENT DISABLED PROJECT LINK CLICK
========================================= */

const disabledProjectLinks =
  document.querySelectorAll(
    ".disabled-project-link"
  );


disabledProjectLinks.forEach(
  (link) => {

    link.addEventListener(
      "click",
      (event) => {

        event.preventDefault();

      }
    );

  }
);



/* =========================================
   AUTOMATIC FOOTER YEAR
========================================= */

const year =
  document.getElementById("year");


if (year) {

  year.textContent =
    new Date().getFullYear();

}

const text =
"Computer Science Student • Web Developer • Creative Problem Solver";

let index = 0;

function typeEffect() {

  const typingText =
  document.getElementById("typing-text");

  if (index < text.length) {

    typingText.textContent += text.charAt(index);

    index++;

    setTimeout(typeEffect, 55);
  }
}

typeEffect();

const reveals =
document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach((section) => {

    const sectionTop =
    section.getBoundingClientRect().top;

    const windowHeight =
    window.innerHeight;

    if (sectionTop < windowHeight - 100) {

      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

  let currentSection = "";

  document.querySelectorAll("section")
  .forEach((section) => {

    const sectionTop =
    section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {

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
});
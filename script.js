document.addEventListener("DOMContentLoaded", function () {
  const animatableElements = document.querySelectorAll(".animatable");
  function animateElements() {
    animatableElements.forEach((elem) => {
      const rect = elem.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      ) {
        elem.classList.add("animate");
      } else {
        elem.classList.remove("animate");
      }
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  initSmoothScroll();
  animateElements();

  window.addEventListener("scroll", function () {
    animateElements();
    const header = document.querySelector("header");
    header.style.opacity = 1;
  });
});
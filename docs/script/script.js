document.addEventListener("DOMContentLoaded", function () {
  const aboutButton = document.getElementById("sobre-mim-button");
  if (aboutButton) {
    aboutButton.addEventListener("click", function () {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });
  }

  const portfolioButton = document.getElementById("portfolio-button");
  if (portfolioButton) {
    portfolioButton.addEventListener("click", function () {
      window.location.href = "../portfolio/index.html";
    });
  }

  const contactButtons = document.querySelectorAll("#contact-button");
  contactButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.location.href = "../contact/index.html";
    });
  });

  const manageButton = document.getElementById("manage-button");
  if (manageButton) {
    manageButton.addEventListener("click", function () {
      window.location.href = "../portfolio-01-manage/index.html";
    });
  }

  const prevProjectButton = document.querySelector(".prev-project .arrow-icon");
  if (prevProjectButton) {
    prevProjectButton.addEventListener("click", function () {
      window.location.href = "../fylo/index.html";
    });
  }

  const nextProjectButton = document.querySelector(".next-project .arrow-icon");
  if (nextProjectButton) {
    nextProjectButton.addEventListener("click", function () {
      window.location.href = "../bookmark/index.html";
    });
  }

  const projectButtons = [
    {
      selector: ".manage-project .arrow-icon",
      href: "../portfolio-01-manage/index.html",
    },
    {
      selector: ".bookmark-project .arrow-icon",
      href: "../portfolio-02-bookmark/index.html",
    },
    {
      selector: ".insure-project .arrow-icon",
      href: "../portfolio-03-insure/index.html",
    },
    {
      selector: ".fylo-project .arrow-icon",
      href: "../portfolio-04-fylo/index.html",
    },
  ];

  projectButtons.forEach(function (project) {
    const button = document.querySelector(project.selector);
    if (button) {
      button.addEventListener("click", function () {
        window.location.href = project.href;
      });
    }
  });
});

// GICDF Community Connect
// Website interactive features

document.addEventListener("DOMContentLoaded", function () {
  // 1. Mobile navigation menu
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(isOpen));

      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    });
  }

  // 2. Automatically update the copyright year
  const yearElements = document.querySelectorAll(".current-year");

  yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // 3. Highlight the current page in the navigation
  let currentPage = window.location.pathname.split("/").pop();

  if (!currentPage) {
    currentPage = "index.html";
  }

  const navigationLinks = document.querySelectorAll(".main-nav a");

  navigationLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // 4. Prevent accidental empty navigation links
  document.querySelectorAll('a[href="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });
});

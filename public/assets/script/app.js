// Hamburger Menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".hamburger-menu");
  const navDiv = document.querySelector("div.nav-links");

  // lg breakpoint in pixels (1024px)
  const lgBreakpoint = 1024;

  // Function to toggle the active class
  const toggleMenu = () => {
    menuButton.classList.toggle("active");
    navDiv.classList.toggle("active");
  };

  // Function to handle screen resizing
  const handleResize = () => {
    if (window.innerWidth >= lgBreakpoint) {
      navDiv.classList.remove("active");
      menuButton.classList.remove("active");
    }
  };

  // Add click event to toggle active class
  menuButton.addEventListener("click", toggleMenu);

  // Add resize and load event listeners
  window.addEventListener("resize", handleResize);
  window.addEventListener("load", handleResize);
});
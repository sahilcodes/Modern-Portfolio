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

  // Hero CTA Button functionality
  const heroCtaWrapper = document.querySelector(".hero-cta-wrapper");
  const buttons = heroCtaWrapper.querySelectorAll("a");

  // Function to handle hover (mouseenter) on buttons
  const handleMouseEnter = (event) => {
    buttons.forEach((button) => button.classList.remove("active")); // Remove active from all
    event.target.classList.add("active"); // Add active to the hovered button
  };

  // Function to reset active class when mouse leaves the wrapper
  const handleMouseLeave = () => {
    buttons.forEach((button) => button.classList.remove("active")); // Remove active from all
    buttons[0].classList.add("active"); // Add active to the first button
  };

  // Add hover event listeners to each button
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", handleMouseEnter);
  });

  // Add mouseleave event listener to the wrapper
  heroCtaWrapper.addEventListener("mouseleave", handleMouseLeave);

  // Set default active class on the first button on load
  buttons[0].classList.add("active");
});

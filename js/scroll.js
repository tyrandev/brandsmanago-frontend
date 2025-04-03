const body = document.body;

function scrollToSection(className) {
  const section = document.querySelector(`.${className}`);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    console.error(`No section found with the class: ${className}`);
  }
  closeSidebar();
}

function scrollToHero() {
  scrollToSection("hero-section");
}

function scrollToFeaturedProducts() {
  scrollToSection("featured-products");
}

function scrollToListing() {
  scrollToSection("listing-section");
}

function closeSidebar() {
  body.style.overflowY = "";
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

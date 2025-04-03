document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("close-btn");
  const menuButton = document.querySelector(".hamburger-menu");
  const body = document.body;

  function openSidebar() {
    body.style.overflowY = "hidden"; // Disable scrolling
    sidebar.classList.add("active");
    overlay.classList.add("active");
  }

  function closeSidebar() {
    body.style.overflowY = ""; // Enable scrolling again
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }

  menuButton.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
});

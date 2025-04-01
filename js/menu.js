document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("close-btn");
  const menuButton = document.querySelector(".hamburger-menu");

  function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }

  menuButton.addEventListener("click", function () {
    openSidebar();
  });

  closeBtn.addEventListener("click", function () {
    closeSidebar();
  });

  overlay.addEventListener("click", function () {
    closeSidebar();
  });
});

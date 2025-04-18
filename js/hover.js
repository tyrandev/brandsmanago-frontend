document.querySelectorAll(".heart-icon").forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      icon.src = 'img/serce-fill.png';
    });
  
    icon.addEventListener("mouseout", () => {
      icon.src = 'img/serce.png';
    });
  });
  
document.querySelector(".logo").addEventListener("mouseover", function() {
    this.src = "img/f-fill.png";
    console.log("hovering over logo")
});

document.querySelector(".logo").addEventListener("mouseout", function() {
    this.src = "img/f.png";
});
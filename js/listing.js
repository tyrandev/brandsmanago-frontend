document.addEventListener("DOMContentLoaded", function () {
  const productGrid = document.querySelector(".product-grid");
  const productSelect = document.querySelector(
    ".product-number-selection select"
  );
  const images = [
    "img/kurtka1.png",
    "img/kurtka2.png",
    "img/kurtka3.png",
    "img/kurtka4.png",
    "img/kurtka5.png",
  ];
  const banner = document.querySelector(".banner");
  let bannerInitiallyAdded = false;
  let currentItemsLoaded = 0;
  let loadCount = parseInt(productSelect.value);

  function createProductItem(i) {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const productId = document.createElement("span");
    productId.classList.add("product-id");
    productId.textContent = `ID: ${String(i + 1).padStart(2, "0")}`;

    const productImage = document.createElement("img");
    productImage.src = images[i % images.length];

    productItem.appendChild(productId);
    productItem.appendChild(productImage);

    return productItem;
  }

  function loadMoreProducts() {
    for (let i = currentItemsLoaded; i < currentItemsLoaded + loadCount; i++) {
      if (i === 5 && !bannerInitiallyAdded) {
        const bannerClone = banner.cloneNode(true);
        productGrid.appendChild(bannerClone);
        bannerInitiallyAdded = true;
        banner.style.display = "none";
      }

      const productItem = createProductItem(i);
      productGrid.appendChild(productItem);
    }

    currentItemsLoaded += loadCount;
  }

  function onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      loadMoreProducts();
    }
  }

  productSelect.addEventListener("change", function () {
    productGrid.innerHTML = "";
    currentItemsLoaded = 0;
    bannerInitiallyAdded = false;
    loadCount = parseInt(this.value);
    loadMoreProducts();
  });

  window.addEventListener("scroll", onScroll);
  loadMoreProducts();
});

const popup = document.getElementById("productPopup");
const popupId = document.getElementById("popupProductId");
const popupImage = document.getElementById("popupProductImage");
const overlay = document.getElementById("overlay");

function openPopup(idText, imgSrc) {
  popupId.textContent = idText;
  popupImage.src = imgSrc;
  popup.style.display = "flex";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closePopup() {
  popup.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = "";
}

document.addEventListener("click", function (e) {
  const productItem = e.target.closest(".product-item");
  if (productItem) {
    const idSpan = productItem.querySelector(".product-id");
    const img = productItem.querySelector("img");

    if (idSpan && img) {
      openPopup(idSpan.textContent, img.src);
    }
  }

  if (e.target === overlay || e.target === popup) {
    closePopup();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closePopup();
  }
});

const closeWrapper = document.querySelector(".popup-close-wrapper");
if (closeWrapper) {
  closeWrapper.addEventListener("click", closePopup);
}

document.addEventListener("DOMContentLoaded", function () {
  const productGrid = document.querySelector(".product-grid");
  const productSelect = document.querySelector(".product-number-selection select");
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
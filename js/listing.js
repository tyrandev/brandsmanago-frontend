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

  function updateProductGrid(itemsPerPage) {
    productGrid.innerHTML = "";
    const totalItems = parseInt(itemsPerPage);

    for (let i = 0; i < totalItems; i++) {
      if (i === 5 && !bannerInitiallyAdded) {
        const bannerClone = banner.cloneNode(true);
        productGrid.appendChild(bannerClone);
      }
      const productItem = createProductItem(i);
      productGrid.appendChild(productItem);
    }

    if (!bannerInitiallyAdded) {
      bannerInitiallyAdded = true;
    }

    if (bannerInitiallyAdded) {
      banner.style.display = "none";
    }
  }

  productSelect.addEventListener("change", function () {
    updateProductGrid(this.value);
  });

  updateProductGrid(productSelect.value);
});

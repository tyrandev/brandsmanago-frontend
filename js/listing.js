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
  let totalItemsToLoad = 0;
  let currentItemsLoaded = 0;

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
    totalItemsToLoad = parseInt(itemsPerPage);
    currentItemsLoaded = 0;
    productGrid.innerHTML = "";
    loadInitialProducts();
  }

  function loadInitialProducts() {
    let initialLoadCount =
      totalItemsToLoad === 24 || totalItemsToLoad === 36 ? 8 : 6;
    if (bannerInitiallyAdded) {
      initialLoadCount = 8;
    }

    for (let i = 0; i < initialLoadCount; i++) {
      if (i === 5 && !bannerInitiallyAdded) {
        const bannerClone = banner.cloneNode(true);
        productGrid.appendChild(bannerClone);
        bannerInitiallyAdded = true;
      }

      const productItem = createProductItem(i);
      productGrid.appendChild(productItem);
    }

    if (bannerInitiallyAdded) {
      banner.style.display = "none";
    }

    currentItemsLoaded = initialLoadCount;

    if (totalItemsToLoad > initialLoadCount) {
      window.addEventListener("scroll", onScroll);
    }
  }

  function loadMoreProducts() {
    const startIndex = currentItemsLoaded;
    const endIndex = Math.min(currentItemsLoaded + 4, totalItemsToLoad);

    for (let i = startIndex; i < endIndex; i++) {
      const productItem = createProductItem(i);
      productGrid.appendChild(productItem);
    }

    currentItemsLoaded = endIndex;

    if (currentItemsLoaded >= totalItemsToLoad) {
      window.removeEventListener("scroll", onScroll);
    }
  }

  function onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      loadMoreProducts();
    }
  }

  productSelect.addEventListener("change", function () {
    updateProductGrid(this.value);
  });

  updateProductGrid(productSelect.value);
});

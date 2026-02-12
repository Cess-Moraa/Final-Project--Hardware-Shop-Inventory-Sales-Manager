// Get all products
function getProducts() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

// Save products
function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

// add product
function addProduct(product) {
  const products = getProducts();
  products.push(product);
  saveProducts(products);
}

// Get total count
function getProductCount() {
  return getProducts().length;
}

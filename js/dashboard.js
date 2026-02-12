// dashboard.js
document.addEventListener("DOMContentLoaded", () => {
  const salesList = document.getElementById("salesList");
  if (!salesList) return;

  const products = getProducts();

  if (products.length === 0) {
    salesList.innerHTML = "<p>No products available</p>";
    return;
  }

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "sale-card";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Stock: ${product.stock}</p>
    `;
    salesList.appendChild(div);
  });
});
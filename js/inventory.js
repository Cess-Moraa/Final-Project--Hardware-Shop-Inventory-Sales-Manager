// inventory.js
document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table");

  if (!table) return;

  const products = getProducts();

  products.forEach((product, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.stock}</td>
      <td>${product.price}</td>
    `;

    table.appendChild(row);
  });
});
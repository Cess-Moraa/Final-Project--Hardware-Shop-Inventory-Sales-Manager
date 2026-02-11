/* =====================================================
   INVENTORY PAGE (inventory.html)
===================================================== */

const inventoryTable = document.querySelector("table");

if (inventoryTable && window.location.pathname.includes("inventory")) {
  const products = getProducts();

  products.forEach((product, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.stock} ${product.unit}</td>
      <td>KES ${product.price}</td>
    `;

    inventoryTable.appendChild(row);
  });
}
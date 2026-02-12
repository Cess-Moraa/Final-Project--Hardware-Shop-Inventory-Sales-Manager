document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".video-overlay p");
  if (!overlay) return;

  const products = getProducts();

  overlay.textContent = `
    Automated warehouse tracking ${products.length} products
    with real-time availability.
  `;
    });
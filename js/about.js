document.addEventListener("DOMContentLoaded", () => {
  const countEl = document.getElementById("productCount");

  if (!countEl) return;

  const total = getProductCount();
  countEl.textContent = total;
});


document.addEventListener("DOMContentLoaded", () => {
  const overlayText = document.querySelector(".video-overlay p");

  if (!overlayText) return;

  const total = getProductCount();

  overlayText.textContent =
    `Automated warehouse tracking ${total} products with real-time availability.`;
});

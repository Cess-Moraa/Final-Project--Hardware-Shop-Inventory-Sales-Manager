document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("productform");
   if (!form) return;
     form.addEventListener("submit", function (e) {
       e.preventDefault();
       const product = {
         name: form.name.value.trim(),
         category: form.category.value,
         price: form.price.value,
         stock: form.stock.value,
         size: form.size.value,
         unit: form.unit.value,
         brand: form.brand.value,
         description: form.description.value,
      createdAt: new Date().toLocaleString()
    };

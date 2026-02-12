document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("productform");
   if (!form) return;
     form.addEventListener("submit", function (e) {
       e.preventDefault();

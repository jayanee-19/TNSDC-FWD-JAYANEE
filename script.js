function showSuccess(event) {
  event.preventDefault(); // page reload prevent
  document.getElementById("successMessage").style.display = "block"; // show msg
  document.querySelector(".order-form").reset(); // clear form
}
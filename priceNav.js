document.addEventListener('DOMContentLoaded', function () {
    const priceModal = document.querySelectorAll('.priceModal');

    priceModal.forEach(modal => {
      modal.addEventListener("click", function () {
        document.getElementById("priceNavModal").classList.remove("hidden");
        document.getElementById("priceNavModal").classList.add("flex");
      });
    });

    document.getElementById("closePriceModal").addEventListener("click", function () {
        document.getElementById("priceNavModal").classList.add("hidden");
        document.getElementById("priceNavModal").classList.remove("flex");
      });
  });
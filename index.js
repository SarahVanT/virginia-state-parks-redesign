document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
  updateAriaLabel(isExpanded);

  navbarToggler.addEventListener("click", function () {
    isExpanded = !isExpanded;
    this.classList.toggle("active");
    this.setAttribute("aria-expanded", isExpanded);
    updateAriaLabel(isExpanded);
  });

  function updateAriaLabel(isExpanded) {
    navbarToggler.setAttribute(
      "aria-label",
      isExpanded ? "Close navigation menu" : "Open navigation menu"
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".finding-park form");
  var parkSelect = document.getElementById("parkSelect");

  form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();
    // Get the selected value from the dropdown
    var selectedPark = parkSelect.value;

    // Check if 'Natural Bridge' is selected
    if (selectedPark === "NB") {
      // Redirect to the Natural Bridge page
      window.location.href = "naturalbridge.html";
    }
  });
});

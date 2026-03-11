// Function to define the footer HTML
function insertFooter() {
  return "<p>Created by Loaf </p>";
}

// Wait for the HTML to be fully loaded before running
document.addEventListener("DOMContentLoaded", function() {
  var footerElement = document.getElementById("footer");

  // Safety check: Only run if the 'footer' ID exists on this specific page
  if (footerElement) {
    footerElement.innerHTML = insertFooter();
  }
});


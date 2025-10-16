// Form submit alert
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for reaching out! I’ll get back to you soon.");
});

// Background color changer
const colors = ["#f2f2f2", "#fff8dc", "#ffe4e1", "#e6e6fa", "#fafad2"];
let current = 0;

document.getElementById("colorBtn").addEventListener("click", function() {
  current = (current + 1) % colors.length;
  document.body.style.backgroundColor = colors[current];
});
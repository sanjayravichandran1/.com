


function showsidebar() {
  const navbar = document.getElementById("navbarNav");
  const closeButton = document.getElementById("closeButton");
  navbar.classList.add("show");
  closeButton.style.display = "block";
}

function hidesidebar() {
  const navbar = document.getElementById("navbarNav");
  const closeButton = document.getElementById("closeButton");
  navbar.classList.remove("show");
  closeButton.style.display = "none";
}
function feedback() {
  // Select the feedback page div
  const feedbackPage = document.getElementById('feedbackPage');

  // Check its current display status and toggle it
  if (feedbackPage.style.display === 'none' || feedbackPage.style.display === '') {
    feedbackPage.style.display = 'block'; // Show the page
  } else {
    feedbackPage.style.display = 'none'; // Hide the page
  }
}



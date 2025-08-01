
  fetch('header.html')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load header');
      return response.text();
    })
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;

      // After inserting the header, apply active link logic
      const currentPage = window.location.pathname.split("/").pop() || "index.html";
      const links = document.querySelectorAll('#header-placeholder nav a');

      links.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
          link.classList.add('active-link');
        }
      });
    })
    .catch(err => console.error('Error:', err));d

const scrollButton = document.querySelector(".scroll-button");

scrollButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default jump-to behavior
  hideOverlay();      // Fade out the overlay

  // Smooth scroll to #websitework after fade-out finishes
  setTimeout(() => {
    const target = document.getElementById("websitework");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, 500); // Match the overlay fade-out duration
});

function openModal(imageSrc) {
  // Get the modal element
  var modal = document.getElementById("imageModal");
  
  // Set the image source for the modal
  var modalImage = document.getElementById("modalImage");
  modalImage.src = imageSrc;
  
  // Display the modal
  modal.style.display = "flex";
}

function closeModal() {
  // Get the modal element
  var modal = document.getElementById("imageModal");
  
  // Hide the modal
  modal.style.display = "none";
}


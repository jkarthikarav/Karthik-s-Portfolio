
fetch('/addons/header.html')
  .then(response => {
    if (!response.ok) throw new Error('Failed to load header');
    return response.text();
  })
.then(html => {
  document.getElementById('header-placeholder').innerHTML = html;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll('#header-placeholder nav a');

  links.forEach(link => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active-link');
    }
  });
})
.catch(err => console.error('Error:', err));

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

document.addEventListener("DOMContentLoaded", () => {
  const footerPlaceholder = document.getElementById('footer-placeholder');

  fetch('/addons/footer.html')
    .then(response => response.text())
    .then(data => {
      footerPlaceholder.innerHTML = data;

      // Wait a tick to ensure HTML is rendered
      const btn = footerPlaceholder.querySelector(".tertiary-btn");
      if (btn) {
        btn.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    })
    .catch(error => console.error("Error loading footer:", error));
});



fetch('../../addons/header.html')
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


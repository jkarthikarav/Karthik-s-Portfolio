document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash; // e.g., #fw?tab=all

  if (hash.startsWith("#fw")) {
    const section = document.querySelector("#fw");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Extract the tab from the hash
    const tabMatch = hash.match(/tab=(\w+)/);
    if (tabMatch) {
      const tabName = tabMatch[1];
      const buttons = document.querySelectorAll(".tab-btn");
      const contents = document.querySelectorAll(".tab-content");

      buttons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tab === tabName);
      });

      contents.forEach(content => {
        content.style.display = content.id === tabName ? "block" : "none";
      });
    }
  }
});


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





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


// Create the floating circle
const cursorCircle = document.createElement('div');
cursorCircle.classList.add('custom-cursor');
document.body.appendChild(cursorCircle);

// Instantly follow mouse
document.addEventListener('mousemove', (e) => {
  cursorCircle.style.top = e.clientY + 'px';
  cursorCircle.style.left = e.clientX + 'px';
});

// Fade out the circle over text
const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, .tag');
textElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorCircle.style.opacity = '0';
  });
  el.addEventListener('mouseleave', () => {
    cursorCircle.style.opacity = '1';
  });
});


// Toggle for Visual Design Projects
document.getElementById('toggleButton2').addEventListener('click', function(event) {
    event.preventDefault();
    var hiddenSection2 = document.getElementById('hiddenSection2');

    if (hiddenSection2.style.display === "none" || hiddenSection2.style.display === "") {
        hiddenSection2.style.display = "block";
    } else {
        hiddenSection2.style.display = "none";
    }
});



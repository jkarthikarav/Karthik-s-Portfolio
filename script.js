
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




//Tabs 
  const tabs = document.querySelectorAll(".tab-1906");
  const panes = document.querySelectorAll(".tab-pane-1906");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const targetId = tab.dataset.tab;

      panes.forEach(pane => {
        pane.classList.remove("active");
        if (pane.id === targetId) {
          pane.classList.add("active");
        }
      });
    });
  });


// Function to update overlay position based on the websitework section
function setOverlayPosition() {
  const overlay = document.getElementById("overlay");
  const websiteWorkSection = document.getElementById("websitework");

  // Get the position of the websitework section relative to the viewport
  const websiteWorkTop = websiteWorkSection.getBoundingClientRect().top;

  // Set the overlay to align with the top of the website work section
  overlay.style.top = `${websiteWorkTop}px`;
}

// Function to hide the overlay when the user scrolls or clicks the scroll button
function hideOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.opacity = 0;  // Fade out the overlay
  setTimeout(() => {
    overlay.style.display = "none"; // Remove it completely after the fade-out animation
  }, 500); // Match the time with the CSS transition duration
}

// Call the function to set the position when the page loads
window.addEventListener("load", setOverlayPosition);

// Optionally, update overlay position on scroll to ensure it's always aligned when scrolling
window.addEventListener("scroll", () => {
  const overlay = document.getElementById("overlay");
  // When the user scrolls down more than 50px, hide the overlay
  if (window.scrollY > 50) {
    hideOverlay();
  }
});

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

// Adjust overlay position if the window is resized (useful for responsive design)
window.addEventListener("resize", setOverlayPosition);


  function toggleMegaMenu(event) {
    event.preventDefault();
    const menu = document.getElementById('megaMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  }

  // Optional: Hide mega menu when clicking outside
  document.addEventListener('click', function (e) {
    const menu = document.getElementById('megaMenu');
    const explore = document.querySelector('.dropdown a');
    if (!menu.contains(e.target) && !explore.contains(e.target)) {
      menu.style.display = 'none';
    }
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


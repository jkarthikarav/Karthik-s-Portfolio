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



document.getElementById('toggleButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default anchor link behavior
    var hiddenSection = document.getElementById('hiddenSection');
    
    // Toggle the display of the hidden section
    if (hiddenSection.style.display === "none" || hiddenSection.style.display === "") {
        hiddenSection.style.display = "block"; // Show the section
    } else {
        hiddenSection.style.display = "none"; // Hide the section
    }
});


document.getElementById('toggleButton2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default anchor link behavior
    var hiddenSection2 = document.getElementById('hiddenSection2');
    
    // Toggle the display of the hidden section
    if (hiddenSection2.style.display === "none" || hiddenSection2.style.display === "") {
        hiddenSection2.style.display = "block"; // Show the section
    } else {
        hiddenSection2.style.display = "none"; // Hide the section
    }
});


document.getElementById('toggleButton3').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default anchor link behavior
    var hiddenSection3 = document.getElementById('hiddenSection3');
    
    // Toggle the display of the hidden section
    if (hiddenSection3.style.display === "none" || hiddenSection3.style.display === "") {
        hiddenSection3.style.display = "block"; // Show the section
    } else {
        hiddenSection3.style.display = "none"; // Hide the section
    }
});




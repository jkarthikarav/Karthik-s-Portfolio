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

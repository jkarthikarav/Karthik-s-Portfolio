// Hide navigation when it overlaps the footer
const nav = document.querySelector('.site-navigate');
const footer = document.querySelector('.jakpot-footer');

if (nav && footer) {
  const checkNavOverlap = () => {
    const navRect = nav.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    const overlapsFooter =
      navRect.bottom > footerRect.top &&
      navRect.top < footerRect.bottom;

    nav.style.visibility = overlapsFooter ? 'hidden' : 'visible';
  };

  window.addEventListener('scroll', checkNavOverlap);
  window.addEventListener('resize', checkNavOverlap);

  checkNavOverlap();
}


// Reveal image-caption images when they enter the viewport
const figures = document.querySelectorAll(
  '.jakpot-image-caption__image'
);

if (figures.length) {
  figures.forEach((figure) => {
    figure.style.opacity = '0';
    figure.style.transform = 'translateY(24px)';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const figure = entry.target;

      figure.style.transition = 'opacity .6s ease, transform .6s ease';
      figure.style.opacity = '1';
      figure.style.transform = 'translateY(0)';

      observer.unobserve(figure);
    });
  }, {
    threshold: 0.2
  });

  figures.forEach((figure) => {
    observer.observe(figure);
  });
}


// Open external links and PDF files from structured-list rows in a new tab
document.addEventListener('click', (event) => {
  const row = event.target.closest(
    '.jakpot-structured-list__row[onclick]'
  );

  if (!row) return;

  const handler = row.getAttribute('onclick');
  const match = handler.match(/(?:https?:\/\/|\/)[^'"]+/);

  if (!match) return;

  const url = new URL(match[0], window.location.origin);

  const isExternal = url.origin !== window.location.origin;
  const isPDF = url.pathname.toLowerCase().endsWith('.pdf');

  if (isExternal || isPDF) {
    event.preventDefault();
    event.stopImmediatePropagation();
    window.open(url.href, '_blank', 'noopener,noreferrer');
  }
}, true);


// Smoothly scroll to the top when footer back-to-top buttons are clicked
document.querySelectorAll(
  '.footer__back-to-top, .jakpot-footer__button'
).forEach((button) => {
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
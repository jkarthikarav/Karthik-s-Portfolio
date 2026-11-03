  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.site-navigate');
    const footer = document.querySelector('.jakpot-footer');
    if (!nav || !footer) return;

    const navRect = nav.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    if (navRect.bottom > footerRect.top && navRect.top < footerRect.bottom) {
      nav.style.display = 'none';
    } else {
      nav.style.display = '';
    }
  });

  const Figures = document.querySelectorAll('.jakpot-image-caption__image');

    if (Figures.length) {

      Figures.forEach(figure => {
        figure.style.opacity = '0';
        figure.style.transform = 'translateY(24px)';
      });


      const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          const figure = entry.target;

          figure.style.transition =
            'opacity .6s ease, transform .6s ease';

          figure.style.opacity = '1';
          figure.style.transform = 'translateY(0)';

          observer.unobserve(figure);

        });

      }, {
        threshold: 0.2
      });


      Figures.forEach(figure => {
        observer.observe(figure);
      });

    }

     document.addEventListener("click", (event) => {
    const row = event.target.closest(
      ".jakpot-structured-list__row[onclick]"
    );

    if (!row) return;

    const handler = row.getAttribute("onclick");
    const match = handler.match(/(?:https?:\/\/|\/)[^'"]+/);

    if (!match) return;

    const url = new URL(match[0], window.location.origin);

    const isExternal = url.origin !== window.location.origin;
    const isPDF = url.pathname.toLowerCase().endsWith(".pdf");

    if (isExternal || isPDF) {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.open(url.href, "_blank", "noopener,noreferrer");
    }
  }, true);

      document.querySelectorAll(
      '.footer__back-to-top, .jakpot-footer__button'
    ).forEach((button) => {
      button.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    });
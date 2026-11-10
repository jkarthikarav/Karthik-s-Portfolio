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

(() => {
  const hero = document.getElementById("hero");
  const canvas = document.getElementById("hero-ripple-canvas");
  const toggle = document.getElementById("hero-animation-toggle");

  if (!hero || !canvas || !toggle) return;

  const ctx = canvas.getContext("2d");

  function setIcon(isPaused) {
    const icon = toggle.querySelector(".special-hero__toggle-icon");

    icon.innerHTML = isPaused
      ? '<path d="m8 5 12 7-12 7V5Z"/>'
      : '<path d="M8 5v14M16 5v14"/>';
  }

  if (!ctx) return;

  // Animation settings

  const DOT_COLOR = "rgb(42 70 38)";

  const DOT_SPACING = 16;
  const DOT_SIZE = 1.2;
  const DOT_GROWTH = 2.4;

  const RIPPLE_SPEED = 145;
  const RIPPLE_SPACING = 1.45;
  const RIPPLE_WIDTH = 26;
  const RIPPLE_COUNT = 3;

  let width = 0;
  let height = 0;
  let maxRadius = 0;
  let cycleDuration = 0;

  let animationFrame = null;
  let isPlaying = true;

  let accumulatedTime = 0;
  let startedAt = performance.now();

  // Prepare canvas

  function resizeCanvas() {
    const rect = hero.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = rect.width;
    height = rect.height;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    maxRadius = Math.hypot(width / 2, height / 2);

    cycleDuration = maxRadius / RIPPLE_SPEED + 0.5;

    render(performance.now());
  }

  // Calculate animation time

  function getElapsedTime(now) {
    if (!isPlaying) return accumulatedTime;

    return accumulatedTime + (now - startedAt) / 1000;
  }

  // Calculate ripple intensity at a particular point

  function getRippleIntensity(distance, elapsed, index) {
    const offset = index * RIPPLE_SPACING;

    const age =
      ((elapsed - offset) % cycleDuration + cycleDuration) %
      cycleDuration;

    const radius = age * RIPPLE_SPEED;

    const difference = Math.abs(distance - radius);

    if (difference > RIPPLE_WIDTH * 2.5) return 0;

    const intensity = Math.exp(
      -(difference * difference) /
      (2 * RIPPLE_WIDTH * RIPPLE_WIDTH)
    );

    return intensity;
  }

  // Draw the dot field

  function render(now) {
    ctx.clearRect(0, 0, width, height);

    const elapsed = getElapsedTime(now);

    ctx.fillStyle = DOT_COLOR;

    const columns = Math.ceil(width / DOT_SPACING);
    const rows = Math.ceil(height / DOT_SPACING);

    const offsetX = (width - (columns - 1) * DOT_SPACING) / 2;
    const offsetY = (height - (rows - 1) * DOT_SPACING) / 2;

    const centerX = width / 2;
    const centerY = height / 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {

        const x = offsetX + col * DOT_SPACING;
        const y = offsetY + row * DOT_SPACING;

        const distance = Math.hypot(
          x - centerX,
          y - centerY
        );

        let intensity = 0;

        // Combine multiple overlapping ripples

        for (let i = 0; i < RIPPLE_COUNT; i++) {
          intensity = Math.max(
            intensity,
            getRippleIntensity(distance, elapsed, i)
          );
        }

        const radius = DOT_SIZE + intensity * DOT_GROWTH;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // Animation loop

  function animate(now) {
    if (!isPlaying) return;

    render(now);

    animationFrame = requestAnimationFrame(animate);
  }

  // Pause animation

  function pauseAnimation() {
    if (!isPlaying) return;

    accumulatedTime +=
      (performance.now() - startedAt) / 1000;

    isPlaying = false;

    cancelAnimationFrame(animationFrame);

    setIcon(true);
    toggle.querySelector(".special-hero__toggle-label").textContent = "Resume";

    toggle.setAttribute("aria-label", "Resume animation");
  }

  // Resume animation

  function resumeAnimation() {
    if (isPlaying) return;

    isPlaying = true;
    startedAt = performance.now();

    setIcon(false);
    toggle.querySelector(".special-hero__toggle-label").textContent = "Pause";

    toggle.setAttribute("aria-label", "Pause animation");

    animationFrame = requestAnimationFrame(animate);
  }

  // Toggle playback

  toggle.addEventListener("click", () => {
    if (isPlaying) {
      pauseAnimation();
    } else {
      resumeAnimation();
    }
  });

  // Resize handling

  const resizeObserver = new ResizeObserver(resizeCanvas);

  resizeObserver.observe(hero);

  // Start animation automatically

  resizeCanvas();

  animationFrame = requestAnimationFrame(animate);

})();

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

    const greetings = [
        "Hello, I'm Karthik",
        "Ciao, sono Karthi",
        "Hola, soy Kartik",
        "Привет я Картйк",
        "Bonjour, Appelez-moi Kartik",
      ];

      let currentGreetingIndex = 0;
      const greetingElement = document.getElementById("greeting");

      function scrambleText(targetElement, newText) {
        const characters =
          'FGHIJcde=Afgckzlm"nop,qrsab' +
          "пнтЭряждииоевфбіиїтпд";

        let scrambleInterval = 50;
        let totalScrambleTime = 1000;
        let currentText = targetElement.textContent;

        let scramble = setInterval(() => {
          let scrambledText = "";

          for (let i = 0; i < newText.length; i++) {
            if (Math.random() > 0.5) {
              scrambledText += characters.charAt(
                Math.floor(Math.random() * characters.length),
              );
            } else {
              scrambledText += currentText[i] || "";
            }
          }

          targetElement.textContent = scrambledText;
        }, scrambleInterval);

        setTimeout(() => {
          clearInterval(scramble);
          targetElement.textContent = newText;
        }, totalScrambleTime);
      }

      function changeGreeting() {
        let newIndex;

        do {
          newIndex = Math.floor(Math.random() * greetings.length);
        } while (newIndex === currentGreetingIndex);

        const newGreeting = greetings[newIndex];

        scrambleText(greetingElement, newGreeting);
        currentGreetingIndex = newIndex;
      }

      setInterval(changeGreeting, 4000);
      changeGreeting();

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

  document.addEventListener("DOMContentLoaded", () => {
  const tabs = Array.from(
    document.querySelectorAll(".selected-work__tab")
  );

  const projects = Array.from(
    document.querySelectorAll(".selected-work__project")
  );

  const viewer = document.querySelector(
    ".selected-work__viewer"
  );

  if (!tabs.length || !projects.length || !viewer) {
    return;
  }


  function activateProject(projectName, moveFocus = false) {
    const selectedTab = tabs.find(
      (tab) => tab.dataset.project === projectName
    );

    const selectedProject = projects.find(
      (project) => project.dataset.projectPanel === projectName
    );

    if (!selectedTab || !selectedProject) {
      return;
    }


    /* -------------------------------------------------------
       TABS
       ------------------------------------------------------- */

    tabs.forEach((tab) => {
      const isActive =
        tab.dataset.project === projectName;

      tab.classList.toggle(
        "is-active",
        isActive
      );

      tab.setAttribute(
        "aria-selected",
        String(isActive)
      );

      tab.tabIndex = isActive ? 0 : -1;
    });


    /* -------------------------------------------------------
       PROJECT PANELS
       ------------------------------------------------------- */

    projects.forEach((project) => {
      const isActive =
        project.dataset.projectPanel === projectName;

      project.classList.toggle(
        "is-active",
        isActive
      );

      project.setAttribute(
        "aria-hidden",
        String(!isActive)
      );
    });


    /* -------------------------------------------------------
       ACCESSIBILITY
       ------------------------------------------------------- */

    viewer.setAttribute(
      "aria-labelledby",
      selectedTab.id
    );


    /* -------------------------------------------------------
       FOCUS
       ------------------------------------------------------- */

    if (moveFocus) {
      selectedTab.focus();
    }
  }


  /* ---------------------------------------------------------
     CLICK
     --------------------------------------------------------- */

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateProject(
        tab.dataset.project
      );
    });
  });


  /* ---------------------------------------------------------
     KEYBOARD NAVIGATION
     --------------------------------------------------------- */

  tabs.forEach((tab, index) => {
    tab.addEventListener("keydown", (event) => {
      let nextIndex = index;

      if (event.key === "ArrowRight") {
        event.preventDefault();

        nextIndex =
          (index + 1) % tabs.length;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();

        nextIndex =
          (index - 1 + tabs.length) %
          tabs.length;
      }

      if (event.key === "Home") {
        event.preventDefault();

        nextIndex = 0;
      }

      if (event.key === "End") {
        event.preventDefault();

        nextIndex = tabs.length - 1;
      }

      if (nextIndex !== index) {
        activateProject(
          tabs[nextIndex].dataset.project,
          true
        );
      }
    });
  });


  /* ---------------------------------------------------------
     INITIAL STATE
     --------------------------------------------------------- */

  const initialProject =
    tabs.find((tab) =>
      tab.classList.contains("is-active")
    )?.dataset.project ||
    tabs[0].dataset.project;

  activateProject(initialProject);
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

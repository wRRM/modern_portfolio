window.skillsModule = (() => {

  let observer;

  /* =========================
     OBSERVER
  ========================= */

  function createObserver() {

    observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                'show'
              );

            }

          });

        },
        {
          threshold: 0.3
        }
      );

  }

  /* =========================
     OBSERVE
  ========================= */

  function observeSkillsGrid() {

    const skillSection =
      document.querySelector(
        '.skills-grid'
      );

    if (!skillSection) {
      return;
    }

    observer.observe(
      skillSection
    );

  }

  /* =========================
     INIT
  ========================= */

  function init() {

    createObserver();

    observeSkillsGrid();

  }

  return {
    init
  };

})();
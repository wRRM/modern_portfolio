window.scrollModule = (() => {

  /* =========================
     FADE SECTIONS
  ========================= */

  const observer =
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
        threshold: 0.15
      }
    );

  function observeSections() {

    document
      .querySelectorAll('.fade-section')
      .forEach((section) => {

        observer.observe(section);

      });

  }

  function init() {

    observeSections();

  }

  return {
    init
  };

})();

/* =========================
   SKILL CARD GLOW
========================= */

function updateSkillCards() {

  const trigger =
    window.innerHeight * 0.75;

  const skillCards =
    document.querySelectorAll(
      '.skill-card'
    );

  skillCards.forEach((card) => {

    const rect =
      card.getBoundingClientRect();

    if (rect.top <= trigger) {

      card.classList.add(
        'active'
      );

    } else {

      card.classList.remove(
        'active'
      );

    }

  });

}

/* =========================
   PROJECT CARD GLOW
========================= */

function updateProjectCards() {

  const trigger =
    window.innerHeight * 0.75;

  const projectCards =
    document.querySelectorAll(
      '.featured-project, .card'
    );

  projectCards.forEach((card) => {

    const rect =
      card.getBoundingClientRect();

    if (rect.top <= trigger) {

      card.classList.add(
        'active'
      );

    } else {

      card.classList.remove(
        'active'
      );

    }

  });

}

/* =========================
   UPDATE
========================= */

function updateScrollEffects() {

  updateSkillCards();

  updateProjectCards();

}

window.addEventListener(
  'scroll',
  updateScrollEffects
);

window.addEventListener(
  'load',
  updateScrollEffects
);
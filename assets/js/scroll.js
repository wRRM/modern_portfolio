window.scrollModule = (() => {

  /* =========================
     FADE SECTIONS
  ========================= */

  const sections =
    document.querySelectorAll('.fade-section');

  const observer =
    new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }

      });

    }, {
      threshold: 0.15
    });

  function init() {

    sections.forEach((section) => {
      observer.observe(section);
    });

  }

  return {
    init
  };

})();

/* =========================
   SKILL CARD GLOW
========================= */

const skillCards = document.querySelectorAll('.skill-card');

function updateSkillCards() {

  const trigger = window.innerHeight * 0.75;

  skillCards.forEach((card) => {

    const rect = card.getBoundingClientRect();

    if (rect.top <= trigger) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }

  });

}

window.addEventListener('scroll', updateSkillCards);
window.addEventListener('load', updateSkillCards);

/* =========================
   PROJECT CARD GLOW
========================= */

const projectCards = document.querySelectorAll(
  '.featured-project, .card'
);

function updateProjectCards() {

  const trigger = window.innerHeight * 0.75;

  projectCards.forEach((card) => {

    const rect = card.getBoundingClientRect();

    if (rect.top <= trigger) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }

  });

}

window.addEventListener('scroll', updateProjectCards);
window.addEventListener('load', updateProjectCards);
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
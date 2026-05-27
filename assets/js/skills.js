window.skillsModule = (() => {

  const skillSection =
    document.querySelector('.skills-grid');

  const skillObserver =
    new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }

      });

    }, {
      threshold: 0.3
    });

  function init() {

    if (skillSection) {
      skillObserver.observe(skillSection);
    }

  }

  return {
    init
  };

})();
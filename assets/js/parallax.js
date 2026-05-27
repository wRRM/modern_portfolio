window.parallaxModule = (() => {

  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;
  let smoothVelocity = 0;

  const parallaxElements =
    document.querySelectorAll('.parallax-inner');

  /* =========================
     SCROLL VELOCITY
  ========================= */

  function updateScrollVelocity() {

    const currentY = window.scrollY;

    scrollVelocity =
      currentY - lastScrollY;

    lastScrollY = currentY;

  }

  function smooth() {

    smoothVelocity +=
      (scrollVelocity - smoothVelocity) * 0.08;

  }

  window.motion = {
    get velocity() {
      return smoothVelocity;
    }
  };

  /* =========================
     PARALLAX
  ========================= */

  function updateParallax() {

    const velocity =
      window.motion?.velocity || 0;

    parallaxElements.forEach((element, index) => {

      const rect =
        element.getBoundingClientRect();

      const speed =
        0.04 + index * 0.01;

      const offset =
        rect.top * speed + velocity * 0.15;

      element.style.transform =
        `translateY(${offset}px)`;

    });

  }

  function loop() {

    smooth();

    updateParallax();

    requestAnimationFrame(loop);

  }

  function init() {

    window.addEventListener(
      'scroll',
      updateScrollVelocity
    );

    loop();

  }

  return {
    init
  };

})();
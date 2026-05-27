window.timelineModule = (() => {

  let timeline;
  let progress;

  const timelineItems =
    document.querySelectorAll('.timeline-item');

  /* =========================
     ITEM OBSERVER
  ========================= */

  const timelineObserver =
    new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }

      });

    }, {
      threshold: 0.2
    });

  /* =========================
     PROGRESS LINE
  ========================= */

  function updateTimelineProgress() {

    if (!timeline || !progress) return;

    const rect =
      timeline.getBoundingClientRect();

    const windowHeight =
      window.innerHeight;

    const start =
      windowHeight * 0.85;

    const end =
      -rect.height * 0.15;

    const percent =
      (start - rect.top) / (start - end);

    const clamped =
      Math.max(0, Math.min(percent, 1));

    progress.style.transform =
      `translateX(-50%) scaleY(${clamped})`;

  }

  /* =========================
     ACTIVE CARDS
  ========================= */

  function updateActiveCards() {

    const trigger =
      window.innerHeight * 0.65;

    timelineItems.forEach((card) => {

      const rect =
        card.getBoundingClientRect();

      const inner =
        card.querySelector('.timeline-card');

      if (!inner) return;

      if (rect.top <= trigger) {

        inner.classList.add('active');

      } else {

        inner.classList.remove('active');

      }

    });

  }

  function loop() {

    updateTimelineProgress();

    updateActiveCards();

    requestAnimationFrame(loop);

  }

  function init() {

    timeline =
      document.querySelector('.timeline');

    progress =
      document.querySelector('.timeline-progress');

    if (progress) {
      progress.style.transform =
        'translateX(-50%) scaleY(0)';
    }

    timelineItems.forEach((item) => {
      timelineObserver.observe(item);
    });

    loop();

  }

  return {
    init
  };

})();
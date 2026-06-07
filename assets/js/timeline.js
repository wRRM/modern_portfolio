window.timelineModule = (() => {

  let timeline;
  let progress;

  /* =========================
     ITEM OBSERVER
  ========================= */

  const timelineObserver =
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
        threshold: 0.2
      }
    );

  /* =========================
     PROGRESS LINE
  ========================= */

  function updateTimelineProgress() {

    if (!timeline || !progress) {
      return;
    }

    const rect =
      timeline.getBoundingClientRect();

    const windowHeight =
      window.innerHeight;

    const start =
      windowHeight * 0.85;

    const end =
      -rect.height * 0.15;

    const percent =
      (start - rect.top) /
      (start - end);

    const clamped =
      Math.max(
        0,
        Math.min(percent, 1)
      );

    progress.style.transform =
      `translateX(-50%) scaleY(${clamped})`;

  }

  /* =========================
     ACTIVE CARDS
  ========================= */

  function updateActiveCards() {

    const trigger =
      window.innerHeight * 0.65;

    const timelineItems =
      document.querySelectorAll(
        '.timeline-item'
      );

    timelineItems.forEach((item) => {

      const rect =
        item.getBoundingClientRect();

      const card =
        item.querySelector(
          '.timeline-card'
        );

      if (!card) return;

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
     OBSERVE ITEMS
  ========================= */

  function observeTimelineItems() {

    const timelineItems =
      document.querySelectorAll(
        '.timeline-item'
      );

    timelineItems.forEach((item) => {

      timelineObserver.observe(
        item
      );

    });

  }

  /* =========================
     LOOP
  ========================= */

  function loop() {

    updateTimelineProgress();

    updateActiveCards();

    requestAnimationFrame(loop);

  }

  /* =========================
     INIT
  ========================= */

  function init() {

    timeline =
      document.querySelector(
        '.timeline'
      );

    progress =
      document.querySelector(
        '.timeline-progress'
      );

    if (!timeline || !progress) {
      return;
    }

    progress.style.transform =
      'translateX(-50%) scaleY(0)';

    observeTimelineItems();

    loop();

  }

  return {
    init
  };

})();
window.modalModule = (() => {

  /* =========================
     MODAL ELEMENTS
  ========================= */

  const modal =
    document.getElementById(
      'project-modal'
    );

  const modalTitle =
    document.getElementById(
      'modal-title'
    );

  const modalDesc =
    document.getElementById(
      'modal-desc'
    );

  const closeModal =
    document.getElementById(
      'close-modal'
    );

  /* =========================
     MAGNETIC BUTTONS
  ========================= */

  function initMagneticButtons() {

    document
      .querySelectorAll('.glass-button')
      .forEach((button) => {

        button.addEventListener(
          'mousemove',
          (e) => {

            const rect =
              button.getBoundingClientRect();

            const x =
              e.clientX -
              rect.left -
              rect.width / 2;

            const y =
              e.clientY -
              rect.top -
              rect.height / 2;

            button.style.transform =
              `translate(${x * 0.18}px, ${y * 0.18}px)`;

          }
        );

        button.addEventListener(
          'mouseleave',
          () => {

            button.style.transform =
              'translate(0px, 0px)';

          }
        );

      });

  }

  /* =========================
     MODAL
  ========================= */

  function openModal(
    title,
    description
  ) {

    if (!modal) return;

    modalTitle.textContent =
      title;

    modalDesc.textContent =
      description;

    modal.classList.remove(
      'hidden'
    );

  }

  function closeCurrentModal() {

    modal?.classList.add(
      'hidden'
    );

  }

  function initModal() {

    if (!modal) return;

    document.addEventListener(
      'click',
      (e) => {

        const card =
          e.target.closest(
            '.project-card'
          );

        if (!card) return;

        openModal(
          card.dataset.title,
          card.dataset.desc
        );

      }
    );

    closeModal?.addEventListener(
      'click',
      closeCurrentModal
    );

    modal.addEventListener(
      'click',
      (e) => {

        if (e.target === modal) {

          closeCurrentModal();

        }

      }
    );

    document.addEventListener(
      'keydown',
      (e) => {

        if (
          e.key === 'Escape' &&
          !modal.classList.contains(
            'hidden'
          )
        ) {

          closeCurrentModal();

        }

      }
    );

  }

  /* =========================
     INIT
  ========================= */

  function init() {

    initMagneticButtons();

    initModal();

  }

  return {
    init
  };

})();
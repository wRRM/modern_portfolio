/* =========================
   APP INIT
========================= */

window.addEventListener('load', () => {

  if (window.timelineModule?.init) {
    window.timelineModule.init();
  }

  if (window.parallaxModule?.init) {
    window.parallaxModule.init();
  }

  if (window.skillsModule?.init) {
    window.skillsModule.init();
  }

  if (window.scrollModule?.init) {
    window.scrollModule.init();
  }

  if (window.modalModule?.init) {
    window.modalModule.init();
  }

});
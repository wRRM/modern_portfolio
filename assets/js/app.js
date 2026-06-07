/* =========================
   PROFILE
========================= */

function renderProfile() {

  const profile =
    window.portfolioData.profile;

  const image =
    document.getElementById('profile-image');

  const role =
    document.getElementById('profile-role');

  const name =
    document.getElementById('profile-name');

  const description =
    document.getElementById('profile-description');

  const socials =
    document.getElementById('profile-socials');

  if (!profile) return;

  if (image) {
    image.src = profile.image;
  }

  if (role) {
    role.textContent = profile.role;
  }

  if (name) {
    name.textContent = profile.name;
  }

  if (description) {
    description.textContent =
      profile.description;
  }

  if (!socials) return;

  socials.innerHTML = '';

  profile.socials.forEach((social) => {

    socials.insertAdjacentHTML(
      'beforeend',
      `
      <a
        href="${social.url}"
        ${social.url.startsWith('http')
          ? 'target="_blank" rel="noopener noreferrer"'
          : ''
        }
        class="social-link"
        aria-label="${social.label}"
      >
        <img
          src="${social.icon}"
          alt="${social.label}"
        >
      </a>
      `
    );

  });

}

/* =========================
   SKILLS
========================= */

function renderSkills() {

  const container =
    document.getElementById('skills-grid');

  if (!container) return;

  container.innerHTML = '';

  window.portfolioData.skills.forEach(
    (skill) => {

      const items =
        skill.items.map((item) => {

          return `
            <div class="skill-item">

              <span>
                ${item.name}
              </span>

              <div class="skill-bar">
                <div
                  style="--target-width:${item.level}%"
                ></div>
              </div>

            </div>
          `;

        }).join('');

      container.insertAdjacentHTML(
        'beforeend',
        `
        <div class="skill-card">

          <div class="skill-top">

            <div class="skill-icon">
              ${skill.icon}
            </div>

            <h3>
              ${skill.category}
            </h3>

          </div>

          ${items}

        </div>
        `
      );

    }
  );

}

/* =========================
   TIMELINE
========================= */

function renderTimeline() {

  const timeline =
    document.getElementById(
      'timeline-container'
    );

  if (!timeline) return;

  timeline.innerHTML = `
    <div class="timeline-progress"></div>
  `;

  window.portfolioData.timeline.forEach(
    (item, index) => {

      const side =
        index % 2 === 0
          ? 'left'
          : 'right';

      timeline.insertAdjacentHTML(
        'beforeend',
        `
        <div
          class="timeline-item ${side}"
        >

          <div class="timeline-icon">
            ${item.icon}
          </div>

          <div class="timeline-date">
            ${item.date}
          </div>

          <div class="timeline-card">

            <h3>
              ${item.title}
            </h3>

            <h4>
              ${item.company}
            </h4>

            <p>
              ${item.description}
            </p>

          </div>

        </div>
        `
      );

    }
  );

}

/* =========================
   FEATURED PROJECT
========================= */

function renderFeaturedProject() {

  const featured =
    window.portfolioData.featuredProject;

  const badge =
    document.getElementById(
      'featured-badge'
    );

  const title =
    document.getElementById(
      'featured-title'
    );

  const description =
    document.getElementById(
      'featured-description'
    );

  const tags =
    document.getElementById(
      'featured-tags'
    );

  const link =
    document.getElementById(
      'featured-link'
    );

  if (!featured) return;

  if (badge) {
    badge.textContent =
      featured.badge;
  }

  if (title) {
    title.textContent =
      featured.title;
  }

  if (description) {
    description.textContent =
      featured.description;
  }

  if (link) {
    link.href =
      featured.url;
  }

  if (!tags) return;

  tags.innerHTML = '';

  featured.tags.forEach((tag) => {

    tags.insertAdjacentHTML(
      'beforeend',
      `<span>${tag}</span>`
    );

  });

}

/* =========================
   PROJECTS
========================= */

function renderProjects() {

  const grid =
    document.getElementById(
      'project-grid'
    );

  if (!grid) return;

  grid.innerHTML = '';

  window.portfolioData.projects.forEach(
    (project) => {

      grid.insertAdjacentHTML(
        'beforeend',
        `
        <div
          class="card project-card"
          data-title="${project.title}"
          data-desc="${project.description}"
        >

          <h3>
            ${project.title}
          </h3>

          <p>
            ${project.description}
          </p>

        </div>
        `
      );

    }
  );

}

/* =========================
   RENDER ALL
========================= */

function renderPortfolio() {

  renderProfile();

  renderSkills();

  renderTimeline();

  renderFeaturedProject();

  renderProjects();

}

/* =========================
   APP INIT
========================= */

window.addEventListener('load', () => {

  renderPortfolio();

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
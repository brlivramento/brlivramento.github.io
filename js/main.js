function trackEvent(eventName, params = {}) {
  if (typeof gtag !== "function") {
    return;
  }

  gtag("event", eventName, params);
}

const themeToggle = document.getElementById("theme-toggle");

function updateThemeButton(theme) {
  const nextTheme = theme === "dark" ? "claro" : "escuro";

  themeToggle.setAttribute(
    "aria-label",
    `Ativar modo ${nextTheme}`
  );
}

updateThemeButton(document.documentElement.dataset.theme);

themeToggle.addEventListener("click", function () {
  const currentTheme = document.documentElement.dataset.theme;

  const newTheme =
    currentTheme === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = newTheme;

  localStorage.setItem("theme", newTheme);

  updateThemeButton(newTheme);
});

function renderPortfolio() {
  const timeline = document.getElementById("portfolio-timeline");

  if (!timeline) {
    return;
  }

  const sortedProjects = [...projects].sort(
    (a, b) =>
      b.endYear - a.endYear ||
      b.startYear - a.startYear
  );

  timeline.innerHTML = sortedProjects
    .map((item) => {

      const period =
        item.startYear === item.endYear
          ? item.startYear
          : `${item.startYear} — ${item.endYear}`;

      const projectList = (item.projects || [])
        .map(
          (project) => `
            <li>${project}</li>
          `
        )
        .join("");

      const images = (item.images || [])
        .map(
          (image, index) => `
            <img
              src="${image}"
              alt=""
              loading="lazy"
              data-project="${item.title}"
              style="--i: ${index}"
            >
          `
        )
        .join("");

      return `
        <article class="portfolio-item">

          <div class="portfolio-year">
            ${period}
          </div>

          <div class="portfolio-dot"></div>

          <div class="portfolio-info">

            <h3>
              ${item.title}
            </h3>

            <small class="portfolio-description">
              ${item.description}
            </small>

            ${
              images
                ? `
                  <div
                    class="portfolio-images"
                    aria-hidden="true"
                  >
                    ${images}
                  </div>
                `
                : ""
            }

            ${
              projectList
                ? `
                  <ul class="portfolio-projects">
                    ${projectList}
                  </ul>
                `
                : ""
            }

          </div>

        </article>
      `;
    })
    .join("");
}

function animatePortfolio() {
  const items =
    document.querySelectorAll(".portfolio-item");

  items.forEach((item, index) => {
    item.classList.remove("visible");

    setTimeout(() => {
      item.classList.add("visible");
    }, index * 80);
  });
}

renderPortfolio();

const tabs =
  document.querySelectorAll(".tab");

const tabContents =
  document.querySelectorAll(".tab-content");


function openTab(target) {

  tabs.forEach((tab) => {

    const isActive =
      tab.dataset.tab === target;

    tab.classList.toggle(
      "active",
      isActive
    );

    tab.setAttribute(
      "aria-selected",
      isActive ? "true" : "false"
    );

  });

  tabContents.forEach((content) => {

    const isActive =
      content.id === target;

    content.classList.toggle(
      "active",
      isActive
    );

  });

  if (target === "portfolio") {
    animatePortfolio();
  }
}


tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const target = tab.dataset.tab;

    openTab(target);

    trackEvent(`tab_${target}`);
  });
});

function openTabFromHash() {

  const target =
    window.location.hash.substring(1);

  if (
    target === "portfolio" ||
    target === "stacks"
  ) {
    openTab(target);
    return;
  }
  openTab("stacks");
}

openTabFromHash();

window.addEventListener(
  "hashchange",
  openTabFromHash
);


const lightbox =
  document.getElementById("portfolio-lightbox");

const lightboxImage =
  document.getElementById("portfolio-lightbox-image");

const lightboxClose =
  document.querySelector(".portfolio-lightbox-close");


function openLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt || "";

  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  trackEvent("portfolio_image_open", {
    project_name: image.dataset.project,
    image_url: image.src
  });
}


function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  setTimeout(() => {
    lightboxImage.src = "";
  }, 200);
}

document.addEventListener("click", function (event) {
  const image = event.target.closest(
    ".portfolio-images img"
  );

  if (!image) {
    return;
  }

  openLightbox(image);
});

lightboxClose.addEventListener("click", function () {
  closeLightbox();
});

lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    lightbox.classList.contains("active")
  ) {
    closeLightbox();
  }
});

function renderStacks() {
  const container = document.getElementById("tech-groups");

  if (!container) {
    return;
  }

  container.innerHTML = stacks
    .map((group) => {
      const technologies = group.technologies
        .map(
          (tech) => `
            <span class="tech tech-${tech.slug}">
              <i
                class="${tech.icon}"
                aria-hidden="true"
              ></i>

              <span>${tech.name}</span>
            </span>
          `
        )
        .join("");

      return `
        <div
          class="tech-group"
          data-group="${group.group}"
        >
          ${technologies}
        </div>
      `;
    })
    .join("");
}

document.querySelectorAll("[data-analytics]").forEach((element) => {
  element.addEventListener("click", () => {
    trackEvent(element.dataset.analytics);
  });
});

renderStacks();
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

const sr = ScrollReveal({
  distance: "100px",
  duration: 1000,
  // reset: true,
});

sr.reveal(`.hero-img, .card-arrow, .side-nav`, {
  origin: "left",
  interval: 300,
  opacity: 0,
  easing: "ease",
});

sr.reveal(``, {
  origin: "right",
  interval: 300,
  opacity: 0,
  easing: "ease",
});

sr.reveal(
  `.main-nav-link, .card-item, .benefit-img, .benefits-text-box, .footer-links-wrap li, .item, .contact-text-box`,
  {
    origin: "bottom",
    interval: 300,
    opacity: 0,
    easing: "ease",
  }
);

sr.reveal(
  ` .heading-primary, .btn, input, .heading-secondary, .social-links-wrap li, .token-hero-sub-title, .grid-text-box, .grid-img-box, .hero-description, .property-wrap li, .blog-description`,
  {
    origin: "bottom",
    interval: 300,
    opacity: 0,
    easing: "ease",
  }
);

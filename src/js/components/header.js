const header = document.querySelector(".header");
const syncScrolledHeader = () => {
  // const isDesktop = window.matchMedia("(min-width: 769px)").matches;
  // header?.classList.toggle("header--scrolled", isDesktop && window.scrollY > 0 && !header.classList.contains("open"));
  header?.classList.toggle("header--scrolled", window.scrollY > 0 && !header.classList.contains("open"));
};

syncScrolledHeader();
window.addEventListener("scroll", syncScrolledHeader, { passive: true });
window.addEventListener("resize", syncScrolledHeader);
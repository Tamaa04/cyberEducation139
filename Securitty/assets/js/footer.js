// Footer utilities: back-to-top

(function () {
  const backTop = document.querySelector(".back-top");
  if (!backTop) return;

  const SHOW_AT_PX = 300;

  // Initialize visibility
  const setVisibility = () => {
    const shouldShow = window.scrollY >= SHOW_AT_PX;
    backTop.style.opacity = shouldShow ? "1" : "0";
    backTop.style.pointerEvents = shouldShow ? "auto" : "none";

    // When hidden, keep it slightly shifted so it feels responsive when showing.
    backTop.style.transform = shouldShow ? "translateY(-6px)" : "translateY(6px)";
  };

  window.addEventListener("scroll", setVisibility, { passive: true });
  setVisibility();

  // Click handler: always scroll to top smoothly
  backTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();



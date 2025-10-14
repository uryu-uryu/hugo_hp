// Enforce light mode regardless of user/system preference.
(function enforceLightMode() {
  var root = document.documentElement;

  function forceLight() {
    root.classList.remove("dark");
    try {
      localStorage.setItem("appearance", "light");
    } catch (e) {}
    // Best-effort: keep theme-color in sync with current background
    try {
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        var bg = getComputedStyle(document.body).backgroundColor || "#ffffff";
        meta.setAttribute("content", bg);
      }
    } catch (e) {}
  }

  // Immediately enforce on script load and after DOM is ready
  forceLight();
  window.addEventListener("DOMContentLoaded", forceLight);
})();



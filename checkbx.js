import "./checkbx.css";
(() => {
  const CLASS = "checkbx";

  document.querySelectorAll("label").forEach(($el) => {
    var maybe = $el.querySelector('input[type="checkbox"]:first-child');
    if (maybe) {
      maybe.classList.add(CLASS);
      $el.classList.add(CLASS);
    }
  });
})();

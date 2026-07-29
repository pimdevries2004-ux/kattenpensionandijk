/* Kattenpension Andijk — kleine helpers, geen dependencies */
(function () {
  "use strict";

  /* --- Mobiel menu --- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --- Scroll-reveal --- */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && items.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -60px 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  /* --- Lightbox voor de galerij --- */
  var figures = document.querySelectorAll(".gallery figure");
  if (figures.length) {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Vergrote foto");
    box.innerHTML =
      '<button class="lightbox-close" type="button" aria-label="Sluiten">&times;</button>' +
      '<img alt="">' +
      '<p class="lightbox-cap"></p>';
    document.body.appendChild(box);

    var lbImg = box.querySelector("img");
    var lbCap = box.querySelector(".lightbox-cap");
    var lastFocus = null;

    function open(fig) {
      var img = fig.querySelector("img");
      var cap = fig.querySelector("figcaption");
      lastFocus = document.activeElement;
      lbImg.src = img.getAttribute("data-full") || img.currentSrc || img.src;
      lbImg.alt = img.alt || "";
      lbCap.textContent = cap ? cap.textContent : "";
      box.classList.add("open");
      document.body.style.overflow = "hidden";
      box.querySelector(".lightbox-close").focus();
    }
    function close() {
      box.classList.remove("open");
      document.body.style.overflow = "";
      lbImg.removeAttribute("src");
      if (lastFocus) { lastFocus.focus(); }
    }

    figures.forEach(function (fig) {
      fig.setAttribute("tabindex", "0");
      fig.setAttribute("role", "button");
      fig.addEventListener("click", function () { open(fig); });
      fig.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(fig); }
      });
    });

    box.addEventListener("click", function (e) {
      if (e.target === box || e.target.classList.contains("lightbox-close")) { close(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("open")) { close(); }
    });
  }

  /* --- Jaartal in de footer --- */
  var jaar = document.querySelector("[data-jaar]");
  if (jaar) { jaar.textContent = new Date().getFullYear(); }
})();

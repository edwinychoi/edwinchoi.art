(function () {
  var gallery = document.querySelector(".gallery");
  if (!gallery) {
    return;
  }

  var STAGGER_MS = 40;
  var REVEAL_MS = 1000;

  var processSeries = {
    coffee: [
      {
        src: "pieces/2026.may.29 coffee final.jpg",
        caption:
          "I wanted to start capturing moments in my own day where I felt calm. This is from a photo I took while having a coffee in prenzlauer berg in Berlin, while waiting for the art store to open. I had a lot of time to relax.",
      },
      {
        src: "pieces/2026.may.29 coffee 1.jpg",
        caption: "I made a colored outline of the scene using pastel pencil",
      },
      {
        src: "pieces/2026.may.29 coffee 2.jpg",
        caption: "Next I tried putting a light complementary color watercolor wash",
      },
      {
        src: "pieces/2026.may.29 coffee 3.jpg",
        caption: "Then I used sandpaper to make color powder from the pastel pencils",
      },
      {
        src: "pieces/2026.may.29 coffee 4.jpg",
        caption: "Finally, I go in with an eraser and pull out the lights",
      },
    ],
  };

  function getColumnCount() {
    if (window.matchMedia("(max-width: 560px)").matches) {
      return 1;
    }

    return 3;
  }

  function layoutGalleryColumns() {
    var columnCount = getColumnCount();
    var items = [];
    var existingCols = gallery.querySelectorAll(".gallery-col");

    if (existingCols.length) {
      existingCols.forEach(function (col) {
        while (col.firstChild) {
          items.push(col.removeChild(col.firstChild));
        }
        col.remove();
      });
    } else {
      items = Array.prototype.slice.call(gallery.children);
    }

    var cols = [];
    for (var i = 0; i < columnCount; i += 1) {
      var col = document.createElement("div");
      col.className = "gallery-col";
      gallery.appendChild(col);
      cols.push(col);
    }

    items.forEach(function (item, index) {
      cols[index % columnCount].appendChild(item);
    });
  }

  layoutGalleryColumns();

  function getDisplayImages() {
    return Array.prototype.slice.call(gallery.querySelectorAll(".gallery-col img"));
  }

  function clearHoverStyles() {
    gallery.querySelectorAll("img").forEach(function (img) {
      img.style.opacity = "";
      img.style.filter = "";
      img.style.transition = "";
    });
  }

  var displayImages = getDisplayImages();
  var pending = displayImages.length;

  function enableGalleryHover() {
    if (gallery.classList.contains("interactive")) {
      return;
    }

    gallery.classList.add("interactive");
    clearHoverStyles();
  }

  function revealGallery() {
    if (gallery.classList.contains("is-ready")) {
      return;
    }

    gallery.classList.add("is-ready");

    displayImages.forEach(function (img, index) {
      img.style.setProperty("--stagger", index * STAGGER_MS + "ms");
    });

    var revealDuration = Math.max(0, displayImages.length - 1) * STAGGER_MS + REVEAL_MS + 50;
    setTimeout(enableGalleryHover, revealDuration);
  }

  function onImageReady(img) {
    if (img.naturalWidth > 0) {
      img.style.aspectRatio = img.naturalWidth + " / " + img.naturalHeight;
    }

    pending -= 1;
    if (pending <= 0) {
      revealGallery();
    }
  }

  function prepareImage(img) {
    if (img.complete) {
      onImageReady(img);
    } else {
      img.addEventListener("load", function () {
        onImageReady(img);
      });
      img.addEventListener("error", function () {
        onImageReady(img);
      });
    }
  }

  if (pending === 0) {
    revealGallery();
  } else {
    displayImages.forEach(prepareImage);
    setTimeout(revealGallery, 8000);
  }

  var lightbox = document.getElementById("lightbox");
  var lightboxContent = lightbox ? lightbox.querySelector(".lightbox__content") : null;
  var LIGHTBOX_FADE_MS = 450;

  function setPageScrollLocked(locked) {
    document.documentElement.classList.toggle("lightbox-open", locked);
  }

  function buildLightboxPiece(src, caption) {
    var figure = document.createElement("figure");
    figure.className = "lightbox__piece";

    var img = document.createElement("img");
    img.src = src;
    img.alt = "";
    figure.appendChild(img);

    if (caption) {
      var figcaption = document.createElement("figcaption");
      figcaption.className = "lightbox__caption";
      figcaption.textContent = caption;
      figure.appendChild(figcaption);
    }

    return figure;
  }

  function openLightbox(img) {
    if (!lightbox || !lightboxContent) {
      return;
    }

    clearHoverStyles();

    var seriesKey = img.getAttribute("data-process");
    var slides = seriesKey ? processSeries[seriesKey] : null;

    lightbox.classList.remove("is-closing");
    lightbox.classList.remove("is-open");
    lightboxContent.innerHTML = "";

    if (slides) {
      lightbox.classList.add("lightbox--series");
      slides.forEach(function (slide) {
        lightboxContent.appendChild(buildLightboxPiece(slide.src, slide.caption));
      });
    } else {
      lightbox.classList.remove("lightbox--series");
      lightboxContent.appendChild(buildLightboxPiece(img.currentSrc || img.src, ""));
    }

    lightbox.setAttribute("aria-hidden", "false");
    setPageScrollLocked(true);
    lightbox.scrollTop = 0;

    void lightbox.offsetHeight;

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        lightbox.classList.add("is-open");
      });
    });
  }

  function finishCloseLightbox() {
    if (!lightbox || !lightboxContent) {
      return;
    }

    lightbox.classList.remove("is-closing", "lightbox--series");
    lightbox.setAttribute("aria-hidden", "true");
    setPageScrollLocked(false);
    lightboxContent.innerHTML = "";
  }

  function closeLightbox() {
    if (!lightbox || !lightboxContent || !lightbox.classList.contains("is-open")) {
      return;
    }

    if (lightbox.classList.contains("is-closing")) {
      return;
    }

    lightbox.classList.add("is-closing");
    lightbox.classList.remove("is-open");

    var closed = false;

    function onFadeEnd(e) {
      if (e.target !== lightbox || e.propertyName !== "opacity" || closed) {
        return;
      }

      closed = true;
      lightbox.removeEventListener("transitionend", onFadeEnd);
      finishCloseLightbox();
    }

    lightbox.addEventListener("transitionend", onFadeEnd);
    setTimeout(function () {
      if (!closed) {
        closed = true;
        lightbox.removeEventListener("transitionend", onFadeEnd);
        finishCloseLightbox();
      }
    }, LIGHTBOX_FADE_MS + 50);
  }

  if (lightbox) {
    lightbox.addEventListener("click", function () {
      closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }

  gallery.addEventListener("click", function (e) {
    if (!gallery.classList.contains("interactive")) {
      return;
    }

    var img = e.target.closest(".gallery img");
    if (!img) {
      return;
    }

    openLightbox(img);
  });

  var tabs = document.querySelectorAll(".label");
  var panels = document.querySelectorAll(".panel");
  var intro = document.querySelector(".intro");
  var scrollCue = document.querySelector(".scroll-cue");
  var gallerySection = document.getElementById("gallery");

  function updateScrollCue() {
    if (!scrollCue || !gallerySection) {
      return;
    }

    var galleryTop = gallerySection.getBoundingClientRect().top;
    var halfwayVisible = galleryTop < window.innerHeight * 0.5;
    scrollCue.classList.toggle("is-hidden", halfwayVisible);
  }

  if (scrollCue && gallerySection) {
    window.addEventListener("scroll", updateScrollCue, { passive: true });
    window.addEventListener("resize", updateScrollCue);
    updateScrollCue();
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-tab");

      tabs.forEach(function (t) {
        var isActive = t === tab;
        t.classList.toggle("active", isActive);
        t.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      panels.forEach(function (panel) {
        var isActive = panel.id === "panel-" + target;
        panel.classList.toggle("active", isActive);
        panel.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
    });
  });
})();

(function () {
  var gallery = document.querySelector(".gallery");
  if (!gallery) {
    return;
  }

  var STAGGER_MS = 40;
  var REVEAL_MS = 1000;
  var HOVER_MS = 500;

  function getColumnCount() {
    if (window.matchMedia("(max-width: 560px)").matches) {
      return 1;
    }

    if (window.matchMedia("(max-width: 900px)").matches) {
      return 2;
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

  function isProcessImage(img) {
    return !!img.closest(".process-images");
  }

  function getDisplayImages() {
    var imgs = [];

    gallery.querySelectorAll(".gallery-col").forEach(function (col) {
      col.querySelectorAll("img").forEach(function (img) {
        if (!isProcessImage(img)) {
          imgs.push(img);
        }
      });
    });

    return imgs;
  }

  function getHoveredGroup(target) {
    if (target.tagName !== "IMG") {
      return [];
    }

    var item = target.closest(".gallery-item");
    if (item && item.classList.contains("is-expanded")) {
      return Array.prototype.slice.call(item.querySelectorAll("img"));
    }

    if (item) {
      return [target];
    }

    return [target];
  }

  function applyHoverOpacity(hoveredImg) {
    var group = new Set(getHoveredGroup(hoveredImg));

    gallery.querySelectorAll("img").forEach(function (img) {
      if (isProcessImage(img) && !img.closest(".gallery-item.is-expanded")) {
        return;
      }

      img.style.transition = "opacity " + HOVER_MS + "ms ease, filter " + HOVER_MS + "ms ease";
      img.style.opacity = group.has(img) ? "1" : "0.3";
      img.style.filter = group.has(img) ? "" : "blur(1px)";
    });
  }

  function clearHoverOpacity() {
    gallery.querySelectorAll("img").forEach(function (img) {
      img.style.opacity = "";
      img.style.filter = "";
      img.style.transition = "";
    });
  }

  function applyExpandedDim() {
    var activeItem = gallery.querySelector(".gallery-item.is-expanded, .gallery-item.is-collapsing");

    gallery.querySelectorAll("img").forEach(function (img) {
      if (activeItem && activeItem.contains(img)) {
        img.style.opacity = "";
        img.style.filter = "";
        img.style.transition = "";
        return;
      }

      img.style.transition = "opacity " + HOVER_MS + "ms ease, filter " + HOVER_MS + "ms ease";
      img.style.opacity = "0.3";
      img.style.filter = "blur(1px)";
    });
  }

  function clearExpandedDim() {
    if (!gallery.classList.contains("has-expanded")) {
      clearHoverOpacity();
    }
  }

  var displayImages = getDisplayImages();
  var pending = displayImages.length;

  function enableGalleryHover() {
    if (gallery.classList.contains("interactive")) {
      return;
    }

    gallery.classList.add("interactive");
    clearHoverOpacity();
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

  gallery.querySelectorAll(".process-images img").forEach(function (img) {
    img.addEventListener("load", function () {
      if (img.naturalWidth > 0) {
        img.style.aspectRatio = img.naturalWidth + " / " + img.naturalHeight;
      }
    });

    if (img.complete && img.naturalWidth > 0) {
      img.style.aspectRatio = img.naturalWidth + " / " + img.naturalHeight;
    }
  });

  var expandable = gallery.querySelector(".gallery-item--expandable");
  if (expandable) {
    var hero = expandable.querySelector(".gallery-item__hero");
    var processImages = expandable.querySelector(".process-images");
    var processImgs = processImages.querySelectorAll("img");
    var processFigures = processImages.querySelectorAll(".process-figure");
    var PROCESS_STAGGER = 40;
    var PROCESS_DURATION = 450;
    var HEIGHT_DURATION = 350;
    var processLastIndex = Math.max(0, processFigures.length - 1);

    processImages.style.setProperty("--process-last-index", processLastIndex);
    processImages.style.setProperty("--process-stagger", PROCESS_STAGGER + "ms");
    processImages.style.setProperty("--process-duration", PROCESS_DURATION + "ms");

    function resetProcessContainerStyles() {
      processImages.style.removeProperty("height");
      processImages.style.removeProperty("transition");
      processImages.style.removeProperty("overflow");
      processImages.style.removeProperty("max-height");
    }

    function animateProcessIn() {
      processImages.classList.remove("is-exiting");
    }

    function animateProcessOut() {
      processImages.classList.add("is-exiting");
    }

    function collapseProcessContainer(done) {
      var height = processImages.scrollHeight;

      processImages.style.overflow = "hidden";
      processImages.style.maxHeight = "none";
      processImages.style.height = height + "px";

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          processImages.style.transition =
            "height " + HEIGHT_DURATION + "ms cubic-bezier(0.22, 1, 0.36, 1)";
          processImages.style.height = "0px";
        });
      });

      setTimeout(done, HEIGHT_DURATION + 50);
    }

    function finishCollapse() {
      expandable.classList.remove("is-expanded", "is-collapsing");
      processImages.classList.remove("is-exiting");
      processImages.setAttribute("aria-hidden", "true");
      gallery.classList.remove("has-expanded");
      clearExpandedDim();
      resetProcessContainerStyles();
    }

    function collapseProcess() {
      if (
        !gallery.classList.contains("interactive") ||
        !expandable.classList.contains("is-expanded")
      ) {
        return;
      }

      animateProcessOut();
      expandable.classList.add("is-collapsing");
      applyExpandedDim();

      setTimeout(function () {
        collapseProcessContainer(finishCollapse);
      }, PROCESS_DURATION + processLastIndex * PROCESS_STAGGER + 50);
    }

    function expandProcess() {
      if (!gallery.classList.contains("interactive")) {
        return;
      }

      resetProcessContainerStyles();
      expandable.classList.remove("is-collapsing");
      expandable.classList.add("is-expanded");
      processImages.classList.remove("is-exiting");
      processImages.setAttribute("aria-hidden", "false");
      clearHoverOpacity();
      gallery.classList.add("has-expanded");
      applyExpandedDim();

      requestAnimationFrame(function () {
        void processImages.offsetHeight;
      });
    }

    function toggleProcess() {
      if (expandable.classList.contains("is-expanded")) {
        collapseProcess();
      } else {
        expandProcess();
      }
    }

    hero.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleProcess();
    });

    document.addEventListener("click", function (e) {
      if (!expandable.classList.contains("is-expanded")) {
        return;
      }

      if (expandable.contains(e.target)) {
        return;
      }

      collapseProcess();
    });
  }

  gallery.addEventListener("mouseover", function (e) {
    if (
      !gallery.classList.contains("interactive") ||
      gallery.classList.contains("has-expanded") ||
      e.target.tagName !== "IMG"
    ) {
      return;
    }

    if (isProcessImage(e.target) && !e.target.closest(".gallery-item.is-expanded")) {
      return;
    }

    applyHoverOpacity(e.target);
  });

  gallery.addEventListener("mouseleave", function () {
    if (!gallery.classList.contains("interactive") || gallery.classList.contains("has-expanded")) {
      return;
    }

    clearHoverOpacity();
  });

  var tabs = document.querySelectorAll(".label");
  var panels = document.querySelectorAll(".panel");

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

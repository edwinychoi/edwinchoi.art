const VOID_WIDTH = 560;
const VOID_HEIGHT = 660;
const GUTTER = 40;
const VOID_MARGIN = 80;
const OUTER_PADDING = 120;

// Clockwise from top — matches reference moodboard layout
const GALLERY_IMAGES = [
  "gallery_street_main.jpg",
  "gallery_harrypotter_main.jpg",
  "gallery_wall_main.jpg",
  "gallery_suitguy_main.jpg",
  "gallery_treeshadows_main.jpg",
  "gallery_venice_main.jpg",
  "gallery_guitar_main.jpg",
  "gallery_medical_main.png",
  "gallery_cafecolor_main.jpg",
  "gallery_cafecolors_main.jpg",
  "gallery_portrait_main.jpg",
  "gallery_cafegirl_main.jpg",
  "gallery_handpulling_main.jpg",
  "gallery_onion_main.jpg",
  "gallery_sittingguy_main.jpg",
  "gallery_sketch_main.jpg",
  "gallery_berlincafe_main.jpg",
  "gallery_tower_main.jpg",
  "gallery_cafelight_main.jpg",
  "gallery_room_main.jpg",
  "gallery_citylights_main.jpg",
  "gallery_carlights_main.jpg",
  "gallery_cult_main.jpg",
  "gallery_mountains_main.jpg",
  "gallery_bus_main.jpg",
  "gallery_profile_main.jpg",
  "gallery_hands_main.JPG",
  "gallery_space_main.jpg",
  "gallery_kingsgarden_main.jpg",
  "gallery_landscape_main.jpg",
  "gallery_tea_main.jpg",
];

const ALL_GALLERY_FILES = new Set([
  "gallery_berlincafe_1.jpg",
  "gallery_berlincafe_2.jpg",
  "gallery_berlincafe_3.jpg",
  "gallery_berlincafe_4.jpg",
  "gallery_berlincafe_main.jpg",
  "gallery_bus_1.jpg",
  "gallery_bus_2.jpg",
  "gallery_bus_3.jpg",
  "gallery_bus_main.jpg",
  "gallery_cafecolor_1.jpg",
  "gallery_cafecolor_2.jpg",
  "gallery_cafecolor_3.jpg",
  "gallery_cafecolor_4.jpg",
  "gallery_cafecolor_5.jpg",
  "gallery_cafecolor_6.jpg",
  "gallery_cafecolor_7.jpg",
  "gallery_cafecolor_main.jpg",
  "gallery_cafecolors_1.jpg",
  "gallery_cafecolors_2.jpg",
  "gallery_cafecolors_3.jpg",
  "gallery_cafecolors_main.jpg",
  "gallery_cafegirl_main.jpg",
  "gallery_cafelight_main.jpg",
  "gallery_carlights_main.jpg",
  "gallery_citylights_1.jpg",
  "gallery_citylights_main.jpg",
  "gallery_cult_1.jpg",
  "gallery_cult_main.jpg",
  "gallery_guitar_main.jpg",
  "gallery_handpulling_main.jpg",
  "gallery_hands_main.JPG",
  "gallery_harrypotter_main.jpg",
  "gallery_kingsgarden_1.jpg",
  "gallery_kingsgarden_2.jpg",
  "gallery_kingsgarden_3.jpg",
  "gallery_kingsgarden_main.jpg",
  "gallery_landscape_main.jpg",
  "gallery_medical_1.png",
  "gallery_medical_2.png",
  "gallery_medical_3.png",
  "gallery_medical_4.png",
  "gallery_medical_5.png",
  "gallery_medical_6.png",
  "gallery_medical_7.png",
  "gallery_medical_main.png",
  "gallery_mountains_main.jpg",
  "gallery_onion_main.jpg",
  "gallery_portrait_main.jpg",
  "gallery_profile_main.jpg",
  "gallery_room_main.jpg",
  "gallery_sittingguy_main.jpg",
  "gallery_sketch_main.jpg",
  "gallery_space_main.jpg",
  "gallery_street_main.jpg",
  "gallery_suitguy_main.jpg",
  "gallery_tea_main.jpg",
  "gallery_tower_main.jpg",
  "gallery_treeshadows_main.jpg",
  "gallery_venice_1.jpg",
  "gallery_venice_2.jpg",
  "gallery_venice_3.jpg",
  "gallery_venice_main.jpg",
  "gallery_wall_main.jpg",
]);

// Center offsets (dx, dy) for each image in GALLERY_IMAGES — tuned to reference screenshot
const IMAGE_LAYOUT_OFFSETS = [
  { x: -80, y: -350 },
  { x: 40, y: -340 },
  { x: 210, y: -310 },
  { x: 360, y: -210 },
  { x: 420, y: -100 },
  { x: 430, y: 20 },
  { x: 410, y: 200 },
  { x: 340, y: 290 },
  { x: 300, y: 380 },
  { x: 190, y: 420 },
  { x: 70, y: 430 },
  { x: -40, y: 410 },
  { x: -110, y: 370 },
  { x: 110, y: 380 },
  { x: 0, y: 300 },
  { x: -60, y: 340 },
  { x: 150, y: 320 },
  { x: -90, y: 370 },
  { x: -200, y: 320 },
  { x: -240, y: 240 },
  { x: -350, y: 320 },
  { x: -370, y: 200 },
  { x: -360, y: 100 },
  { x: -380, y: -10 },
  { x: -320, y: -90 },
  { x: -280, y: 110 },
  { x: -240, y: 200 },
  { x: -200, y: -150 },
  { x: -300, y: -240 },
  { x: -330, y: -300 },
  { x: -140, y: -280 },
];

const LINKEDIN_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.27h4.56V23.5H.22V8.27zm7.26 0h4.37v2.08h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99v8.54h-4.56v-7.57c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.89 1.96-2.89 3.99v7.7H7.48V8.27z"/></svg>';

const INSTAGRAM_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.84.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.26.07 1.64.07 4.84s-.01 3.58-.07 4.84c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.26.06-1.64.07-4.84.07s-3.58-.01-4.84-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23-.06-1.26-.07-1.64-.07-4.84s.01-3.58.07-4.84c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.26-.06 1.64-.07 4.84-.07zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.64c-.78.3-1.44.7-2.1 1.36-.66.66-1.06 1.32-1.36 2.1-.3.76-.51 1.64-.57 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.15.57 2.91.3.78.7 1.44 1.36 2.1.66.66 1.32 1.06 2.1 1.36.76.3 1.64.51 2.91.57 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.27 2.91-.57.78-.3 1.44-.7 2.1-1.36.66-.66 1.06-1.32 1.36-2.1.3-.76.51-1.64.57-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.15-.57-2.91-.3-.78-.7-1.44-1.36-2.1-.66-.66-1.32-1.06-2.1-1.36-.76-.3-1.64-.51-2.91-.57C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a3.99 3.99 0 110-7.98 3.99 3.99 0 010 7.98zm7.85-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>';

const CONTENT = {
  who: `
    <p>I'm Edwin, and this is a space to share my attempts at exploring quiet presence through drawing. If you'd like to share ideas, trade art, or simply connect, I'd love to hear from you.</p>
    <a class="contact-email" href="mailto:edwinchoi.design@gmail.com">edwinchoi.design@gmail.com</a>
    <div class="social-row">
      <a href="#" aria-label="LinkedIn">${LINKEDIN_SVG}</a>
      <a href="#" aria-label="Instagram">${INSTAGRAM_SVG}</a>
    </div>
  `,
  what: `
    <p>Blue hour where city and sky melt into each other. The sound of flakes landing as you step into the deep stillness of untouched snow. A flowing stream, always changing but still the same. I want to visualize this feeling that's both peace and aliveness. Lines that disappear, powder that lightly rests on paper, colors that blend. A place for introspection if you want it. Or if you don't, then a place to simply be.</p>
  `,
  why: `
    <p>By day, I <a href="#">design healthcare products</a> to improve people's well-being. By night, I study <a href="#">public health informatics</a> so I can use design to improve healthcare systems. I needed a place in between. Here, I draw to express a feeling that words or data can't quite explain. I'm curious where exploring quiet presence through drawing takes me.</p>
  `,
};

const PROCESS_CAPTIONS = {
  "gallery_cafecolor_1.jpg":
    "I wanted to explore what things would look like if I leaned into what I feel more confident in: linework that has different weights and textures to denote shadow, light, heaviness, and lightness.",
  "gallery_cafecolor_2.jpg":
    "On top of the linework I tried rubbing in masking fluid to keep the highlight areas bright throughout.",
  "gallery_cafecolor_3.jpg":
    'I like having inspiration on the side because of some subconscious belief that I might absorb the visual style through some psychic voodoo. These are from galleries I visited in Leipzig Germany over the weekend, from the complex of studios called "Leipziger Baumwollspinnerei". Super cool place.',
  "gallery_cafecolor_4.jpg":
    "Great. I finished doing a light watercolor wash. I'm still not used to watercolor so I only used 2 colors to keep things simple.",
  "gallery_cafecolor_5.jpg": "Desk is getting pretty messy here.",
  "gallery_cafecolor_6.jpg":
    "Time to scratch out the masking fluid. Crap. Some of the masking fluid is combined into the paper. I guess I pressed too hard while putting the fluid on.",
  "gallery_cafecolor_7.jpg":
    "Next I started sandpapering pastel onto the page so that I can brush it in as a color layer on top of the watercolor. I've been really enjoying this technique.",
  "gallery_cafecolor_main.jpg":
    'Here\'s the "finished" piece! You can see some masking fluid is still stuck on the page. I liked how the pastel powder colors seeped into the watercolor areas in a soft gradient. Overall I like the ghostly soft vibe, and I feel better that the linework is adding some weight to the color gradients that are melting into each other. I\'m not sure what\'s going on in the bottom right. Anyways, a good experiment for today.',
};

const viewport = document.getElementById("viewport");
const board = document.getElementById("board");
const imageLayer = document.getElementById("image-layer");
const contentArea = document.getElementById("content-area");
const textStack = document.getElementById("text-stack");
const nav = document.getElementById("nav");
const navButtons = document.querySelectorAll(".nav-btn");

const NAV_GAP_PX = 28;
const SECTION_FADE_MS = 280;

let activeSection = null;
let pendingSection = null;
let sectionFadeTimer = null;

let BOARD_SIZE = 2600;
let panX = 0;
let panY = 0;
let scale = 1;
let minScale = 0.3;
let fitScale = 0.3;
let defaultScale = 1;
let maxScale = 2;
let contentBounds = { minX: 0, minY: 0, maxX: 0, maxY: 0 };

let isDragging = false;
let didDrag = false;
let pointerDownTile = null;
let dragStartX = 0;
let dragStartY = 0;
let panStartX = 0;
let panStartY = 0;

let isPinching = false;
let pinchStartDist = 0;
let lastPinchDist = 0;
let pinchStartScale = 1;
let pinchCenterX = 0;
let pinchCenterY = 0;

const DRAG_THRESHOLD = 5;
const WHEEL_ZOOM_SENSITIVITY = 0.0035;
const PINCH_ZOOM_GAIN = 1.08;
const LIGHTBOX_FADE_MS = 450;
const MAX_IMAGE_EDGE = 300;
const MIN_IMAGE_EDGE = 150;

function scaleToDisplaySize(naturalW, naturalH) {
  const maxEdge = Math.max(naturalW, naturalH);
  let scale = MAX_IMAGE_EDGE / maxEdge;

  let w = Math.round(naturalW * scale);
  let h = Math.round(naturalH * scale);

  if (Math.min(w, h) < MIN_IMAGE_EDGE) {
    const bump = MIN_IMAGE_EDGE / Math.min(w, h);
    w = Math.round(w * bump);
    h = Math.round(h * bump);
  }

  return { w, h };
}

function loadImageSize(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
}

async function loadAllImageSizes() {
  return Promise.all(
    GALLERY_IMAGES.map(async (filename) => {
      try {
        const { w: naturalW, h: naturalH } = await loadImageSize(`pieces/${filename}`);
        const { w, h } = scaleToDisplaySize(naturalW, naturalH);
        return { filename, w, h, naturalW, naturalH };
      } catch {
        return { filename, w: 220, h: 280, naturalW: 220, naturalH: 280 };
      }
    })
  );
}

function rectsOverlap(a, b, gap) {
  return !(
    a.right + gap <= b.left ||
    a.left >= b.right + gap ||
    a.bottom + gap <= b.top ||
    a.top >= b.bottom + gap
  );
}

function overlapsVoid(rect, voidRect) {
  return rectsOverlap(rect, voidRect, VOID_MARGIN);
}

function updateRectBounds(rect) {
  rect.right = rect.left + rect.w;
  rect.bottom = rect.top + rect.h;
}

function pushAwayFromVoid(rect, voidRect, amount) {
  const pcx = (rect.left + rect.right) / 2;
  const pcy = (rect.top + rect.bottom) / 2;
  const vcx = (voidRect.left + voidRect.right) / 2;
  const vcy = (voidRect.top + voidRect.bottom) / 2;
  const dx = pcx - vcx;
  const dy = pcy - vcy;
  const len = Math.hypot(dx, dy) || 1;
  rect.left += (dx / len) * amount;
  rect.top += (dy / len) * amount;
  updateRectBounds(rect);
}

function resolveRectOverlap(a, b, gap) {
  if (!rectsOverlap(a, b, gap)) return false;

  const acx = (a.left + a.right) / 2;
  const acy = (a.top + a.bottom) / 2;
  const bcx = (b.left + b.right) / 2;
  const bcy = (b.top + b.bottom) / 2;
  const dx = acx - bcx;
  const dy = acy - bcy;

  const overlapX = (a.w + b.w) / 2 + gap - Math.abs(dx);
  const overlapY = (a.h + b.h) / 2 + gap - Math.abs(dy);

  if (overlapX <= 0 && overlapY <= 0) return false;

  if (overlapX > 0 && (overlapY <= 0 || overlapX <= overlapY)) {
    const sep = overlapX / 2 + 1;
    if (dx >= 0) {
      a.left += sep;
      b.left -= sep;
    } else {
      a.left -= sep;
      b.left += sep;
    }
  } else {
    const sep = overlapY / 2 + 1;
    if (dy >= 0) {
      a.top += sep;
      b.top -= sep;
    } else {
      a.top -= sep;
      b.top += sep;
    }
  }

  updateRectBounds(a);
  updateRectBounds(b);
  return true;
}

function separateAllPlacements(placements, voidRect) {
  for (let pass = 0; pass < 500; pass++) {
    let moved = false;

    for (const p of placements) {
      if (!overlapsVoid(p, voidRect)) continue;
      pushAwayFromVoid(p, voidRect, 10);
      moved = true;
    }

    for (let i = 0; i < placements.length; i++) {
      for (let j = i + 1; j < placements.length; j++) {
        if (resolveRectOverlap(placements[i], placements[j], GUTTER)) {
          moved = true;
        }
      }
    }

    if (!moved) break;
  }
}

function placeAtTarget(filename, w, h, offset, voidRect, placedRects, tempCenter) {
  const rect = {
    filename,
    left: tempCenter + offset.x - w / 2,
    top: tempCenter + offset.y - h / 2,
    w,
    h,
  };
  updateRectBounds(rect);

  const vcx = (voidRect.left + voidRect.right) / 2;
  const vcy = (voidRect.top + voidRect.bottom) / 2;

  for (let attempt = 0; attempt < 240; attempt++) {
    let blocked = overlapsVoid(rect, voidRect);
    if (!blocked) {
      for (const placed of placedRects) {
        if (rectsOverlap(rect, placed, GUTTER)) {
          blocked = true;
          break;
        }
      }
    }
    if (!blocked) return rect;

    const rcx = (rect.left + rect.right) / 2;
    const rcy = (rect.top + rect.bottom) / 2;
    let dx = rcx - vcx;
    let dy = rcy - vcy;

    for (const placed of placedRects) {
      if (!rectsOverlap(rect, placed, GUTTER)) continue;
      const pcx = (placed.left + placed.right) / 2;
      const pcy = (placed.top + placed.bottom) / 2;
      dx += (rcx - pcx) * 2.5;
      dy += (rcy - pcy) * 2.5;
    }

    const len = Math.hypot(dx, dy) || 1;
    const push = 10 + attempt * 0.35;
    rect.left += (dx / len) * push;
    rect.top += (dy / len) * push;
    updateRectBounds(rect);
  }

  return rect;
}

function finalizeBoard(placements, voidRect) {
  let minX = voidRect.left;
  let minY = voidRect.top;
  let maxX = voidRect.right;
  let maxY = voidRect.bottom;

  placements.forEach((p) => {
    minX = Math.min(minX, p.left);
    minY = Math.min(minY, p.top);
    maxX = Math.max(maxX, p.right);
    maxY = Math.max(maxY, p.bottom);
  });

  const boardSize =
    Math.ceil((Math.max(maxX - minX, maxY - minY) + OUTER_PADDING * 2) / 50) * 50;
  const voidCx = (voidRect.left + voidRect.right) / 2;
  const voidCy = (voidRect.top + voidRect.bottom) / 2;
  const offsetX = boardSize / 2 - voidCx;
  const offsetY = boardSize / 2 - voidCy;

  return {
    boardSize,
    placements: placements.map((p) => ({
      ...p,
      left: p.left + offsetX,
      top: p.top + offsetY,
      right: p.right + offsetX,
      bottom: p.bottom + offsetY,
    })),
    bounds: {
      minX: minX + offsetX,
      minY: minY + offsetY,
      maxX: maxX + offsetX,
      maxY: maxY + offsetY,
    },
  };
}

function layoutFixedOrder(imageSizes) {
  const tempCenter = 1800;
  const voidRect = {
    left: tempCenter - VOID_WIDTH / 2,
    top: tempCenter - VOID_HEIGHT / 2,
    right: tempCenter + VOID_WIDTH / 2,
    bottom: tempCenter + VOID_HEIGHT / 2,
  };

  const placements = [];
  const placedRects = [];

  GALLERY_IMAGES.forEach((filename, i) => {
    const { w, h } = imageSizes[i];
    const offset = IMAGE_LAYOUT_OFFSETS[i];
    const spread = 1.2;
    const scaledOffset = { x: offset.x * spread, y: offset.y * spread };
    const rect = placeAtTarget(filename, w, h, scaledOffset, voidRect, placedRects, tempCenter);
    placements.push(rect);
    placedRects.push(rect);
  });

  separateAllPlacements(placements, voidRect);
  return finalizeBoard(placements, voidRect);
}

async function layoutImages() {
  imageLayer.innerHTML = "";

  const imageSizes = await loadAllImageSizes();
  const { boardSize, placements, bounds } = layoutFixedOrder(imageSizes);
  BOARD_SIZE = boardSize;
  contentBounds = bounds;

  document.documentElement.style.setProperty("--board-size", `${BOARD_SIZE}px`);
  board.style.width = `${BOARD_SIZE}px`;
  board.style.height = `${BOARD_SIZE}px`;

  placements.forEach((placement) => {
    const tile = document.createElement("div");
    tile.className = "image-tile";
    tile.style.left = `${placement.left}px`;
    tile.style.top = `${placement.top}px`;
    tile.style.width = `${placement.w}px`;
    tile.style.height = `${placement.h}px`;

    const img = document.createElement("img");
    img.src = `pieces/${placement.filename}`;
    img.dataset.filename = placement.filename;
    img.alt = "";
    img.width = placement.w;
    img.height = placement.h;
    img.loading = "lazy";
    img.draggable = false;

    tile.appendChild(img);
    imageLayer.appendChild(tile);
  });

  imageLayer.classList.add("interactive");
}

function updateZoomLimits() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const bw = contentBounds.maxX - contentBounds.minX;
  const bh = contentBounds.maxY - contentBounds.minY;

  fitScale = Math.min(vw / bw, vh / bh) * 0.94;
  minScale = fitScale * 0.42;

  // Default: center text dominates the viewport; inner images peek at the edges
  const textWidthFraction = 0.78;
  const textHeightFraction = 0.72;
  defaultScale = Math.min(
    (vw * textWidthFraction) / VOID_WIDTH,
    (vh * textHeightFraction) / VOID_HEIGHT
  );

  maxScale = defaultScale * 1.35;
}

function applyTransform() {
  board.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
}

function clampPan() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const scaledBoardW = BOARD_SIZE * scale;
  const scaledBoardH = BOARD_SIZE * scale;
  const slack = Math.max(vw, vh) * 0.55;

  const minPanX = -scaledBoardW - slack;
  const maxPanX = vw + slack;
  const minPanY = -scaledBoardH - slack;
  const maxPanY = vh + slack;

  panX = Math.min(maxPanX, Math.max(minPanX, panX));
  panY = Math.min(maxPanY, Math.max(minPanY, panY));
}

function normalizeWheelDelta(e) {
  if (e.deltaMode === 1) return e.deltaY * 28;
  if (e.deltaMode === 2) return e.deltaY * window.innerHeight;
  return e.deltaY;
}

function centerOnBoard(focusScale) {
  const cx = BOARD_SIZE / 2;
  const cy = BOARD_SIZE / 2;
  panX = window.innerWidth / 2 - cx * focusScale;
  panY = window.innerHeight / 2 - cy * focusScale;
}

function zoomAt(clientX, clientY, newScale) {
  const prevScale = scale;
  scale = Math.min(maxScale, Math.max(minScale, newScale));

  const boardX = (clientX - panX) / prevScale;
  const boardY = (clientY - panY) / prevScale;
  panX = clientX - boardX * scale;
  panY = clientY - boardY * scale;

  clampPan();
  applyTransform();
}

function setDefaultView() {
  updateZoomLimits();
  scale = defaultScale;
  centerOnBoard(scale);
  clampPan();
  applyTransform();
}

function getProcessSlides(mainFilename) {
  const match = mainFilename.match(/^(gallery_.+)_main(\.[^.]+)$/i);
  if (!match) return null;

  const base = match[1];
  const slides = [...ALL_GALLERY_FILES]
    .filter((file) => {
      const numbered = file.match(new RegExp(`^${base}_(\\d+)\\.`, "i"));
      return numbered !== null;
    })
    .sort((a, b) => {
      const numA = parseInt(a.match(/_(\d+)\./)[1], 10);
      const numB = parseInt(b.match(/_(\d+)\./)[1], 10);
      return numA - numB;
    });

  return slides.length ? slides : null;
}

function getProcessCaption(mainFilename, imageFilename) {
  const match = mainFilename.match(/^(gallery_.+)_main\./i);
  if (!match || match[1] !== "gallery_cafecolor") return null;
  return PROCESS_CAPTIONS[imageFilename] ?? null;
}

function buildLightboxPiece(filename, caption) {
  const figure = document.createElement("figure");
  figure.className = "lightbox__piece";

  const img = document.createElement("img");
  img.src = `pieces/${filename}`;
  img.alt = caption || "";
  figure.appendChild(img);

  if (caption) {
    const figcaption = document.createElement("figcaption");
    figcaption.className = "lightbox__caption";
    figcaption.textContent = caption;
    figure.appendChild(figcaption);
  }

  return figure;
}

function setLightboxOpen(isOpen) {
  document.documentElement.classList.toggle("lightbox-open", isOpen);
}

function openLightbox(mainFilename) {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = lightbox?.querySelector(".lightbox__content");
  if (!lightbox || !lightboxContent) return;

  const slides = getProcessSlides(mainFilename);

  lightbox.classList.remove("is-closing");
  lightbox.classList.remove("is-open");
  lightboxContent.innerHTML = "";

  if (slides) {
    lightbox.classList.add("lightbox--series");

    const appendPiece = (filename) => {
      lightboxContent.appendChild(
        buildLightboxPiece(filename, getProcessCaption(mainFilename, filename))
      );
    };

    appendPiece(mainFilename);
    slides.forEach(appendPiece);

    if (slides.length > 2) {
      appendPiece(mainFilename);
    }
  } else {
    lightbox.classList.remove("lightbox--series");
    lightboxContent.appendChild(buildLightboxPiece(mainFilename));
  }

  lightbox.setAttribute("aria-hidden", "false");
  setLightboxOpen(true);
  lightbox.scrollTop = 0;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      lightbox.classList.add("is-open");
    });
  });
}

function finishCloseLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = lightbox?.querySelector(".lightbox__content");
  if (!lightbox || !lightboxContent) return;

  lightbox.classList.remove("is-closing", "lightbox--series");
  lightbox.setAttribute("aria-hidden", "true");
  setLightboxOpen(false);
  lightboxContent.innerHTML = "";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox || !lightbox.classList.contains("is-open") || lightbox.classList.contains("is-closing")) {
    return;
  }

  lightbox.classList.add("is-closing");
  lightbox.classList.remove("is-open");

  let closed = false;

  function onFadeEnd(e) {
    if (e.target !== lightbox || e.propertyName !== "opacity" || closed) return;
    closed = true;
    lightbox.removeEventListener("transitionend", onFadeEnd);
    finishCloseLightbox();
  }

  lightbox.addEventListener("transitionend", onFadeEnd);
  setTimeout(() => {
    if (!closed) {
      closed = true;
      lightbox.removeEventListener("transitionend", onFadeEnd);
      finishCloseLightbox();
    }
  }, LIGHTBOX_FADE_MS + 50);
}

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  lightbox.addEventListener("click", () => {
    closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

function measureWhoParagraphHeight() {
  if (!contentArea) return 0;

  const probe = document.createElement("div");
  probe.setAttribute("aria-hidden", "true");
  Object.assign(probe.style, {
    position: "absolute",
    visibility: "hidden",
    pointerEvents: "none",
    left: "0",
    top: "0",
    width: "100%",
    fontSize: "1.12rem",
    fontWeight: "300",
    fontStyle: "italic",
    lineHeight: "1.75",
    letterSpacing: "0.01em",
  });
  const whoParagraph = CONTENT.who.match(/<p>[\s\S]*?<\/p>/)?.[0] ?? CONTENT.who;
  probe.innerHTML = whoParagraph;
  const paragraph = probe.querySelector("p");
  if (paragraph) paragraph.style.margin = "0";

  contentArea.appendChild(probe);
  const height = paragraph?.offsetHeight ?? 0;
  probe.remove();
  return height;
}

function alignTextStack() {
  if (!textStack || !nav) return;

  const offset =
    nav.offsetHeight + NAV_GAP_PX + measureWhoParagraphHeight() / 2;
  textStack.style.transform = `translateY(-${offset}px)`;
}

function setActiveSection(section) {
  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === section);
  });

  const useMotion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nextHtml = CONTENT[section] || CONTENT.who;

  if (!useMotion) {
    clearTimeout(sectionFadeTimer);
    sectionFadeTimer = null;
    pendingSection = null;
    activeSection = section;
    contentArea.innerHTML = nextHtml;
    contentArea.classList.remove("content-hidden");
    return;
  }

  if (activeSection === null) {
    activeSection = section;
    contentArea.innerHTML = nextHtml;
    return;
  }

  if (section === activeSection && !sectionFadeTimer) return;

  pendingSection = section;

  if (sectionFadeTimer) return;

  contentArea.classList.add("content-hidden");
  sectionFadeTimer = setTimeout(() => {
    sectionFadeTimer = null;
    const target = pendingSection ?? section;
    pendingSection = null;
    contentArea.innerHTML = CONTENT[target] || CONTENT.who;
    activeSection = target;
    requestAnimationFrame(() => {
      contentArea.classList.remove("content-hidden");
    });
  }, SECTION_FADE_MS);
}

function touchDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

function touchCenter(touches) {
  return {
    x: (touches[0].clientX + touches[1].clientX) / 2,
    y: (touches[0].clientY + touches[1].clientY) / 2,
  };
}

function initInteraction() {
  function tryOpenTileLightbox() {
    if (!pointerDownTile || didDrag || !imageLayer.classList.contains("interactive")) {
      return;
    }

    const img = pointerDownTile.querySelector("img");
    if (!img?.dataset.filename) return;

    openLightbox(img.dataset.filename);
  }

  function onPointerDown(clientX, clientY, target) {
    if (target.closest("#center-panel a, #center-panel button")) return;

    pointerDownTile = target.closest(".image-tile");
    isDragging = true;
    didDrag = false;
    dragStartX = clientX;
    dragStartY = clientY;
    panStartX = panX;
    panStartY = panY;

    if (!pointerDownTile) {
      viewport.classList.add("is-dragging");
    }
  }

  function onPointerMove(clientX, clientY) {
    if (!isDragging) return;

    const dx = clientX - dragStartX;
    const dy = clientY - dragStartY;

    if (!didDrag && Math.hypot(dx, dy) < DRAG_THRESHOLD) return;

    if (!didDrag) {
      didDrag = true;
      viewport.classList.add("is-dragging");
    }

    panX = panStartX + dx;
    panY = panStartY + dy;
    clampPan();
    applyTransform();
  }

  function onPointerUp() {
    tryOpenTileLightbox();
    isDragging = false;
    pointerDownTile = null;
    viewport.classList.remove("is-dragging");
  }

  viewport.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    onPointerDown(e.clientX, e.clientY, e.target);
  });

  window.addEventListener("mousemove", (e) => onPointerMove(e.clientX, e.clientY));
  window.addEventListener("mouseup", onPointerUp);

  viewport.addEventListener(
    "wheel",
    (e) => {
      if (document.documentElement.classList.contains("lightbox-open")) return;
      e.preventDefault();
      const delta = normalizeWheelDelta(e);
      const factor = Math.exp(-delta * WHEEL_ZOOM_SENSITIVITY);
      zoomAt(e.clientX, e.clientY, scale * factor);
    },
    { passive: false }
  );

  viewport.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 2) {
        isDragging = false;
        isPinching = true;
        pinchStartDist = touchDistance(e.touches);
        lastPinchDist = pinchStartDist;
        pinchStartScale = scale;
        const center = touchCenter(e.touches);
        pinchCenterX = center.x;
        pinchCenterY = center.y;
        viewport.classList.remove("is-dragging");
        return;
      }

      if (e.touches.length !== 1) return;
      onPointerDown(e.touches[0].clientX, e.touches[0].clientY, e.target);
    },
    { passive: true }
  );

  viewport.addEventListener(
    "touchmove",
    (e) => {
      if (isPinching && e.touches.length === 2) {
        e.preventDefault();
        const dist = touchDistance(e.touches);
        const center = touchCenter(e.touches);
        if (lastPinchDist > 0) {
          const ratio = dist / lastPinchDist;
          const factor = Math.pow(ratio, PINCH_ZOOM_GAIN);
          zoomAt(center.x, center.y, scale * factor);
        }
        lastPinchDist = dist;
        return;
      }

      if (!isDragging || e.touches.length !== 1) return;
      e.preventDefault();
      onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
    },
    { passive: false }
  );

  function endTouch() {
    isPinching = false;
    lastPinchDist = 0;
    onPointerUp();
  }

  viewport.addEventListener("touchend", endTouch);
  viewport.addEventListener("touchcancel", endTouch);
}

function initNav() {
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => setActiveSection(btn.dataset.section));
  });
}

function onResize() {
  const zoomRatio = (scale - minScale) / (defaultScale - minScale || 1);
  updateZoomLimits();
  scale = minScale + zoomRatio * (defaultScale - minScale);
  scale = Math.min(maxScale, Math.max(minScale, scale));
  centerOnBoard(scale);
  clampPan();
  applyTransform();
  alignTextStack();
}

async function init() {
  await layoutImages();
  setDefaultView();
  setActiveSection("who");
  if (document.fonts) {
    await document.fonts.ready;
    alignTextStack();
  }
  initInteraction();
  initLightbox();
  initNav();
  window.addEventListener("resize", onResize);
}

init();

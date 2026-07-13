const VOID_WIDTH = 520;
const VOID_HEIGHT = 600;
const GUTTER = 40;
const VOID_MARGIN = 32;
const OUTER_PADDING = 120;

// Clockwise from top — tuned to match v2 moodboard layout
const FEEL_GALLERY_IMAGES = [
  "street_main.jpg",
  "harrypotter_main.jpg",
  "door_main.jpg",
  "suitguy_main.jpg",
  "treeshadows_main.jpg",
  "venice_main.jpg",
  "guitar_main.jpg",
  "cousin_main.jpg",
  "cafecolor_main.jpg",
  "animecafe_main.jpg",
  "portrait_main.jpg",
  "cafegirl_main.jpg",
  "jijo_main.jpg",
  "parkpath_main.jpg",
  "sittingguy_main.jpg",
  "sketch_main.jpg",
  "berlincafe_main.jpg",
  "tower_main.jpg",
  "cafelight_main.jpg",
  "room_main.jpg",
  "citylights_main.jpg",
  "carlights_main.jpg",
  "cult_main.jpg",
  "mountains_main.jpg",
  "bus_main.jpg",
  "profile_main.jpg",
  "space_main.jpg",
  "kingsgarden_main.jpg",
  "landscape_main.jpg",
  "tea_main.jpg",
];

const FEEL_IMAGE_DIMENSIONS = {
  "street_main.jpg": { w: 600, h: 345 },
  "harrypotter_main.jpg": { w: 450, h: 600 },
  "door_main.jpg": { w: 1894, h: 2526 },
  "suitguy_main.jpg": { w: 450, h: 600 },
  "treeshadows_main.jpg": { w: 600, h: 450 },
  "venice_main.jpg": { w: 450, h: 600 },
  "guitar_main.jpg": { w: 480, h: 600 },
  "cousin_main.jpg": { w: 1738, h: 2397 },
  "cafecolor_main.jpg": { w: 450, h: 600 },
  "animecafe_main.jpg": { w: 600, h: 450 },
  "portrait_main.jpg": { w: 480, h: 600 },
  "cafegirl_main.jpg": { w: 450, h: 600 },
  "jijo_main.jpg": { w: 4080, h: 3072 },
  "parkpath_main.jpg": { w: 2560, h: 1920 },
  "sittingguy_main.jpg": { w: 600, h: 542 },
  "sketch_main.jpg": { w: 600, h: 600 },
  "berlincafe_main.jpg": { w: 450, h: 600 },
  "tower_main.jpg": { w: 600, h: 600 },
  "cafelight_main.jpg": { w: 450, h: 600 },
  "room_main.jpg": { w: 450, h: 600 },
  "citylights_main.jpg": { w: 450, h: 600 },
  "carlights_main.jpg": { w: 450, h: 600 },
  "cult_main.jpg": { w: 450, h: 600 },
  "mountains_main.jpg": { w: 600, h: 264 },
  "bus_main.jpg": { w: 600, h: 450 },
  "profile_main.jpg": { w: 400, h: 600 },
  "space_main.jpg": { w: 450, h: 600 },
  "kingsgarden_main.jpg": { w: 600, h: 450 },
  "landscape_main.jpg": { w: 600, h: 450 },
  "tea_main.jpg": { w: 550, h: 600 },
};

const FEEL_IMAGE_DIR = "images/gallery_feel/";

const FEEL_GALLERY_FILES = new Set([
  "animecafe_1.jpg",
  "animecafe_2.jpg",
  "animecafe_3.jpg",
  "animecafe_4.jpg",
  "animecafe_main.jpg",
  "berlincafe_1.jpg",
  "berlincafe_2.jpg",
  "berlincafe_3.jpg",
  "berlincafe_4.jpg",
  "berlincafe_5.jpg",
  "berlincafe_main.jpg",
  "bus_1.jpg",
  "bus_2.jpg",
  "bus_3.jpg",
  "bus_4.jpg",
  "bus_main.jpg",
  "cafecolor_1.jpg",
  "cafecolor_2.jpg",
  "cafecolor_3.jpg",
  "cafecolor_4.jpg",
  "cafecolor_5.jpg",
  "cafecolor_6.jpg",
  "cafecolor_7.jpg",
  "cafecolor_8.jpg",
  "cafecolor_main.jpg",
  "cafegirl_1.jpg",
  "cafegirl_main.jpg",
  "cafelight_1.jpg",
  "cafelight_main.jpg",
  "carlights_1.jpg",
  "carlights_main.jpg",
  "citylights_1.jpg",
  "citylights_2.jpg",
  "citylights_main.jpg",
  "cousin_main.jpg",
  "cult_1.jpg",
  "cult_2.jpg",
  "cult_main.jpg",
  "door_main.jpg",
  "guitar_1.jpg",
  "guitar_main.jpg",
  "harrypotter_1.jpg",
  "harrypotter_main.jpg",
  "jijo_main.jpg",
  "kingsgarden_1.jpg",
  "kingsgarden_2.jpg",
  "kingsgarden_3.jpg",
  "kingsgarden_4.jpg",
  "kingsgarden_main.jpg",
  "landscape_1.jpg",
  "landscape_main.jpg",
  "mountains_1.jpg",
  "mountains_main.jpg",
  "parkpath_main.jpg",
  "portrait_1.jpg",
  "portrait_main.jpg",
  "profile_1.jpg",
  "profile_main.jpg",
  "room_1.jpg",
  "room_main.jpg",
  "sittingguy_1.jpg",
  "sittingguy_main.jpg",
  "sketch_1.jpg",
  "sketch_main.jpg",
  "space_1.jpg",
  "space_main.jpg",
  "street_1.jpg",
  "street_main.jpg",
  "suitguy_1.jpg",
  "suitguy_main.jpg",
  "tea_1.jpg",
  "tea_main.jpg",
  "tower_1.jpg",
  "tower_main.jpg",
  "treeshadows_1.jpg",
  "treeshadows_main.jpg",
  "venice_1.jpg",
  "venice_2.jpg",
  "venice_3.jpg",
  "venice_4.jpg",
  "venice_main.jpg",
]);

const SEE_IMAGE_DIR = "images/gallery_see/";

const SEE_GALLERY_IMAGES = [
  "onion_main.jpg",
  "feet_main.png",
  "heart_main.png",
  "organs_main.png",
  "grasshopper_main.png",
  "brachial_main.png",
  "kidney_main.png",
  "cell_main.png",
  "pelvis_main.png",
  "hands_main.JPG",
  "bust_main.JPG",
  "pull_main.jpg",
  "thyroid_main.jpg",
  "gage_main.jpg",
  "jhuclass_main.jpg",
  "jhudesk_main.jpg",
];

const SEE_IMAGE_DIMENSIONS = {
  "onion_main.jpg": { w: 2002, h: 2802 },
  "feet_main.png": { w: 1280, h: 752 },
  "heart_main.png": { w: 1280, h: 782 },
  "organs_main.png": { w: 1280, h: 813 },
  "grasshopper_main.png": { w: 1034, h: 1600 },
  "brachial_main.png": { w: 1280, h: 819 },
  "kidney_main.png": { w: 1280, h: 828 },
  "cell_main.png": { w: 1267, h: 1600 },
  "pelvis_main.png": { w: 396, h: 600 },
  "hands_main.JPG": { w: 1281, h: 1710 },
  "bust_main.JPG": { w: 1236, h: 1598 },
  "pull_main.jpg": { w: 695, h: 887 },
  "thyroid_main.jpg": { w: 1000, h: 925 },
  "gage_main.jpg": { w: 986, h: 655 },
  "jhuclass_main.jpg": { w: 960, h: 640 },
  "jhudesk_main.jpg": { w: 960, h: 640 },
};

const SEE_GALLERY_FILES = new Set([
  "brachial_main.png",
  "bust_main.JPG",
  "cell_main.png",
  "feet_main.png",
  "gage_main.jpg",
  "grasshopper_main.png",
  "hands_main.JPG",
  "heart_main.png",
  "jhuclass_main.jpg",
  "jhudesk_main.jpg",
  "kidney_main.png",
  "onion_main.jpg",
  "organs_main.png",
  "pelvis_1.png",
  "pelvis_main.png",
  "pull_main.jpg",
  "thyroid_main.jpg",
]);

const THINK_IMAGE_DIR = "images/gallery_think/";

const THINK_GALLERY_IMAGES = [
  "table_main.jpg",
  "wall_main.jpg",
  "layers_main.jpg",
  "app_main.jpg",
  "hgraph_main.jpg",
  "medications_main.jpg",
  "uxwall_main.jpg",
  "fluxnotes_main.jpg",
  "thyroidsketch_main.JPG",
  "journey_main.jpg",
  "healthcaresystem_main.jpg",
  "shr_main.jpg",
  "shrsketch_main.jpg",
  "sdoh_main.png",
  "northstar_main.jpg",
  "week3_main.jpg",
];

const THINK_IMAGE_DIMENSIONS = {
  "table_main.jpg": { w: 1920, h: 2560 },
  "wall_main.jpg": { w: 600, h: 450 },
  "layers_main.jpg": { w: 2377, h: 2605 },
  "app_main.jpg": { w: 1320, h: 1116 },
  "hgraph_main.jpg": { w: 2880, h: 2160 },
  "medications_main.jpg": { w: 984, h: 762 },
  "uxwall_main.jpg": { w: 2880, h: 2160 },
  "fluxnotes_main.jpg": { w: 978, h: 783 },
  "thyroidsketch_main.JPG": { w: 4272, h: 2848 },
  "journey_main.jpg": { w: 2000, h: 948 },
  "healthcaresystem_main.jpg": { w: 1056, h: 1548 },
  "shr_main.jpg": { w: 2000, h: 1538 },
  "shrsketch_main.jpg": { w: 1304, h: 1008 },
  "sdoh_main.png": { w: 2526, h: 1447 },
  "northstar_main.jpg": { w: 2560, h: 1920 },
  "week3_main.jpg": { w: 1920, h: 2560 },
};

const THINK_GALLERY_FILES = new Set([
  "app_main.jpg",
  "fluxnotes_main.jpg",
  "healthcaresystem_main.jpg",
  "hgraph_main.jpg",
  "journey_main.jpg",
  "layers_main.jpg",
  "medications_main.jpg",
  "northstar_main.jpg",
  "sdoh_main.png",
  "shr_main.jpg",
  "shrsketch_main.jpg",
  "table_main.jpg",
  "thyroidsketch_main.JPG",
  "uxwall_main.jpg",
  "wall_1.jpg",
  "wall_main.jpg",
  "week3_main.jpg",
]);

const SECTION_GALLERIES = {
  feel: {
    dir: FEEL_IMAGE_DIR,
    images: FEEL_GALLERY_IMAGES,
    dimensions: FEEL_IMAGE_DIMENSIONS,
    allFiles: FEEL_GALLERY_FILES,
  },
  see: {
    dir: SEE_IMAGE_DIR,
    images: SEE_GALLERY_IMAGES,
    dimensions: SEE_IMAGE_DIMENSIONS,
    allFiles: SEE_GALLERY_FILES,
  },
  think: {
    dir: THINK_IMAGE_DIR,
    images: THINK_GALLERY_IMAGES,
    dimensions: THINK_IMAGE_DIMENSIONS,
    allFiles: THINK_GALLERY_FILES,
  },
};

let activeGallerySection = "feel";
let IMAGE_DIR = SECTION_GALLERIES.feel.dir;
let GALLERY_IMAGES = SECTION_GALLERIES.feel.images;
let IMAGE_DIMENSIONS = SECTION_GALLERIES.feel.dimensions;
let ALL_GALLERY_FILES = SECTION_GALLERIES.feel.allFiles;

// Hand-tuned moodboard offsets — varied distance from center, clockwise from top
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

const LAYOUT_SPREAD = 0.86;

function getStaggeredLayoutOffsets(count) {
  const scaled = IMAGE_LAYOUT_OFFSETS.map((offset) => ({
    x: offset.x * LAYOUT_SPREAD,
    y: offset.y * LAYOUT_SPREAD,
    angle: Math.atan2(offset.y, offset.x),
  }));

  if (count >= scaled.length) {
    return scaled.slice(0, count).map(({ x, y }) => ({ x, y }));
  }

  const sorted = [...scaled].sort((a, b) => a.angle - b.angle);
  return Array.from({ length: count }, (_, i) => {
    const idx = Math.min(
      sorted.length - 1,
      Math.floor((i + 0.5) * (sorted.length / count))
    );
    return { x: sorted[idx].x, y: sorted[idx].y };
  });
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

    for (const placement of placements) {
      if (!overlapsVoid(placement, voidRect)) continue;
      pushAwayFromVoid(placement, voidRect, 10);
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

function layoutStaggeredMoodboard(imageSizes) {
  const tempCenter = 1800;
  const voidRect = {
    left: tempCenter - VOID_WIDTH / 2,
    top: tempCenter - VOID_HEIGHT / 2,
    right: tempCenter + VOID_WIDTH / 2,
    bottom: tempCenter + VOID_HEIGHT / 2,
  };

  const offsets = getStaggeredLayoutOffsets(imageSizes.length);
  const placements = [];
  const placedRects = [];

  imageSizes.forEach((size, i) => {
    const rect = placeAtTarget(
      size.filename,
      size.w,
      size.h,
      offsets[i],
      voidRect,
      placedRects,
      tempCenter
    );
    placements.push(rect);
    placedRects.push(rect);
  });

  separateAllPlacements(placements, voidRect);
  return finalizeBoard(placements, voidRect);
}

const LINKEDIN_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.27h4.56V23.5H.22V8.27zm7.26 0h4.37v2.08h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99v8.54h-4.56v-7.57c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.89 1.96-2.89 3.99v7.7H7.48V8.27z"/></svg>';

const INSTAGRAM_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.84.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.26.07 1.64.07 4.84s-.01 3.58-.07 4.84c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.26.06-1.64.07-4.84.07s-3.58-.01-4.84-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23-.06-1.26-.07-1.64-.07-4.84s.01-3.58.07-4.84c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.26-.06 1.64-.07 4.84-.07zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.64c-.78.3-1.44.7-2.1 1.36-.66.66-1.06 1.32-1.36 2.1-.3.76-.51 1.64-.57 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.15.57 2.91.3.78.7 1.44 1.36 2.1.66.66 1.32 1.06 2.1 1.36.76.3 1.64.51 2.91.57 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.27 2.91-.57.78-.3 1.44-.7 2.1-1.36.66-.66 1.06-1.32 1.36-2.1.3-.76.51-1.64.57-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.15-.57-2.91-.3-.78-.7-1.44-1.36-2.1-.66-.66-1.32-1.06-2.1-1.36-.76-.3-1.64-.51-2.91-.57C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a3.99 3.99 0 110-7.98 3.99 3.99 0 010 7.98zm7.85-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>';

const EMAIL_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.259 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/></svg>';

const SOCIAL_ROW = `
    <div class="social-row">
      <a class="social-link social-link--linkedin" href="https://www.linkedin.com/in/edchoi1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${LINKEDIN_SVG}</a>
      <a class="social-link" href="https://www.instagram.com/edwinchoi.art" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${INSTAGRAM_SVG}</a>
      <a class="social-link" href="mailto:edwinchoi.design@gmail.com" aria-label="Email Edwin at edwinchoi.design@gmail.com" title="edwinchoi.design@gmail.com">${EMAIL_SVG}</a>
    </div>
  `;

const CONTENT = {
  feel: `
    <p>I'm Edwin, and this is a space to share my attempts at visually exploring an inner feeling that words alone can't quite explain: soft, everyday moments of simply being, expressed through atmosphere, light, and marks that seem to float from the page. Quiet presence. This space is also a record of an evolving art practice. An exploration of how my background shapes the way I see, think, and make. If you'd like to share ideas, trade art, or simply connect, I'd love to hear from you.</p>
    ${SOCIAL_ROW}
  `,
  see: `
    <p>A year of art training grounded in observational painting and drawing, followed by graduate study in <a href="https://medicalart.johnshopkins.edu/" target="_blank" rel="noopener noreferrer">medical illustration</a>, taught me to see drawing as a process of careful observation. Every decision was informed by direct observation, anatomical accuracy, medical imaging, and collaboration with doctors and researchers. I still carry that way of seeing with me, especially in my linework, even when my drawings become loose or abstract.</p>
    ${SOCIAL_ROW}
  `,
  think: `
    <p>My work in <a href="https://edwinchoi.design/" target="_blank" rel="noopener noreferrer">product design</a>, and my studies in <a href="https://publichealth.jhu.edu/academics/drph/curriculum/concentration-in-health-policy-and-management/public-health-informatics-track" target="_blank" rel="noopener noreferrer">health systems</a>, has taught me a way of solving problems that's anchored in iteration and systems. Because of that, I approach my art practice itself as a system that can be designed. That mindset shapes not what I draw, but the processes I use to help the work and the practice evolve.</p>
    ${SOCIAL_ROW}
  `,
};

const PROCESS_CAPTIONS = {
  "cafecolor_1.jpg":
    "I wanted to explore what things would look like if I leaned into what I feel more confident in: linework that has different weights and textures to denote shadow, light, heaviness, and lightness.",
  "cafecolor_2.jpg":
    "On top of the linework I tried rubbing in masking fluid to keep the highlight areas bright throughout.",
  "cafecolor_3.jpg":
    'I like having inspiration on the side because of some subconscious belief that I might absorb the visual style through some psychic voodoo. These are from galleries I visited in Leipzig Germany over the weekend, from the complex of studios called "Leipziger Baumwollspinnerei". Super cool place.',
  "cafecolor_4.jpg":
    "Great. I finished doing a light watercolor wash. I'm still not used to watercolor so I only used 2 colors to keep things simple.",
  "cafecolor_5.jpg": "Desk is getting pretty messy here.",
  "cafecolor_6.jpg":
    "Time to scratch out the masking fluid. Crap. Some of the masking fluid is combined into the paper. I guess I pressed too hard while putting the fluid on.",
  "cafecolor_7.jpg":
    "Next I started sandpapering pastel onto the page so that I can brush it in as a color layer on top of the watercolor. I've been really enjoying this technique.",
  "cafecolor_main.jpg":
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

let activeSection = null;

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
let didPinchThisGesture = false;
let pinchStartDist = 0;
let lastPinchDist = 0;
let pinchStartScale = 1;
let pinchCenterX = 0;
let pinchCenterY = 0;

let exploreHintsDismissed = false;
let exploreHintShowScale = null;

const DRAG_THRESHOLD = 5;
const WHEEL_ZOOM_SENSITIVITY = 0.0035;
const PINCH_ZOOM_GAIN = 1.08;
const LIGHTBOX_FADE_MS = 450;
const GALLERY_FADE_MS = 380;
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

function boardImageSrc(filename) {
  return filename;
}

function applyGallerySection(section) {
  const gallery = SECTION_GALLERIES[section];
  if (!gallery) return false;

  activeGallerySection = section;
  IMAGE_DIR = gallery.dir;
  GALLERY_IMAGES = gallery.images;
  IMAGE_DIMENSIONS = gallery.dimensions;
  ALL_GALLERY_FILES = gallery.allFiles;
  return true;
}

async function switchGalleryForSection(section) {
  if (activeGallerySection === section) return;

  const useMotion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const shouldFade = useMotion && imageLayer.childElementCount > 0;

  if (shouldFade) {
    imageLayer.classList.add("gallery-faded");
    await new Promise((resolve) => setTimeout(resolve, GALLERY_FADE_MS));
  }

  if (!applyGallerySection(section)) return;

  const boardSizeBefore = BOARD_SIZE;
  layoutImages();
  preserveViewAfterLayout(boardSizeBefore);

  if (!useMotion) return;

  imageLayer.classList.add("gallery-faded");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      imageLayer.classList.remove("gallery-faded");
    });
  });
}

function galleryImageSrc(filename) {
  return `${IMAGE_DIR}${filename}`;
}

function getGalleryImageSizes() {
  return GALLERY_IMAGES.map((filename) => {
    const dims = IMAGE_DIMENSIONS[filename];
    const naturalW = dims?.w ?? 220;
    const naturalH = dims?.h ?? 280;
    const { w, h } = scaleToDisplaySize(naturalW, naturalH);
    return { filename, w, h, naturalW, naturalH };
  });
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

function layoutImages() {
  imageLayer.innerHTML = "";

  const imageSizes = getGalleryImageSizes();
  const { boardSize, placements, bounds } = layoutStaggeredMoodboard(imageSizes);
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
    img.src = `${IMAGE_DIR}${boardImageSrc(placement.filename)}`;
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

  const isMobile = vw <= 768;
  const textWidthFraction = isMobile ? 0.94 : 0.88;
  const textHeightFraction = isMobile ? 0.9 : 0.92;
  const textFitScale = Math.min(
    (vw * textWidthFraction) / VOID_WIDTH,
    (vh * textHeightFraction) / VOID_HEIGHT
  );
  const defaultViewBoost = isMobile ? 1.02 : 1.08;
  const boardVisibleFraction = 0.3;
  defaultScale = Math.min(textFitScale * defaultViewBoost, fitScale / boardVisibleFraction);

  maxScale = defaultScale * (isMobile ? 1.5 : 1.35);
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

function preserveViewAfterLayout(previousBoardSize) {
  const prevScale = scale;
  const prevPanX = panX;
  const prevPanY = panY;
  const centerShift = (BOARD_SIZE - previousBoardSize) / 2;

  panX = prevPanX - centerShift * prevScale;
  panY = prevPanY - centerShift * prevScale;

  updateZoomLimits();
  scale = Math.min(maxScale, Math.max(minScale, prevScale));
  clampPan();
  applyTransform();
}

function getProcessSlides(mainFilename) {
  const match = mainFilename.match(/^(.+)_main(\.[^.]+)$/i);
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
  const match = mainFilename.match(/^(.+)_main\./i);
  if (!match || match[1] !== "cafecolor") return null;
  return PROCESS_CAPTIONS[imageFilename] ?? null;
}

function syncLightboxCaptionWidths(root = document) {
  root.querySelectorAll(".lightbox__media").forEach((media) => {
    const img = media.querySelector("img");
    const caption = media.querySelector(".lightbox__caption");
    if (!img) return;

    const apply = () => {
      const width = Math.round(img.getBoundingClientRect().width);
      if (width <= 0) return;
      media.style.width = `${width}px`;
      if (caption) {
        caption.style.width = `${width}px`;
      }
    };

    if (img.complete) {
      apply();
    } else {
      img.addEventListener("load", apply, { once: true });
    }
  });
}

function buildLightboxPiece(filename, caption) {
  const figure = document.createElement("figure");
  figure.className = "lightbox__piece";

  const media = document.createElement("div");
  media.className = "lightbox__media";

  const img = document.createElement("img");
  img.src = galleryImageSrc(filename);
  img.alt = caption || "";
  media.appendChild(img);

  if (caption) {
    const figcaption = document.createElement("figcaption");
    figcaption.className = "lightbox__caption";
    figcaption.textContent = caption;
    media.appendChild(figcaption);
  }

  figure.appendChild(media);
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

  if (slides && slides.length > 1) {
    lightbox.classList.add("lightbox--series");

    slides.forEach((filename) => {
      lightboxContent.appendChild(
        buildLightboxPiece(filename, getProcessCaption(mainFilename, filename))
      );
    });
  } else if (slides && slides.length === 1) {
    lightbox.classList.remove("lightbox--series");
    lightboxContent.appendChild(
      buildLightboxPiece(slides[0], getProcessCaption(mainFilename, slides[0]))
    );
  } else {
    lightbox.classList.remove("lightbox--series");
    lightboxContent.appendChild(buildLightboxPiece(mainFilename));
  }

  lightbox.setAttribute("aria-hidden", "false");
  setLightboxOpen(true);
  lightbox.scrollTop = 0;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      syncLightboxCaptionWidths(lightbox);
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

function measureFeelParagraphHeight() {
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
    fontSize: "1.32rem",
    fontWeight: "300",
    fontStyle: "italic",
    lineHeight: "1.75",
    letterSpacing: "0.01em",
  });
  const feelParagraph = CONTENT.feel.match(/<p>[\s\S]*?<\/p>/)?.[0] ?? CONTENT.feel;
  probe.innerHTML = feelParagraph;
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
    nav.offsetHeight + NAV_GAP_PX + measureFeelParagraphHeight() / 2;
  textStack.style.transform = `translateY(-${offset}px)`;
}

async function setActiveSection(section) {
  if (section === activeSection) return;

  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === section);
  });

  activeSection = section;
  contentArea.innerHTML = CONTENT[section] || CONTENT.feel;
  contentArea.classList.remove("content-hidden");

  await switchGalleryForSection(section);
}

const EXPLORE_HINT_FADE_MS = 900;
let exploreHintFadeTimer = null;
let exploreHintFadeAnimation = null;
let exploreGlyphFadeAnimation = null;

function finalizeExploreHintDismiss() {
  const root = document.documentElement;
  root.classList.remove("explore-hints-hiding");
  root.classList.add("explore-hints-dismissed");

  const hintEl = document.getElementById("explore-hint");
  const glyphEl = document.getElementById("explore-glyph");
  exploreHintFadeAnimation?.cancel();
  exploreGlyphFadeAnimation?.cancel();
  exploreHintFadeAnimation = null;
  exploreGlyphFadeAnimation = null;

  if (hintEl) {
    hintEl.style.animation = "";
    hintEl.style.opacity = "";
    hintEl.style.transition = "";
    hintEl.style.visibility = "";
  }
  if (glyphEl) {
    glyphEl.style.opacity = "";
    glyphEl.style.transition = "";
    glyphEl.style.visibility = "";
  }
}

function fadeOutExploreHint(el, startOpacity) {
  if (!el) return null;

  el.style.animation = "none";
  el.style.visibility = "visible";
  el.style.opacity = startOpacity;

  return el.animate(
    [{ opacity: startOpacity }, { opacity: 0 }],
    {
      duration: EXPLORE_HINT_FADE_MS,
      easing: "ease",
      fill: "forwards",
    }
  );
}

function dismissExploreHints() {
  if (exploreHintsDismissed) return;
  exploreHintsDismissed = true;
  exploreHintShowScale = null;

  const root = document.documentElement;
  const hintEl = document.getElementById("explore-hint");
  const glyphEl = document.getElementById("explore-glyph");
  const hintOpacity = hintEl ? getComputedStyle(hintEl).opacity : null;
  const glyphOpacity = glyphEl ? getComputedStyle(glyphEl).opacity || "1" : null;

  root.classList.remove("explore-hints-visible");
  root.classList.add("explore-hints-hiding");

  if (hintEl && hintOpacity !== null) {
    exploreHintFadeAnimation = fadeOutExploreHint(hintEl, hintOpacity);
  }

  if (glyphEl) {
    exploreGlyphFadeAnimation = fadeOutExploreHint(glyphEl, glyphOpacity);
  }

  if (exploreHintFadeTimer) window.clearTimeout(exploreHintFadeTimer);
  exploreHintFadeTimer = window.setTimeout(() => {
    exploreHintFadeTimer = null;
    finalizeExploreHintDismiss();
  }, EXPLORE_HINT_FADE_MS + 50);
}

function initExploreHints() {
  const hintEl = document.getElementById("explore-hint");
  if (hintEl && window.matchMedia("(pointer: coarse)").matches) {
    hintEl.textContent = "zoom in and out · drag to explore · tap pieces to view";
  }

  exploreHintShowScale = scale;
  document.documentElement.classList.add("explore-hints-visible");
}

function noteExploreZoomInteraction() {
  if (exploreHintsDismissed || exploreHintShowScale === null) return;
  if (Math.abs(scale - exploreHintShowScale) > 0.04) {
    dismissExploreHints();
  }
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
    if (
      !pointerDownTile ||
      didDrag ||
      didPinchThisGesture ||
      isPinching ||
      !imageLayer.classList.contains("interactive")
    ) {
      return;
    }

    const img = pointerDownTile.querySelector("img");
    if (!img?.dataset.filename) return;

    openLightbox(img.dataset.filename);
    dismissExploreHints();
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
      dismissExploreHints();
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
      noteExploreZoomInteraction();
    },
    { passive: false }
  );

  viewport.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 2) {
        dismissExploreHints();
        didPinchThisGesture = true;
        isDragging = false;
        isPinching = true;
        pointerDownTile = null;
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

  function endTouch(e) {
    if (e.touches.length > 0) {
      if (didPinchThisGesture || isPinching) {
        pointerDownTile = null;
        isDragging = false;
      }
      return;
    }

    isPinching = false;
    lastPinchDist = 0;
    onPointerUp();
    didPinchThisGesture = false;
  }

  viewport.addEventListener("touchend", endTouch);
  viewport.addEventListener("touchcancel", endTouch);
}

function initPanelTouches() {
  const centerPanel = document.getElementById("center-panel");
  if (!centerPanel) return;

  let panelTouch = null;

  centerPanel.addEventListener(
    "touchstart",
    (e) => {
      const interactive = e.target.closest("a, button");
      if (!interactive || e.touches.length !== 1) return;
      panelTouch = {
        el: interactive,
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      e.stopPropagation();
    },
    { capture: true, passive: true }
  );

  centerPanel.addEventListener(
    "touchend",
    (e) => {
      if (!panelTouch) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - panelTouch.x;
      const dy = touch.clientY - panelTouch.y;
      const el = panelTouch.el;
      panelTouch = null;
      e.stopPropagation();
      if (Math.hypot(dx, dy) >= DRAG_THRESHOLD) return;
      el.click();
    },
    { capture: true, passive: true }
  );

  centerPanel.addEventListener(
    "touchcancel",
    () => {
      panelTouch = null;
    },
    { passive: true }
  );
}

function initNav() {
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      void setActiveSection(btn.dataset.section);
    });
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

  const lightbox = document.getElementById("lightbox");
  if (lightbox?.classList.contains("is-open")) {
    syncLightboxCaptionWidths(lightbox);
  }
}

async function init() {
  applyGallerySection("feel");
  await layoutImages();
  setDefaultView();
  initExploreHints();
  await setActiveSection("feel");
  if (document.fonts) {
    await document.fonts.ready;
  }
  alignTextStack();
  initInteraction();
  initPanelTouches();
  initLightbox();
  initNav();
  window.addEventListener("resize", onResize);
  document.documentElement.classList.add("app-ready");
}

init();

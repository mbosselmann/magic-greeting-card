import { getRandom } from "../helper.js";

export function createStars(ctx, amount, minDistance) {
  let stars = [];
  for (let i = 0; i < amount; i++) {
    const newStar = checkCoordinates(stars, ctx, minDistance);
    if (newStar) stars.push(newStar);
  }
  return stars;
}

export function checkCoordinates(stars, ctx, minDistance) {
  let x, y, size, newStar, tooClose;
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  let attempts = 0;

  do {
    x = getRandom(0, width);
    y = getRandom(0, height);
    size = getRandom(2, 6);
    newStar = createStar(x, y, size);
    const lastStars = stars.slice(-100);
    tooClose = lastStars.some(
      (existingStar) => distanceBetween(newStar, existingStar) < minDistance
    );
    attempts++;
  } while (tooClose && attempts < 10);

  return tooClose ? null : newStar;
}

function distanceBetween(star1, star2) {
  const dx = star1.x - star2.x;
  const dy = star1.y - star2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function createStar(x, y, size) {
  const types = ["dot", "cross", "twinkle"];

  const type = types[Math.floor(Math.random() * types.length)];

  return {
    x: x,
    y: y,
    type: type,
    size: size,
    maxSize: size * 1.5,
    minSize: size * 0.5,
    alpha: 0,
    maxAlpha: 1,
    minAlpha: 0.4,
    growing: true,
    animationSpeed: 0.08,
    rotation: 0,
    rotationSpeed: 2,
    animationEnded: false,
  };
}

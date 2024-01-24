export function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

export function getRgbFromColorCode(colorCode) {
  const tempDiv = document.createElement("div");
  tempDiv.style.color = colorCode;
  document.body.appendChild(tempDiv);

  const rgbColor = getComputedStyle(tempDiv).color;

  document.body.removeChild(tempDiv);

  return rgbColor;
}

export function calculateAmountOfStars(amount) {
  if (amount > 0 && amount < 200) {
    return amount;
  }

  if (amount <= 0) {
    return 0;
  }

  if (amount >= 200) {
    return 200;
  }
}

export function setHeaderOpacity() {
  const headline = document.querySelector(".headline");
  const header = document.querySelector(".header");

  if (headline && header) {
    const backgroundColor = getRgbFromColorCode(
      getComputedStyle(header).getPropertyValue("background-color")
    );

    header.style.backgroundColor = `${backgroundColor.slice(0, -1)}, 0.7)`;
  }
}

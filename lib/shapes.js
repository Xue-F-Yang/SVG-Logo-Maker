// Triangle
export class Triangle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  render(color) {
    return `<path d="M ${this.x} ${this.y - this.size / Math.sqrt(3)} L ${this.x - this.size / 2} ${this.y + this.size / (2 * Math.sqrt(3))} L ${this.x + this.size / 2} ${this.y + this.size / (2 * Math.sqrt(3))} Z" fill="${color}" />`;
  }
}

// Circle
export class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  render(color) {
    return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${color}" />`;
  }
}

// Square
export class Square {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  render(color) {
    return `<rect x="${this.x - this.size / 2}" y="${this.y - this.size / 2}" width="${this.size}" height="${this.size}" fill="${color}" />`;
  }
}

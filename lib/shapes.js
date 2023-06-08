export class color {
  constructor(textColor, backgroundColor) {
    this.textColor = textColor;
    this.backgroundColor = backgroundColor;
  }
}

//extends color?
export class circle {
  constructor(cx, cy, r) {
    this.cx = cx;
    this.cy = cy;
    this.r = r;
  }
  render() {
    const fill = color ? 'fill="${color}"' : "";
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" ${fill} />`;
  }
}

export class triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  render() {}
}

export class square {
  constructor(side) {
    this.side = side;
  }
  render() {}
}

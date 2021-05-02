export class InvalidInputError extends Error {}

const BEARINGS = ['north', 'east', 'south', 'west'];
const INSTRUCTIONS = {
  'L': 'turnLeft',
  'R': 'turnRight',
  'A': 'advance'
}

export class Robot {
  static instructions(codes) {
    return codes.split('').map(code => INSTRUCTIONS[code]);
  }

  orient(bearing) {
    if (!BEARINGS.includes(bearing)) {
      throw new InvalidInputError();
    }
    this._bearingIndex = BEARINGS.indexOf(bearing);
  }

  get bearing() {
    return BEARINGS[this._bearingIndex];
  }

  get coordinates() {
    return [this._x, this._y];
  }

  turnRight() {
    this._bearingIndex += 1
    this._bearingIndex %= 4
  }

  turnLeft() {
    this._bearingIndex += 3
    this._bearingIndex %= 4
  }

  at(...coordinates) {
    [ this._x, this._y ] = coordinates;
  }

  advance() { this[this.bearing]() }

  north() { this._y += 1 }

  south() { this._y -= 1 }

  east()  { this._x += 1 }

  west()  { this._x -= 1 }

  place({ x, y, direction }) {
    this.at(x, y);
    this.orient(direction);
  }

  evaluate(codes) {
    this.constructor.instructions(codes).forEach(instruction => {
      this[instruction]();
    })
  }
}
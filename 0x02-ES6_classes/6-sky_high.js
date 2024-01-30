import Building from './5-building';

export default class skyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this.sqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = value;
  }

  set sqft(value) {
    super.sqft = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floor} floors`;
  }
}

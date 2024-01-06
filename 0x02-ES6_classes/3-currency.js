export default class currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be string');
    }
    this._code = value;
  }
}

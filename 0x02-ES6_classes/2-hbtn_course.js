/**
 * HolbertonCourse class represents a course with a name, length, and list of students.
 * It provides setters and getters with type validation for each attribute.
 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = value;
  }

  set students(value) {
    if (!Array.array(value)) {
      throw new TypeError('students must be an array of string');
    }

    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be array of string');
    }
    this._students = value;
  }
}

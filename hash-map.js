'use strict';

class KeyValueList{
  constructor() {
    this.data = [];
  }

  put(key, value) {
    let oo = {key: key, value: value};
    let index = this.hashCode(key);
    this.data[index] = oo;
    // this.data.push(oo);

  }

  // return the value associated with the given key.
  // O(N)
  get(key, value) {
    for (let i = 0; i < this.data.length; i++) {
      let el = ths.data[i];
      if (el.key === key) {
        return el.value;
      }
    }
    return null;
  }

  size() {
    return this.data.length;
  }
  toString() {
    let middle = this.data.map(el => {
      return `{${el.key}, ${el.value}}`;
    });
    return '[' + middle + ']';
  }
}

module.exports = HashMap;
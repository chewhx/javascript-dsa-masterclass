// ==== HASH TABLE ====

class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  // ===== Hash Method =====
  // own hash method using charCodeAt() for strings
  // this is the improved version of the hash function with prime number introduced to reduce collisions
  hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      // map "a" to 1, "b" to 2, "c" to 3
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // ==== SET ====

  set(key, value) {
    const index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // ==== GET =====
  get(key) {
    const index = this.hash(key);
    if (this.keyMap[index]) {
      // loop through the array to find the nested array with the correct key
      for (let el of this.keyMap[index]) {
        if (el[0] === key) return el;
      }
    }
    return undefined;
  }

  // ==== VALUES ====
  // return all the unique values in an array

  values() {
    let returnValues = [];
    for (const key of this.keyMap) {
      for (const el of key) {
        const value = el[1];
        if (!returnValues.includes(value)) {
          returnValues.push(value);
        }
      }
    }
    return returnValues;
  }

  // ==== KEYS ====
  // return all the unique keys in an array

  keys() {
    let returnKeys = [];
    for (const key of this.keyMap) {
      for (const el of key) {
        const value = el[0];
        if (!returnKeys.includes(value)) {
          returnKeys.push(value);
        }
      }
    }
    return returnKeys;
  }
}

let ht = new HashTable();
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("green", "#DDA0DD");
ht.set("purple", "#DDA0DD");
console.log(ht.keys());
// console.log(ht.keyMap[0])
// console.log(ht.get("plum"));

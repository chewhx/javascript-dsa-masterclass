function capitalizedWords(array) {
  let results = [];
  function helper(...word) {
    let uppercase = [];
    for (let letter of word) {
      uppercase.push(letter.toUpperCase());
    }
    return uppercase.join("");
  }

  for (let word of array) {
    results.push(helper(word));
  }
  return results;
}

let words = ["i", "am", "learning", "recursion"];

console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

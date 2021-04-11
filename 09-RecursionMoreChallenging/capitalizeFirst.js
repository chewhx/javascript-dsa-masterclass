function capitalizeFirst(array) {
  let results = [];
  function helper([...string]) {
    const newString = string.map((el, idx) => {
      if (idx === 0) return el.toUpperCase();
      return el;
    });
    return newString.join("");
  }

  for (let each of array) {
    results.push(helper(each));
  }

  return results;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
// ['Car','Taco','Banana']

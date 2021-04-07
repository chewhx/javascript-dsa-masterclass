function nativeStringSearch(long, short) {
  let matchCount = 0;
  // loop over longer string
  for (let i = 0; i < long.length; i++) {
    for (let n = 0; n < short.length; n++) {
      console.log(`long ${long[i + n]} short ${short[n]}`);
      if (long[i + n] !== short[n]) break;
      if (n === short.length - 1) {
        matchCount++;
      }
    }
  }
  // loop over shorter string
  // if chars don't match, break out of inner loop
  // if characters do match, keep going
  // if completed inner loop, and found match, increment count of matches
  // return count
  return matchCount;
}

console.log(nativeStringSearch("lorie loled", "lol"));

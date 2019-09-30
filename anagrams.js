function anagrams(str) {
  const results = [];
  if (str.length === 1) {
    results.push(str);
  } else {
    for (let i = 0; i < str.length; i++) {
      const first = str[i];
      const remain = str.slice(0, i) + str.slice(i + 1);
      const permutations = anagrams(remain);
      permutations.forEach(p => {
        results.push(first + p);
      });
    }
  }
  return results;
}

console.log(anagrams('ab'));

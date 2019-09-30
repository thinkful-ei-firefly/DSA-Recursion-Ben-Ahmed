function countSheep(n) {
  if (n === 0) {
    return 'All sheep jumped over the fence';
  }
  return `${n}: Another sheep jumps over the fence\n` + countSheep(n - 1);
}

const num = 3;
console.log(countSheep(num));

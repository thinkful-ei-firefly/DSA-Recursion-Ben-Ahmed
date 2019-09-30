function maze(array, y = 0, x = 0) {
  if (array[y][x + 1] === 'e') return ['R'];
  if (array[y + 1][x] === 'e') return ['D'];
  if (x > 0 && array[y][x - 1] === 'e') return ['L'];
  if (y > 0 && array[y - 1][x] === 'e') return ['U'];

  if (array[y][x + 1] === ' ') return ['R', ...maze(array, y, x + 1)];
  if (array[y + 1][x] === ' ') return ['D', ...maze(array, y + 1, x)];
  if (array[y][x - 1] === ' ') return ['L', ...maze(array, y, x - 1)];
  if (array[y + 1][x] === ' ') return ['U', ...maze(array, y - 1, x)];
}

const smallMaze = [[' ', ' ', ' '], [' ', '*', ' '], [' ', ' ', 'e']];
const bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(maze(smallMaze));
console.log(maze(bigMaze));

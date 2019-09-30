function mazeAll(
  array,
  y = 0,
  x = 0,
  index = 0,
  direction = 'S',
  solution = []
) {
  if (x < 0 || y < 0) return;
  if (x >= array[0].length || y >= array.length) return;

  solution[index] = direction;
  index++;

  if (array[y][x] === 'e') {
    console.log(`Found path to exit: ${solution}`);
    return;
  }

  if (array[y][x] === ' ') {
    array[y][x] = 'x';
    mazeAll(array, y, x - 1, index, 'L', solution);
    mazeAll(array, y - 1, x, index, 'U', solution);
    mazeAll(array, y, x + 1, index, 'R', solution);
    mazeAll(array, y + 1, x, index, 'D', solution);
    array[y][x] = ' ';
  }

  index--;
}

const smallMaze = [[' ', ' ', ' '], [' ', '*', ' '], [' ', ' ', 'e']];
const bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(mazeAll(smallMaze));
console.log(mazeAll(bigMaze));

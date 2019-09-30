function mazeAll(
  array,
  y = 0,
  x = 0,
  direction = 'S',
  solution = [],
  results = []
) {
  if (x < 0 || y < 0) return;
  if (x >= array[0].length || y >= array.length) return;

  solution = solution.concat(direction);

  if (array[y][x] === 'e') {
    results.push(solution);
  }

  if (array[y][x] === ' ') {
    array[y][x] = 'x';
    mazeAll(array, y, x - 1, 'L', solution, results);
    // solution passed in ['S'], it tries x - 1, so it skips to next:
    mazeAll(array, y - 1, x, 'U', solution, results);
    // same as above
    mazeAll(array, y, x + 1, 'R', solution, results);
    // solution passed in ['S'], it tries x + 1, so it changes solution to ['S', 'R'] and continues
    mazeAll(array, y + 1, x, 'D', solution, results);
    // solution passed in as ['SRR']
    array[y][x] = ' ';
  }

  return results;
}

const smallMaze = [[' ', ' ', ' '], [' ', '*', ' '], [' ', ' ', 'e']];
const bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(`
Small maze results:
  ${mazeAll(smallMaze).join('\n  ')}

Big maze results:
  ${mazeAll(bigMaze).join('\n  ')}
`);

// alternate: use strings instead of arrays for solution
// be careful of arrays being passed as reference (would be same with objects)

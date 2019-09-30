function maze (array, y=0 , x=0) {


 if (array[y][x +1] === ' '){
     maze(array, y, x+1) 
     push.ans(r)
 } else if(array[y +1][x] === ' ') {
    maze(array, y +1, x) 
 }
}


let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
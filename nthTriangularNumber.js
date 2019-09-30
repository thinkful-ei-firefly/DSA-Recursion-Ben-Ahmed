function nthTriangularNumber (n){
    if (n === 0 || n === 1){
        return n
    }
    return n + nthTriangularNumber(n-1)
}

console.log( nthTriangularNumber (1));
console.log( nthTriangularNumber (2));
console.log( nthTriangularNumber (3));
console.log( nthTriangularNumber (4));
console.log( nthTriangularNumber (5));
console.log( nthTriangularNumber (6));
console.log( nthTriangularNumber (7));
console.log( nthTriangularNumber (8));
console.log( nthTriangularNumber (9));

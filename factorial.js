function factorial(n) {
  if (n < 2) {
    return n;
  }
  return n * factorial(n - 1);
}

const num = 5;
console.log(factorial(num));

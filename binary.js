function isBinary(n) {
  if (n <= 1) {
    return n.toString();
  }
  const firstBit = n & 1;
  const firstBitBinary = isBinary(firstBit);
  const rest = n >> 1;
  const restBinary = isBinary(rest);
  return firstBitBinary + restBinary;
}

const num = 25;

console.log(`Testing Binary with num = ${num}\n`);
console.log(`Recursive Binary: \n${isBinary(num)}\n`);

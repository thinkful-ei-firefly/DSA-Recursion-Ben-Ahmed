function reverseStr(str) {
  if (str.length === 0) return '';
  if (str.length === 1) return str;
  return str.charAt(str.length - 1) + reverseStr(str.slice(0, -1));
}

const string = 'recursion';
console.log(reverseStr(string));

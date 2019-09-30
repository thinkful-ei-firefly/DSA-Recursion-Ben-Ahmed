function splitString(str, separator) {
  if (str.length === 0) return str;
  if (str.length === 1) {
    if (str === separator) {
      return '';
    } else {
      return str;
    }
  }
  return (
    splitString(str.slice(0, 1), separator) +
    splitString(str.slice(1), separator)
  );
}

const string = 're*cur*sion';
const separator = '*';
console.log(splitString(string, separator));

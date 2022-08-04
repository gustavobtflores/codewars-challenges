function getNumberInsideString(string) {
  return string.match(/\d+/)[0];
}

function order(words) {
  var wordsSplitted = words.split(' ');
  var wordsSorted = wordsSplitted.sort((a, b) => {
    return getNumberInsideString(a) - getNumberInsideString(b);
  });
  return wordsSorted.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));

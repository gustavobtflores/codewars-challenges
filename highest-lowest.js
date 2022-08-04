function highAndLow(numbers) {
  var sortedNumbers = numbers.split(' ').sort((a, b) => b - a);
  return `${sortedNumbers[0]} ${sortedNumbers.slice(-1)[0]}`;
}

console.log(highAndLow('1 2 3 4 5'));

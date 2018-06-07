function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var id = -1;

  return function() {
    id += 1;
    return list[id];
  }
}

var rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6

var countdownGenerator = function (x) {
  var secondsLeft = x + 1;

  return function() {
    secondsLeft -= 1;
    if (secondsLeft > 0) {
      return `T-minus ${secondsLeft}...`
    } else if (secondsLeft == 0) {
      return 'Blast Off!'
    } else if (secondsLeft < 0) {
      return "Rockets already gone bud"
    }

  }
};

var countdown = countdownGenerator(3);
 console.log(countdown()); // T-minus 3...
 console.log(countdown()); // T-minus 2...
 console.log(countdown()); // T-minus 1...
 console.log(countdown()); // Blast Off!
 console.log(countdown()); // Rockets already gone, bub!
 console.log(countdown()); // Rockets already gone, bub!

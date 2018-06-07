var map = function(array, fn) {
    let mapped = [];
    for (let element of array) {
      mapped.push(fn(element));
    }
    return mapped;
  };

var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});



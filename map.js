var map = function(array, transform) {
    let mapped = [];
    for (let element of array) {
      mapped.push(transform(element));
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



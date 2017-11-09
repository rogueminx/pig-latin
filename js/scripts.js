var reOrder = function(letters) {
  if (!isNaN(letters)) {
    return letters;
  } else {
    letters.push(letters[0]);
    letters.shift();
    return letters.join("") + "ay";
  console.log(letters);
  };
};

var reOrder = function(letters) {
  letters.push(letters[0]);
  letters.shift();
  return letters;
}

// var addAy = function(word) {
//   if (!isNaN(word)) {
//     return word;
//   } else {
//     return word + "ay";
//   }
// };


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var phrase = $("input#phrase").val();
    var letters = phrase.split("");
    var result = reOrder(letters);

    $("#result").text(result);
  });
});

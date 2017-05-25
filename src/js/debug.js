/* Export various functions for debug purposes */
module.exports = (function() {
  // load module to generate lorem ipsum text
  var lorem = require("lorem-ipsum");
  // generate lorem ipsum placeholder for one DOM element
  var generateLoremElement = function(target, preset) {
    switch (preset) {
      case "small":
        target.html(lorem({count: 5, units: "words"}));
        break;
      case "medium":
        target.html(lorem({count: 7, units: "sentences"}));
        break;
      case "big":
        target.html(lorem({count: 9, units: "paragraphs"}));
        break;
    }
  }
  // fill up DOM elements with lorem ipsum depending on preset
  var generateLorem = function(array) {
    array.forEach(function(entry) {
      generateLoremElement(entry.target, entry.preset);
    });
  };
  return {
    generateLorem: generateLorem
  };
})();

/* Export various functions for debug purposes */
module.exports = (function() {
  // load module to generate lorem ipsum text
  var lorem = require("lorem-ipsum");
  // fill up DOM elements width lorem ipsum depending on preset
  var generateLorem = function(preset) {
    // do not require jQuery because we saved it in global object
    switch (preset) {
      case "small":
        // few content everywhere
        $("header").html(lorem({count: 5, units: "words"}));
        $(".panel-left").html(lorem({count: 5, units: "sentences"}));
        $(".content").html(lorem({count: 10, units: "sentences"}));
        $(".panel-right").html(lorem({count: 5, units: "sentences"}));
        $("footer").html(lorem({count: 7, units: "words"}));
        break;
      case "big":
        // much content in every element, wow!
        $("header").html(lorem({count: 5, units: "paragraphs"}));
        $(".panel-left").html(lorem({count: 10, units: "paragraphs"}));
        $(".content").html(lorem({count: 20, units: "paragraphs"}));
        $(".panel-right").html(lorem({count: 10, units: "paragraphs"}));
        $("footer").html(lorem({count: 7, units: "paragraphs"}));
        break;
      case "big-left":
        // big text in left panel, few in other elements
        $("header").html(lorem({count: 5, units: "words"}));
        $(".panel-left").html(lorem({count: 10, units: "paragraphs"}));
        $(".content").html(lorem({count: 10, units: "sentences"}));
        $(".panel-right").html(lorem({count: 5, units: "sentences"}));
        $("footer").html(lorem({count: 7, units: "words"}));
        break;
      case "big-content":
        // big text only in main content element
        $("header").html(lorem({count: 5, units: "words"}));
        $(".panel-left").html(lorem({count: 5, units: "sentences"}));
        $(".content").html(lorem({count: 20, units: "paragraphs"}));
        $(".panel-right").html(lorem({count: 5, units: "sentences"}));
        $("footer").html(lorem({count: 7, units: "words"}));
        break;
      case "big-right":
        // big text in right panel
        $("header").html(lorem({count: 5, units: "words"}));
        $(".panel-left").html(lorem({count: 5, units: "sentences"}));
        $(".content").html(lorem({count: 10, units: "sentences"}));
        $(".panel-right").html(lorem({count: 10, units: "paragraphs"}));
        $("footer").html(lorem({count: 7, units: "words"}));
        break;
    }
  };
  return {
    generateLorem: generateLorem
  };
})();

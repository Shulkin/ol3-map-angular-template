/* === Main entry point to application === */
require("../css/style.scss"); // require style
// load utilities
var $ = require("jquery");
// start application
$(document).ready(function() {
  const name = "Evgeny";
  // show message after 300ms
  setTimeout(() => alert(`Hello, ${name}!`), 300);
  // load module to generate lorem ipsum text
  var lorem = require("lorem-ipsum");
  // place different sized lorem placeholders to main page elements
  $("header").html(lorem({count: 20, units: "words"}));
  $(".content").html(lorem({count: 3, units: "paragraphs"}));
  $("#layers-list").html(lorem({count: 1, units: "paragraphs"}));
  $("#tools").html(lorem({count: 1, units: "paragraphs"}));
  $(".panel-right").html(lorem({count: 1, units: "paragraphs"}));
  $("footer").html(lorem({count: 10, units: "sentences"}));
});

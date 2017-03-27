/* === Main entry point to application === */
require("../css/style.scss"); // require style
// load utilities
var $ = require("jquery");
// start application
$(document).ready(function() {
  const name = "Evgeny";
  // show message after 300ms
  setTimeout(() => alert(`Hello, ${name}!`), 300);
  // use handlebars to print placeholders
  var handlebars = require("handlebars");
  // load helper to generate lorem ipsum text
  handlebars.registerHelper("lorem", require("helper-lorem"));
  var template = handlebars.compile("{{lorem this}}");
  // place different size lorem text to main page elements
  $("header").html(template({count: 20, units: "words"}));
  $(".content").html(template({count: 3, units: "paragraphs"}));
  $(".panel-left").html(template({count: 2, units: "paragraphs"}));
  $(".panel-right").html(template({count: 1, units: "paragraphs"}));
  $("footer").html(template({count: 10, units: "sentences"}));
});

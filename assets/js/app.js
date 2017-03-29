/* === Main entry point to application === */
// require style
require("../css/style.scss");
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
  $("header").html(lorem({count: 5, units: "sentences"}));
  $(".content").html(lorem({count: 20, units: "paragraphs"}));
  $("#layers-list").html(lorem({count: 5, units: "paragraphs"}));
  $("#tools").html(lorem({count: 5, units: "paragraphs"}));
  $(".panel-right").html(lorem({count: 10, units: "paragraphs"}));
  $("footer").html(lorem({count: 7, units: "sentences"}));
  // create mouse handlers for resize spliters
  $("#sp-left").on("mousedown", function(e) {
    $(this).data("mousedown", true);
  }).on("mousemove", function(e) {
    if ($(this).data("mousedown")) {
      console.log("Dragging left splitter...");
    }
  }).on("mouseup", function(e) {
    $(this).data("mousedown", false);
  });
  $("#sp-right").on("mousedown", function(e) {
    $(this).data("mousedown", true);
  }).on("mousemove", function(e) {
    if ($(this).data("mousedown")) {
      console.log("Dragging right splitter...");
    }
  }).on("mouseup", function(e) {
    $(this).data("mousedown", false);
  });
});

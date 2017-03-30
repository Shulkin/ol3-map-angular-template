/* === Main entry point to application === */
// require style
require("../css/style.scss");
// load utilities
var $ = require("jquery");
// save for jQuery plugins
window.jQuery = $;
window.$ = $;
// start application
$(document).ready(function() {
  // load module to generate lorem ipsum text
  var lorem = require("lorem-ipsum");
  // place different sized lorem placeholders to main page elements
  $("header").html(lorem({count: 5, units: "paragraphs"}));
  $(".panel-left").html(lorem({count: 10, units: "paragraphs"}));
  $(".content").html(lorem({count: 20, units: "paragraphs"}));
  $(".panel-right").html(lorem({count: 10, units: "paragraphs"}));
  $("footer").html(lorem({count: 7, units: "paragraphs"}));
  /* ======================================================== */
  /* OUTDATED */
  /* ======================================================== */
  /*
  require("jquery-resizable-dom");
  $("#layers-list").resizable({
    handleSelector: "#sp-layers",
    resizeWidth: false
  });
  $(".panel-left").resizable({
    handleSelector: "#sp-left",
    resizeHeight: false
  });
  */
  //$("#layers-list").html(lorem({count: 5, units: "paragraphs"}));
  //$("#tools").html(lorem({count: 5, units: "paragraphs"}));
  //--
  // create mouse handlers for resize spliters
  /*
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
  */
});

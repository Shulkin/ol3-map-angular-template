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
  // fill element with random lorem ipsum
  var debug = require("./debug.js");
  // small, big, big-left, big-content, big-right
  debug.generateLorem("big");
  $(".panel-left").resizable({
    handleSelector: "#sp-left",
    resizeHeight: false
  });
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

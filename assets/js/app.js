/* === Main entry point to application === */
// require styles
require("../css/style.scss");
require("../css/layout.scss");
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
  debug.generateLorem("small");
  /*
   * Use small jQuery plugin by Rick Strahl to make DOM elements resizable
   * More here: https://github.com/RickStrahl/jquery-resizable
   */
  require("jquery-resizable-dom");
  // side panels resizable
  $(".panel-left").resizable({
    handleSelector: "#sp-left",
    resizeWidthFrom: "right",
    resizeHeight: false
  });
  $(".panel-right").resizable({
    handleSelector: "#sp-right",
    resizeWidthFrom: "left",
    resizeHeight: false
  });
});

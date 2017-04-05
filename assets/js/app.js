/* === Main entry point to application === */
// require styles
require("../css/style.scss");
require("../css/layout.scss");
require("../css/splitter.scss");
require("../css/colors.scss");
// load utilities
var $ = require("jquery");
// save for jQuery plugins
window.jQuery = $;
window.$ = $;
// start application
$(document).ready(function() {
  // fill elements with random lorem ipsum
  var debug = require("./debug.js");
  debug.generateLorem([
    {target: $("header"), preset: "medium"},
    {target: $("#layers-list"), preset: "medium"},
    {target: $("#tools"), preset: "medium"},
    {target: $("#map"), preset: "medium"},
    {target: $("#legend"), preset: "medium"},
    {target: $("footer"), preset: "medium"}
  ]);
  /*
   * Use small jQuery plugin by Rick Strahl to make DOM elements resizable
   * More here: https://github.com/RickStrahl/jquery-resizable
   */
  require("jquery-resizable-dom");
  $(".left").resizable({
    handleSelector: "#sp-left",
    resizeWidthFrom: "right",
    resizeHeight: false
  });
  $("#legend").resizable({
    handleSelector: "#sp-legend",
    resizeWidthFrom: "left",
    resizeHeight: false
  });
  $("#layers-list").resizable({
    handleSelector: "#sp-layers",
    resizeWidth: false
  });
});

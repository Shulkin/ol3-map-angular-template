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
  // utility function
  var resetWidth = function(target) {
    target.width(target.width());
  };
  /*
   * Use small jQuery plugin by Rick Strahl to make DOM elements resizable
   * More here: https://github.com/RickStrahl/jquery-resizable
   */
  require("jquery-resizable-dom");
  $(".left").resizable({
    handleSelector: "#sp-left",
    resizeWidthFrom: "right",
    resizeHeight: false,
    /*
     * Two optional hacks
     * Slightly increases usability when resizing
     */
    onDrag: function(e, $el, newWidth, newHeight, opt) {
      resetWidth($("#legend"));
    },
    onDragEnd: function(e, $el, opt) {
      resetWidth($el);
    }
  });
  $("#legend").resizable({
    handleSelector: "#sp-legend",
    resizeWidthFrom: "left",
    resizeHeight: false,
    /* The same hack here */
    onDragEnd: function(e, $el, opt) {
      resetWidth($el);
    }
  });
  $("#layers-list").resizable({
    handleSelector: "#sp-layers",
    resizeWidth: false
  });
  /* Third hack */
  window.addEventListener("resize", function(event) {
    // prevents side panels from changing width on resize
    resetWidth($("#legend"));
    resetWidth($(".left"));
  });
});

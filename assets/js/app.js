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
    /*
    {target: $("header"), preset: "medium"},
    {target: $("#layers-list"), preset: "big"},
    {target: $("#tools"), preset: "big"},
    {target: $(".content"), preset: "big"},
    {target: $(".panel-right"), preset: "medium"},
    {target: $("footer"), preset: "medium"}
    */
  ]);
  // ===
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
  // ===
  /*
   * Use small jQuery plugin by Rick Strahl to make DOM elements resizable
   * More here: https://github.com/RickStrahl/jquery-resizable
   */
  //require("jquery-resizable-dom");
  // define onDrag callback
  /*
  var onDrag = function (e, $el, newWidth, newHeight, opt) {
    if ($(".content").width() <= 118) {
      if (newWidth < $el.width()) {
        $el.width(newWidth);
      } else {
        return false;
      }
    }
  };
  */
  /*
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
  // content in left panel resizable
  $("#layers-list").resizable({
    handleSelector: "#sp-layers",
    resizeWidth: false
  });
  */
});

/* Various utilities */
module.exports = (function() {
  var resetWidth = function(target) {
    target.width(target.width());
  };
  return {
    resetWidth: resetWidth
  };
})();

/* === Main entry point to application === */
/* Bundle all resources here */
// copy static assets to output folder
require("./index.html"); // main index file
require("./favicon.ico"); // favicon
// require styles
require("./css/style.scss");
require("./css/layout.scss");
require("./css/splitter.scss");
require("./css/colors.scss");
// require other scripts from app.js
require("app.js");

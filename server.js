// === Initialize ===
// grab npm modules
var path = require("path");
var express = require("express");
var favicon = require("serve-favicon");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// initialize express app
var app = express();
// set up the port
var port = process.env.PORT || 3000;
// === Configure ===
// set up express middleware
app.use(favicon(path.resolve(__dirname, "assets", "favicon.ico")));
app.use(express.static(path.resolve(__dirname, "assets")));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(methodOverride());
// default route to build/index.html
app.get("*", function(req ,res) {
  // anything else is up to Angular
  res.sendFile("assets/index.html"); //!! change to /dist
});
// === Start server ===
app.listen(port);
console.log("Server started at port " + port);

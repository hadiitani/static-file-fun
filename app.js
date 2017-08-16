var express = require("express");
var morgan = require("morgan");
var path = require("path");

var app = express();

app.use(morgan("short"));

var filePath = path.join(__dirname, "static");
app.use(express.static(filePath));

app.use(function(req, res) {
    res.status(404);
    res.send("File not found!");
});

app.listen(8081, function() {
    console.log("App started on port 8081");
});
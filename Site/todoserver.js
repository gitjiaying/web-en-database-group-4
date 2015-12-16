//dit is de file die een serverconnection e.d. maakt met node.js en  data zendt en terugstuurt
var express = require("express");
var url = require("url");
var http = require("http");
var bodyparser = require("body-parser");
var app;
var jsonTodolists;

//var port = process.argv[2]; //in command line een poort aangeven
var port = 3000;
app = express();
http.createServer(app).listen(port);

app.use(express.static(__dirname + "/client"));

app.post("/update", function(req, res) {
	jsonTodolists = req.body;
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/client/Log-in_Site/log-in-scherm.html");
});

app.get("/logged-in", function(req, res) {
	res.sendFile(__dirname + "/client/logged-in_site/logged-in.html");
});

//dit is de file die een serverconnection e.d. maakt met node.js en  data zendt en terugstuurt
var express = require("express");
var url = require("url");
var http = require("http");
var app;

var port = process.argv[2]; //in command line een poort aangeven
app = express();
http.createServer(app).listen(port);

var todosLists = []; //empty array voor de aangemaakte todoLists;


app.get("/todosLists", function(req, res) {
	res.json(todosLists);
});

app.get("/addtodoList", function(req, res) {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	if(query["name"]!== undefined) {
		var todoListx = {
			name: query["name"],
			priority = query["priority"]
		};
		todosLists.push(todoListx);
		res.end("TodoList added succesfully");
		console.log("Added "+todoListx.name);
	}
	else {
		res.end("Error: missing name parameter");
	}
});

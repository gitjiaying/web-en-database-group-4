var main = function(){
	"use strict";
	
	var addTodoToList = function (todos) {
		console.log("adding todos from server");
		var todolist = document.getElementById("todolists");
		for (var key in todos) {
			var li = document.createElement("li");
			li.innerHTML = "TODO: " + todos[key].message;
			todolist.appendChild(li);
		}
	};
	
	$.getJSON("../todos", addTodoToList)
	.error(function (jqXHR, textStatus, errorThrown){
		console.log("error " + textStatus);
		console.log("incoming Text " + jqXHR.responseText);
	});
		
};
$(document).ready(main);
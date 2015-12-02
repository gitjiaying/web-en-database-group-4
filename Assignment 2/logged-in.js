function TodoList (name, priority, numberTodos) {
	this.name = name;
	this.priority = priority;
	this.numberTodos = 0; //initial value
	this.status = false; //initially not all todos done
	this.list = []; //empty list
};

TodoList.prototype.push = function(todo) {
	this.list.push(todo);
	this.numberTodos++;
	};
TodoList.prototype.setName = function(name) {
	this.name = name;
};
TodoList.prototype.setPriority = function(priority) {
	this.priority = priority;
};
TodoList.prototype.getNumberTodos = function () {
	return this.numberTodos;
};
TodoList.prototype.setStatus = function (status) {
	this.status = status; //boolean
};


function Todo (content, duedate, label, todoList) {
	this.content = content;
	this.duedate = duedate;
	this.label = label;
	this.todoList = todoList;
	this.status = false;
}

Todo.prototype.setContent = function (content) {
	this.content = content;
};
Todo.prototype.setDueDate = function (duedate) {
	this.duedate = duedate;
};
Todo.prototype.setLabel = function (label) {
	this.label = label;
};
Todo.prototype.setStatus = function (status) {
	this.status = status;
};

var main = function () {
"use strict"

//addList
function addList() {
	$("#todolists").append('<li> <ul class="todolist"> <p> Container for todolist</p> <button onClick="addTodo()">+</button> </ul> </li>');
};
$('#addList').on('click', addList);
};

//toggle menu-section
var menu = false;

function MenuSlide(menu, event) {
if (menu === true;) {
$(this).hide(); }; //this = this DOM object menu-image
menu = false; };
else {
$(this).show();};
};

$('#menu-section').on('click', MenuSlide(menu, event);

//add todo


$(document).ready(main);
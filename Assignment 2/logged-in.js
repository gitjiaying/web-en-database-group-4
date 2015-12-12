function TodoList () {
	this.name = "";
	this.priority = "low"; //defualt
	this.numberTodos = 0; //initial value
	this.status = function () {
		return this.countDone + "/" + this.getNumberTodos();
	}; //initially 0/0 todos done
	this.list = []; //empty list
	this.kind = task; //note or tasklist
	this.countDone = 0; //number of todos in this list done
};

//TodoList.prototype.setMember("membername", value) {
	//this.membername = value;
//}
//TodoList.prototype.getMember("membername") {
	//return this.membername;
//}

TodoList.prototype.push = function(todo) {
	this.list.push(todo);
	//this.numberTodos++;
	};
TodoList.prototype.setName = function(name) {
	this.name = name;
};
TodoList.prototype.getName = function(name) {
	return this.name;
};
TodoList.prototype.setPriority = function(priority) {
	this.priority = priority;
};
TodoList.prototype.getPriority = function() {
	return this.priority;
}
TodoList.prototype.getNumberTodos = function () {
	return this.numberTodos;
};
TodoList.prototype.setStatus = function () {
	this.status = this.countDone + "/" + this.getNumberTodos(); //change status and return the string representation
};
TodoList.prototype.setStatus = function () {
	return this.status; 
};

function Todo () {
	this.content = "";
	this.duedate = "today";
	this.duetime = "now"
	this.label = "low";
	this.todoListclass = "";
	this.status = false;
	this.creationDate = "today";
}

Todo.prototype.setContent = function (content) {
	this.content = content;
};
Todo.prototype.setDueDate = function (duedate) {
	this.duedate = duedate;
};
Todo.prototype.setLabel = function (label) { //medium as default
	this.label = label;
};
Todo.prototype.setStatus = function (status) {
	this.status = status;
};

ToDo.prototype.setDueTime = function(time) {
	this.duetime = time;
}



var main = function () {
"use strict"

var mode = document.designMode; //designmode on makes sure the entire document is editable
document.designMode = "on"; //can also use the attribute contenteditable in the html for the editable parts, only HTML5

var todolists = []; //array to hold todolists;

//addList
function addTaskList() {
	var newTodolist = new TodoList(); //add to todolistList
	//var k = todolists.push(newTodolist); //when pushed, retrieve array[i] to change the members
	var $new_todolist = $("<li>"); //jquery to append to the DOM, create a new list element with a nested unordered list
	$('#todolists').append($new_todolist);
	UpdateTodoList($new_todolist, todolists.length); //call the update 
	
	function UpdateTodoList (todoList, index) { //setAttribute replaces the values of the attributes, so need to remove and add values
	$("#todolists").children('li').setAttribute('class', function(n) { //give all the todolists in the ul #todolists the classes  todolist and their number n in the DOM
            return "todolist " + n; //this will give the todolists a number in the array
	});
	//todoList.setAttribute('title', todolists[index].getName());
	todoList.setAttribute('data-label', todoList[index].getPriority());
	};
	
	var $title = $('<input type="text" name = "title" size ="10" class="todolist-header-title" value="">'); 
	$new_todolist.append($title);

	var $todos = $("<ul>"); //ul for the todos in this list ($new_todolist)
	$todos.addClass("todos");
	$new_todolist.append($todos);

	var $addtodoButton = $("button"); //or $("input") for the add - todobutton
	$addtodoButton.addClass("addTodo");
	//$addtodoButton.setAttribute("value", "+");
	$addtodoButton.innerHTML= "add todo-item"
	$todos.append($addtodoButton); 
	
	$('.todolist-header-title').on('keypress', function(event){ //if focus on the input field and a key is pressed, then function is called
		if(event.which === 13) { //enter key pressed
			var newTitle =$(this).val(); //or $(event).val() ?, get the input
			$(this).val(newTitle); //set the input as the value for this input field
			var thisListnumber = $(this).parent().attr('class').split(' ')[1]); //get the second class of thisList by splitting on the whitspaces in the class attribute and that will give an array of values, we take the one at index1 which equals the second class
			todolists[thisListnumber].setName(newTitle); //update the array
		};
	};

	var k = todolists.push(newTodolist); //push at the end 
	//$("#todolists").append('<li> <ul class="todolist_"  data-label = "low"> <p> Container for todolist</p> <button onClick="addTodo()">+</button> </ul> </li>');
};

function addNoteList() {

}

function addList() {
	//show the buttons, can also put the buttons in a <div> and let the that fade
	$(".noteList").fadeIn();
	$(".taskList").fadeIn();

	$(".noteList").on('click', function () {
		addNoteList();
		$(this).fadeOut();
		$('.taskList').fadeOut();
	};);

	$(".taskList").on('click', function () {
		addTaskList();
		$(this).fadeOut();
		$('.noteList').fadeOut();
	};);
};
$('#addList-button').on('click', addList);

//toggle menu-section
function MenuFade(menu, event) {
$(this).fadeToggle(); //of toggle() of slideToggle()
};

$('#menu-section').on('click', MenuFade(menu, event));


//set label
function Label() {
	var target = this; //handler for this todolist or todo that has been focused on
	$('#label').on('click', 'button', function(event) {
		var newLabel = $(this).attr("id"); //get the value of the id of this button
		$(target).attr("data-label", newLabel);
	});

};

$('.todolist').focus(Label);
$('.todo').focus(Label);

//make bold, italic, underlined selected text
function Style(style) { //document.execCommand is already a toggler itself, use this method on selections in the document, you have to mke sure the content is editable though
	document.execCommand(style, false, null); //document = javascript whole document, here it takes the selection
}

$("#bold").on('click', Style("bold"));
$("#italic").on('click', Style("italic"));
$("#underlined").on('click', Style("underline"));

//add todo


};
$(document).ready(main);
function TodoList () {
    this.name = "";
    this.priority = "low"; //defualt
    this.status = function () {
        return this.countDone + "/" + this.getNumberTodos();
    }; //initially 0/0 todos done
    this.todos = []; //empty list
    this.kind = task; //note or tasklist
    this.countDone = 0; //number of todos in this list done
};

TodoList.prototype.push = function(todo) {
    this.list.push(todo);
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
};
TodoList.prototype.getNumberTodos = function () {
    return this.numberTodos;
};
TodoList.prototype.setStatus = function () {
    this.status = this.countDone + "/" + this.getNumberTodos(); //change status and return the string representation
};

function Todo () {
    this.content = "";
    this.duedate = "today";
    this.duetime = "now"
    this.label = "low";
    this.todoListclass = null;
    this.status = "undone";
    this.creationDate = new Date().toUTCString();
}

Todo.prototype.setContent = function (content) {
    this.content = content;
};
Todo.prototype.setDueDate = function (duedate) {
    this.duedate = duedate;
};
// Todo.prototype.creationDueDate = function () {
//  var today = new Date(); //creates a new date, default is the creationdate
//  this.creationDate = today.toUTCString();
// };
Todo.prototype.setLabel = function (label) { //medium as default
    this.label = label;
};
Todo.prototype.setStatus = function (status) {
    this.status = status;
};
Todo.prototype.setDueTime = function(time) {
    this.duetime = time;
};

function main() {
    "use strict"

    $('#menu-section').hide();
    $('.List-Menu').hide();

    var mode = document.designMode; //designmode on makes sure the entire document is editable
    document.designMode = "off";

    var todolists = []; //array to hold todolists;

    //addList
    function addTaskList() {
        var newTodolist = new TodoList(); //add to todolistList
        var k = todolists.push(newTodolist); //push at the end 
        
        var $new_todolist = $("<div>"); //jquery to append to the DOM, create a new list element with a nested unordered list
    	var index = (todolists.length).toString();
         $new_todolist.addClass('todolist-holder ' + index);
         $new_todolist.attr('title', 'low');
        $('.todolist-section').append($new_todolist);

        
    	var $header = $('<div class="todolist-header">');
    	$new_todolist.append($header);
     
        var $title = $('<input type="text" name = "title" size ="10" class="todolist-header-title">'); 
        $title.focus(LabelList);
        $header.append($title);

        var $addtodoButton = $("<button>"); //or $("input") for the add - todobutton
        $addtodoButton.text("+");
        $addtodoButton.addClass("addTodo");
        $addtodoButton.on("click", addTodo);
        $header.append($addtodoButton); 

    	
        var $todolistmenu = $('<input  class="todolist-menubutton" type="image" src="elements/Menu-button-groen.png" align="right">');
    	$header.append($todolistmenu);
    	$todolistmenu.on("click", ClickTodomenu);

    	var $listmenu = $("<div class='list-section' align='right'>");
    	$new_todolist.append($listmenu);

    	var $listmenuthing = $('<div class="List-Menu" style="display: none;">');
    	$listmenu.append($listmenuthing);
    	
        var $sortbylabel = $('<button class="labelsort">');
        $sortbylabel.text("labelsort");
        $sortbylabel.on('click', SortByLabel);
        var $sortbydate = $('<button class="datesort">');
        $sortbydate.text("datesort");
        $listmenuthing.append($sortbydate);
        $listmenuthing.append($sortbylabel);

        var $todos = $("<ul>"); //ul for the todos in this list ($new_todolist)
        $todos.addClass("todos");
        $new_todolist.append($todos);

       
        
        $title.on('keypress', function(event){ //if focus on the input field and a key is pressed, then function is called
            if(event.keyCode === 13) { //enter key pressed
                var newTitle =$(this).val(); //or $(event).val() ?, get the input
                $(this).val(newTitle); //set the input as the value for this input field
                var thisListnumber = $(this).parent().parent().attr('class').split(' ')[1]; 
                todolists[thisListnumber -1].setName(newTitle); //update the array
            };
        });

    };

    $('#addList-button').on('click', addTaskList);


    	
    	function ClickTodomenu(){
    			var $listmenu = $(this).parent().siblings(".list-section").children(".List-Menu");
    			$listmenu.fadeToggle();
    			var src3 = "elements/Menu-button-groen.png";
    			var src4 = "elements/Menu-button-groen-close.png";
    			
    			if($(this).attr("src") === src3){
    				$(this).attr("src",src4);
    			}
    			else{
    				$(this).attr("src",src3);
    			};
    			
    		};

    
    //add todo
    function addTodo() {
    var newTodo = new Todo();

    var $new_todo = $('<li>');
    var thisList = $(this).parent().parent().attr('class').split(" ")[1]; //get index of the todoList in the todolists-array
    todolists[thisList -1].todos.push(newTodo);

    var listnum = parseInt(thisList, 10);
    var n = todolists[thisList-1].todos.length;
    $new_todo.addClass('todo ' + n);
    $new_todo.attr('name', listnum); //todolistnumber
    $new_todo.attr('title', 'low'); //label
    $(this).parent().parent().children(".todos").append($new_todo);

    var $content = $('<input type="text">');
    $content.attr('class', 'todo-content');
    $content.on('keypress', function(event){
        if(event.which === 13) {
        todolists[thisList -1].todos[n-1].setContent($(this).val());
        var newContent = $(this).val();
        $(this).val(newContent);
        };
    });
    $content.focus(Label);
    $new_todo.append($content);

    var $status = $('<input>');
    $status.attr('class', 'status undone');
    $status.on('keypress', function(event){
        if(event.which === 13) {
        todolists[thisList -1].todos[n-1].setStatus($(this).val());
        var newStatus = $(this).val();
        $(this).val(newStatus);
        };
    });
    $new_todo.append($status);

    var $dueDate = $('<input>');
    $dueDate.attr('class', 'duedate');
    $dueDate.attr("placeholder", "set duedate DD/MM/YY");
    $dueDate.on('keypress', function(event){
        if(event.which === 13) {
        todolists[thisList -1].todos[n-1].setDueDate($(this).val());
        var newDueDate = $(this).val();
        $(this).val(newDueDate);
        };
    });
    $new_todo.append($dueDate);

    };
    
    //set labeltodo
    function Label() {
        var target = $(this); //handler for this todolist or todo that has been focused on
        var thislist = target.parent().attr('name');
        var thistodo = target.parent().attr('class').split(" ")[1];

        $('#label').on('click', 'button', function() {
            var newLabel = $(this).attr("id"); //get the value of the id of this button
            $(target).parent().attr("title", newLabel);
            todolists[thislist-1].todos[thistodo -1].setLabel(newLabel);
        });

    }; 

    //set labellist
    function LabelList() {
        var target = $(this); //handler for this todolist or todo that has been focused on
        var thislist = target.parent().parent().attr('class').split(" ")[1];

        $('#label').on('click', 'button', function() {
            var newLabel = $(this).attr("id"); //get the value of the id of this button
            $(target).parent().parent().attr("title", newLabel);
            todolists[thislist-1].setPriority(newLabel);
        });

    };   

    function SortByLabel() {

        var items = $(this).parent().siblings('.todos').children('li').get();

        items.sort(function(a,b){
          var keyA = $(a).attr('title');
          var keyB = $(b).attr('title');

          if (keyA === "low" && keyB === "high") return -1;
          if (keyA === "low" && keyB === "medium") return -1;
          if (keyA === "medium" && keyB === "high") return -1;
          if (keyA === "high" && keyB === "low") return 1;
          if (keyA === "high" && keyB === "medium") return 1;
          if (keyA === "medium" && keyA === "low") return 1;
          return 0;
        });
        var ul = $(this).parent().siblings('.todos'); //todos list
        
        $.each(items, function(i, li){
          ul.append(li);
        });
    };

    function SortByDate() {
        var items = $(this).parent().siblings('.todos').children('li').get();
         
         items.sort(function(a,b) {
            var keyA = new Date($(a).children('.duedate').val());
            var keyB = new Date($(b).children('.duedate').val());

            return keyB - keya;
         });

         var ul = $(this).parent().siblings('.todos'); //todos list
        
        $.each(items, function(i, li){
          ul.append(li);
        });
    };

    //menu-button
    $("#menu-button").click(function(){
        $("#menu-section").fadeToggle();
		var src1 = "elements/Menu-button.png";
		var src2 = "elements/Menu-button_close.png";
		if($("#menu-button").attr("src") === src1){
		$("#menu-button").attr("src",src2);
		}
		else{
			$("#menu-button").attr("src",src1);
		};
     });

           $(".todolist-menubutton").click(ClickTodomenu);
};
     

function SendJson() {
    var jsonFile = JSON.stringify(todolists);
    $.post('/update', jsonFile);
}; //Sends the jsonfile to server at path localhost:3000/update



$(document).ready(main);
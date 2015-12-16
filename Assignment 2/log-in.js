 function Account(name, surname, email, ww1, ww2) {
	this.name = name;
	this.surname = surname;
	this.email = email;
	
	if(ww1 == ww2) {
	this.ww = ww1;
	}
	else {
	//pop-up error!
	}
	
}

Account.prototype.setName = function (name) {this.name = name;};
Account.prototype.setSurname = function (surname) {this.surname = surname;};
Account.prototype.setEmail = function (email) {this.email= email;};
Account.prototype.setWW = function (ww) {this.ww = ww;};
Account.prototype.toString = function () {
	return "Name: " + this.name + " , Surname: " + this.surname + " , Email: " + this.mail1;
};


//using jQuery to find DOM objects
var main = function() {
"use strict";
//click on sign-in button
$('#Sign-in').on("click", function (event) {
	$('#Sign-up-form').submit();
	//redirecting your browserwindow in javascript to another location
	window.location='Logged-in.html';
});

//click on Sign-up button
$('#Sign-up').on('click', function (event) {
$('#Sign-up-form').submit();
});
};
$(document).ready(main);
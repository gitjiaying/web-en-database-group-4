 function Account(name, surname, mail1, mail2) {
	this.name = name;
	this.surname = surname;
	//check whether mail1.isequal(mail2) before submit can be done
	this.mail1 = mail1;
	this.mail2 = mail2;
	
}

Account.prototype.setName = function (name) {this.name = name;};
Account.prototype.setSurname = function (surname) {this.surname = surname;};
Account.prototype.setEmail = function (email) {this.email= email;};
Account.prototype.toString = function () {
	return "Name: " + this.name + " , Surname: " + this.surname + " , Email: " + this.mail1;
};


//using jQuery to find DOM objects
var main = function() {
"use strict";
//click on sign-in button
$(#Sign-in).on("click", function () {

	//redirecting your browserwindow in javascript to another location
	window.location='Logged-in.html';
});
};
$(document).ready(main);
"use strict";
  var config = {
    apiKey: "AIzaSyAIbmAXDdS6RV-3G9TIvpoATKURDrgbAiE",
    authDomain: "bibimbap-king.firebaseapp.com",
    databaseURL: "https://bibimbap-king.firebaseio.com",
    storageBucket: "bibimbap-king.appspot.com",
    messagingSenderId: "925242653301"
};
firebase.initializeApp(config);

var messageForm = document.querySelector("#message_form");
var firstName = document.querySelector("#first_name");
var lastName = document.querySelector("#last_name");
var email = document.querySelector("#email");
var company = document.querySelector("#company");
var messageInput = document.querySelector("#message");
var messageRef = firebase.database().ref("messages");


messageForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var message = {
        message: messageInput.value.trim(),
        createdBy: {
            Name: firstName.value.trim() + " " + lastName.value.trim(),
            email: email.value.trim(),
            company: company.value.trim()
        }
    };
    messageRef.push(message);
    alert("Thank you! your message has been sent");
    messageInput.value = "";
    firstName.value = "";
    lastName.value = "";
    email.value = "";

    return false;
});
"use strict";

var config = {
    apiKey: "AIzaSyAIbmAXDdS6RV-3G9TIvpoATKURDrgbAiE",
    authDomain: "bibimbap-king.firebaseapp.com",
    databaseURL: "https://bibimbap-king.firebaseio.com",
    storageBucket: "bibimbap-king.appspot.com",
    messagingSenderId: "925242653301"
};
firebase.initializeApp(config);

$(document).ready(function() {
      $('.slider').slider({full_width: true, Indicators: false});
});

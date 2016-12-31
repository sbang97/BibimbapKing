"use strict";
 $(document).ready(function(){
      $('.parallax').parallax();
});
        

var bibimbapBody = document.getElementById("bibimbap");
var burritoBody = document.getElementById("burrito");
var mealBody = document.getElementById("meal");
var bowlBody = document.getElementById("bowl");
var saladBody = document.getElementById("salad");
var soupBody = document.getElementById("soup");

function render(records, tbody) {
      tbody.innerHTML = "";
      records.forEach(function(record){
            var tr = document.createElement("tr");
            var option = document.createElement("td");
            var price = document.createElement("td");
            option.textContent = record.name;
            price.textContent = numeral(record.price).format("$0.00");
            tr.appendChild(option);
            tr.appendChild(price);
            tbody.appendChild(tr);
      });  
}

render(BIBIMBAP, bibimbapBody);
render(BURRITO, burritoBody);
render(MEAL, mealBody);
render(BOWL, bowlBody);
render(SALAD, saladBody);
render(SOUP, soupBody);

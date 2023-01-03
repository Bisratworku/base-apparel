const buttion = document.querySelector(".buttion");
const show = document.querySelector(".hide");
const input = document.getElementById("input").value;
const match = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
const email = document.getElementById("email");
let element = document.createElement("p");

buttion.addEventListener("click", function() {
    if(match.test(input) == false) {
        show.classList.toggle('icon');
        
    }
})
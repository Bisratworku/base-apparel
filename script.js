const buttion = document.querySelector(".buttion");
const show = document.querySelector(".hide");
const input = document.getElementById("input").value;
const match = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
const email = document.getElementById("email");
let element = document.createElement("div");
const write  = document.getElementById("write");
buttion.addEventListener("click", function() {
    if(match.test(input) == false) {
        show.classList.add('icon');   
        element.id = "new-element"
        element.style.color = "red";
        element.innerText = "Please provide valid Emali..."
        email.appendChild(element);
    }else {
        window.location.reload()
    }
})
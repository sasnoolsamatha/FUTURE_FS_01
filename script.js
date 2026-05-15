// CONTACT FORM

document.querySelector("form").addEventListener("submit", function(event){

    event.preventDefault();

    alert("Message Sent Successfully!");

});


// TYPING EFFECT

const text = [

    "Full Stack Developer",
    "CSE Student",
    "Web Developer",
    "Tech Enthusiast"

];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type, 1000);

    }

    else{

        setTimeout(type, 100);

    }

})();


// DARK MODE

document.getElementById("dark-mode").onclick = function(){

    document.body.classList.toggle("dark");

};


// BACK TO TOP BUTTON

document.getElementById("topBtn").onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
// CURSOR GLOW EFFECT

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

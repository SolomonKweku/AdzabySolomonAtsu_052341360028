// // for toggling menu
// var navLinks = document.getElementById("navLinks")

// function showMenu() {
//     navLinks.style.right = "0";
// }

// function hideMenu() {
//     navLinks.style.right = "-200px";
// }


let mybutton = document.getElementById("myBtn");

// when the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        mybutton.style.display = "block";
    } else{
        mybutton.style.display = "none";
    }
}

// when the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// NavBar
const aboutTheCompany = document.querySelector("#item1");

aboutTheCompany.addEventListener("mouseover", function() {
    aboutTheCompany.style.color = "#00c2d9";
});

const inspiration = document.querySelector("#item2");

inspiration.addEventListener("mouseover", function() {
    inspiration.style.color = "#06B583";
});

const contactInfo = document.querySelector("#item3");

contactInfo.addEventListener("mouseover", function() {
    contactInfo.style.color = "#ffb0c1";
});

// Buttons
const button1 = document.querySelector("#auto-button");
button1.addEventListener("click", function() {
    button1.style.color = "#00c2d9";
});
const button2 = document.querySelector("#multi-button");
button2.addEventListener("click", function() {
    button2.style.color = "#06B583";
});
const button3 = document.querySelector("#donut-button");
button3.addEventListener("click", function() {
    button3.style.color = "#ffb0c1";
});

/*
About The Company: Modal 1
*/
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("item1");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*
Contact Info: Modal 2
*/
let modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
let btn2 = document.getElementById("item3");

// Get the <span> element that closes the modal
let span2 = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}







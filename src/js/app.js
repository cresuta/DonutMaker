const aboutTheCompany = document.querySelector("#item1");

aboutTheCompany.addEventListener("mouseover", function() {
    aboutTheCompany.style.color = "#00c2d9";
});
aboutTheCompany.addEventListener("click", function() {
    alert("Fred the Baker Baking Company was founded on July 1st, 2020 in a small apartment office in Dublin, Ohio. This is not your typical baking company whatsoever. We put our customers in charge of making as MANY donuts as they can, with a simple click of the mouse!");
});

const inspiration = document.querySelector("#item2");

inspiration.addEventListener("mouseover", function() {
    inspiration.style.color = "#06B583";
});
inspiration.addEventListener("click", function() {
    alert('Fred the Baker Baking Company drew inspiration from the original "Cookie Clicker" game where we give all of our customers the chance to make as MANY donuts as they want, with a simple click of their mouse.');
});

const contactInfo = document.querySelector("#item3");

contactInfo.addEventListener("mouseover", function() {
    contactInfo.style.color = "#ffb0c1";
});
contactInfo.addEventListener("click", function() {
    alert("Our business hours are 24 hours a day, 7 days a week, 365 days a year! If you would like to contact us, feel free to give us a call at 1-800-FREDBAKING or email us at info@fredbaking.com");
});






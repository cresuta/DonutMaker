// Iteration 1

// Feature: Have a way to count donuts
let donutsDisplayed = document.querySelector("#donut-count");
let donutButton = document.querySelector("#donut-button");
let donutCount = 0;
donutButton.addEventListener("click", function() {
    donutCount += 1;
    donutsDisplayed.innerHTML = donutCount;
});

// Feature: Be able to purchase the first AutoClicker with 100 donuts from your donut count
let autoClickersDisplayed = document.querySelector("#auto-count");
let autoClickerButton = document.querySelector("#auto-button");
let autoClickerCount = 0;
const firstAutoClickerCost = 100;
autoClickerButton.addEventListener("click", function() {
    if(donutCount >= firstAutoClickerCost){
        autoClickerCount += 1;
        autoClickersDisplayed.innerHTML = autoClickerCount;
        donutsDisplayed.innerHTML = donutCount - firstAutoClickerCost;
    };
});
    
// Feature: The cost of each AutoClicker will go up 10% with each purchase
const secondAutoClickerCost = firstAutoClickerCost * 1.10;
const thirdAutoClickerCost = secondAutoClickerCost * 1.10;
const fourthAutoClickerCost = thirdAutoClickerCost * 1.10;
const fifthAutoClickerCost = fourthAutoClickerCost * 1.10;
const sixthAutoClickerCost = fifthAutoClickerCost * 1.10;

// Feature: Ensure that there are enough clicks to buy a AutoClicker


/*
    Iteration 2
*/

// Be able to purchase the first DonutMultiplier with 10 clicks from 


/*
    Iteration 5
*/

// Feature: Implement a way to reset the game
const gameReset = document.querySelector("#reset-button");
gameReset.addEventListener("click", function() {
    donutCount = 0;
    donutsDisplayed.innerHTML = donutCount;
    autoClickerCount = 0;
    autoClickersDisplayed.innerHTML = autoClickerCount;
    multiplierCount = 0;
    multiplierCountDisplayed.innerHTML = multiplierCount;
})

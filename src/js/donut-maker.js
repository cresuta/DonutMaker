// Iteration 1

// Feature: Have a way to count donuts
let donutsDisplayed = document.querySelector("#donut-count");
let donutButton = document.querySelector("#donut-button");
let donutCount = 200;
donutButton.addEventListener("click", function() {
    donutCount += 1;
    donutsDisplayed.innerText = Math.round(donutCount);
});

// Feature: Be able to purchase the first AutoClicker with 100 donuts from your donut count
let autoClickersDisplayed = document.querySelector("#auto-count");
let autoClickerButton = document.querySelector("#auto-button");
let nextAutoClickerCost = document.querySelector("#auto-cost");
let autoClickerCount = 0;
let autoClickerCost = 100;

function enableAutoClicker() {
    setInterval(function() {
        donutCount += autoClickerCount;
        donutsDisplayed.innerHTML = Math.round(donutCount)
    }, 1000);
}

autoClickerButton.addEventListener("click", buyAutoClicker);

// Feature: The cost of each AutoClicker will go up 10% with each purchase
function buyAutoClicker() {
    if (donutCount >= autoClickerCost){
        autoClickerCount += 1;
        donutCount -= autoClickerCost;
        autoClickerCost = Math.round(autoClickerCost * 1.1);
        donutsDisplayed.innerText = Math.round(donutCount);
        nextAutoClickerCost.innerText = autoClickerCost + " donuts";
        autoClickersDisplayed.innerText = autoClickerCount;
        if (autoClickerCount <= 1) {
            enableAutoClicker();
        }
    }
}

/*
    Iteration 2
*/

// Be able to purchase the first DonutMultiplier with 10 clicks from 


/*
    Iteration 5
*/

// Feature: Implement a way to reset the game
// const gameReset = document.querySelector("#reset-button");
// gameReset.addEventListener("click", function() {
//     donutCount = 0;
//     donutsDisplayed.innerHTML = donutCount;
//     autoClickerCount = 0;
//     autoClickersDisplayed.innerHTML = autoClickerCount;
//     multiplierCount = 0;
//     multiplierCountDisplayed.innerHTML = multiplierCount;
// })

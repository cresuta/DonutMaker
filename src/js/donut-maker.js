// Donut
let donutsDisplayed = document.querySelector("#donut-count");
let donutButton = document.querySelector("#donut-button");
let donutCount = 0;

donutButton.addEventListener("click", function() {
    donutCount += Math.pow(1.2, multiplierCount);
    donutsDisplayed.innerText = Math.round(donutCount);
});

// AutoClicker
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

// DonutMultiplier
let multipliersDisplayed = document.querySelector("#multiplier-count");
let multiplierButton = document.querySelector("#multi-button");
let nextMultiplierCost = document.querySelector("#multiplier-cost");
let multiplierCount = 0;
let multiplierCost = 10;

function enableMultiClicker() {
    setInterval(function() {
        donutCount += multiplierCount;
        donutsDisplayed.innerHTML = Math.round(donutCount)
    }, 1000);
}

multiplierButton.addEventListener("click", buyMultiplier);

function buyMultiplier() {
    if (donutCount >= multiplierCost) {
        multiplierCount += 1;
        donutCount -= multiplierCost;
        multiplierCost = Math.round(multiplierCost * 1.1);
        donutsDisplayed.innerText = Math.round(donutCount);
        nextMultiplierCost.innerText = multiplierCost + " donuts";
        multipliersDisplayed.innerText = multiplierCount;
        if (multiplierCount <= 1) {
            enableMultiClicker();
        }
    }
}

// Game Reset
const gameReset = document.querySelector("#reset-button");

gameReset.addEventListener("click", function() {
    donutCount = 0;
    autoClickerCount = 0;
    multiplierCount = 0;
    
    donutsDisplayed.innerText = donutCount;
    autoClickersDisplayed.innerText = autoClickerCount;
    multipliersDisplayed.innerText = multiplierCount;
   
    nextAutoClickerCost.innerText = "100 donuts";
    nextMultiplierCost.innerText = "10 donuts";
})

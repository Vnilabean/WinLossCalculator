let rateEl = document.getElementById("rate-el")
let winEl = document.getElementById("win-el")
let lossEl = document.getElementById("loss-el")
var wins = 0
var losses = 0


// TODO: combine inc functions to one generic funciton
function incrementWin() {
    wins += 1
    winEl.textContent = "Wins: " + wins
}
function incrementLoss() {
    losses += 1
    lossEl.textContent = "Losses: " + losses
}

function calculate() {
    rate = wins/(wins+losses) * 100
    rateEl.textContent = "Win Rate: " + rate.toFixed(0) + "%"
}

// TODO: make count adjustment function instead of manually changing teh values in this func
function clearEls(){
    wins = 0
    winEl.textContent = "Wins: " + wins
    losses = 0
    lossEl.textContent = "Losses: " + losses
    document.getElementById("rate-el").textContent = "Win Rate: " 
}



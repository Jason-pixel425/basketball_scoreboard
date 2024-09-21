let homePoints = document.getElementById('home-points');
let awayPoints = document.getElementById("away-points");
let reset = document.getElementById('reset');
let homeScore = 0;
let awayScore = 0;
console.log(homePoints);
console.log(awayPoints);
console.log(reset);

function homeAddOne() {
    homeScore += 1;
    homePoints.textContent = homeScore;
    
}

function homeAddTwo() {
    homeScore += 2;
    homePoints.textContent = homeScore;
}

function homeAddThree() {
    homeScore += 3;
    homePoints.textContent = homeScore;
}

function awayAddOne() {
    awayScore += 1;
    awayPoints.textContent = awayScore;
}

function awayAddTwo() {
    awayScore += 2;
    awayPoints.textContent = awayScore;
}

function awayAddThree() {
    awayScore += 3;
    awayPoints.textContent = awayScore;
}

function resetScore() {
    awayScore = 0;
    homeScore = 0;
    awayPoints.textContent = awayScore;
    homePoints.textContent = homeScore;
}

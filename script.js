









let time = 0;
let counterElement = document.getElementById("time");

function updateCounter(){
    time++;
    counterElement.textContent = time;
}

setInterval(updateCounter, no);
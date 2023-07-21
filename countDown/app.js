let timerValue = 0;
let timerInterval;
 
function startTimer() {
    timerValue = document.getElementById("count").value;
    if (timerValue > 0) {
        timerInterval = setInterval(() => {
            timerValue--;
            displayTimer();
            if(timerValue === 0) {
                // stop the timer and display time is up
                stopTimer();
                document.getElementById("counter").innerHTML = "Time is up";
                document.getElementById("timerText").style.display = "none";
            }
        }, 1000);
        document.getElementById("count").value = "";
        document.getElementById("timerText").style.display = "block";
        
    } else {
        alert("Please enter a valid number");
    }
}
     // stop the timer
function stopTimer() {
    clearInterval(timerInterval);
}
    // display the timer value
function displayTimer() {
    let hours = Math.floor(timerValue / 3600);
    let minutes = Math.floor((timerValue % 3600) / 60);
    let secs = timerValue % 60;
    // check if the value is less than 10 then add 0 in front of it
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    secs = secs < 10 ? `0${secs}` : secs;
    document.getElementById("counter").innerHTML = `${hours}:${minutes}:${secs}`;
}
document.getElementById("start").addEventListener("click", startTimer);
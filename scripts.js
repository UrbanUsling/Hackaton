// script.js

let countdown; // Variable to store the countdown interval

function startCountdown() {
    // Disable the start button once pressed
    document.getElementById('startButton').disabled = true;

    let secondsRemaining = 3600; // 1 hour in seconds

    // Display the countdown initially
    displayCountdown(secondsRemaining);

    // Update the countdown every second
    countdown = setInterval(function () {
        secondsRemaining--;

        // Display the updated countdown
        displayCountdown(secondsRemaining);

        // If the countdown reaches 0, show the open website button
    
            document.getElementById('openWebsiteButton').style.display = 'block';
            document.getElementById('urlForm').style.display = 'block';
            console.log("Inne");
    }, 1000);
}

function submitAnswer(s) {
    const enteredUrl = document.getElementById('text1').value;
    if (enteredUrl==='1234'){
    document.getElementById(s).style.display = 'block';
    document.getElementById(s).style.display = 'block';
    }
}

function displayCountdown(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${hours}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

    document.getElementById('countdown').innerText = formattedTime;
}

function openWebsite() {
    // Replace 'https://www.example.com' with the URL you want to open
    const websiteUrl = 'https://github.com/Kotik112/FizzBuzz';
    window.open(websiteUrl, '_blank');
}

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
    
    document.getElementById('uppgift1').classList.remove('hidden');
    console.log("Inne");
    if (secondsRemaining === 0) {
            alert("Times up!");
        }
    }, 1000);
}

function submitAnswer(x) {

    if(x==='a'){
        const enteredPass = document.getElementById('text1').value;
        if (enteredPass==='12'){
            alert('Correct!');
            document.getElementById("uppgift2").classList.remove('hidden');
        }else{
            alert('Incorrect!');
        }
    }
    if(x==='b'){
        const enteredPass = document.getElementById('text2').value;
        if (enteredPass==='34'){
            alert('Correct!');
            document.getElementById("uppgift3").classList.remove('hidden');
        }else{
            alert('Incorrect!');
        }
    }
    if(x==='c'){
        const enteredPass = document.getElementById('text3').value;
        if (enteredPass==='56'){
            alert('Correct!');
            document.getElementById("uppgift4").classList.remove('hidden');
        }else{
            alert('Incorrect!');
        }
    }
    if(x==='d'){
        const enteredPass = document.getElementById('text4').value;
        if (enteredPass==='78'){
            alert('Correct!');
            document.getElementById("uppgift5").classList.remove('hidden');
        }else{
            alert('Incorrect!');
        }
    }
    if(x==='e'){
        const enteredPass = document.getElementById('text5').value;
        if (enteredPass==='90'){
            alert('Correct! Grattis!!');
            clearInterval(countdown);
        }else{
            alert('Incorrect!');
        }
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

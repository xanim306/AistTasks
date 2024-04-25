document.getElementById('startButton').addEventListener('click', startProgram);
function startProgram() {
    let min = 1;
    let max = 100;
    let attempts = 0;
    function guessNumber() {
        attempts++;
        let guess = Math.floor((min + max) / 2);
        let feedback = prompt("Is your number " + guess + "? (higher/lower/correct)").toLowerCase();
        if (feedback === 'higher') {
            min = guess + 1;
            guessNumber();
        } else if (feedback === 'lower') {
            max = guess - 1;
            guessNumber();
        } else if (feedback === 'correct') {
            document.getElementById('feedback').innerText = "Congratulations! Your number is " + guess + ". It took " + attempts + " attempts.";
        } else {
            alert("Please enter 'higher', 'lower', or 'correct'.");
            guessNumber();
        }
    }
    guessNumber();
}
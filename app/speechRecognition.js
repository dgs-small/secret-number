const attemptElement = document.getElementById("attempt");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognizer = new SpeechRecognition();
recognizer.lang = "pt-BR";
recognizer.start();

recognizer.addEventListener('result', (event) => {
    attempt = event.results[0][0].transcript;
    showAttemptOnScreen(attempt);
    validateAttemptValue(attempt);
});

function showAttemptOnScreen(attempt){
    attemptElement.innerHTML = `
        <div>Você disse:</div>
        <span class="box"> ${attempt} </span>
    `;
}

recognizer.addEventListener('end', () => {
    recognizer.start();
})
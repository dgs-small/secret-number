function validateAttemptValue(attempt){
    const number = +attempt;

    if (Number.isNaN(number)) {
        console.log("O valor informado não é um número");
        attemptElement.innerHTML += '<div>Valor inválido! Informe apenas números</div>'
    } else if (number < minimumValue || number > maxValue) {
        console.log("O valor está fora do limite definido!");
        attemptElement.innerHTML += `<div>Valor inválido: O valor deve estar entre ${minimumValue} e ${maxValue}</div>`
    } else if (number === sortedNumber) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou! </h2> 
        <h3>O número secreto era ${sortedNumber}</h3>
        <button id='play-again' class='btn-play-again'>Jogar Novamente</button>
        `
    } else if (number > sortedNumber) {
        attemptElement.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    } else {
        attemptElement.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    }

}

document.getElementById('play-again').addEventListener('click', (element) => {
    window.location.reload();
})
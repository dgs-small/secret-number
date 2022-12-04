const minimumValue = 1;
const maxValue = 1000;

const sortedNumber = parseInt((Math.random() * maxValue) + 1);
console.log(`Número secreto: ${sortedNumber}`);
// alert(sortedNumber)

const minimumValueElement = document.getElementById('menor-valor');
minimumValueElement.innerHTML = minimumValue;

const maxValueElement = document.getElementById('maior-valor');
maxValueElement.innerHTML = maxValue;

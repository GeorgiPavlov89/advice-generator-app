
const adviceId = document.getElementById('advice-id');
const advice = document.getElementById('advice');
const getAdvice = document.getElementById('getAdvice')

window.onload = () => {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let advices = data;
            adviceId.innerText = "#" + advices.slip.id;
            advice.innerText = advices.slip.advice;
        })
        .catch((error) => {
            console.log(error.message);
        })
}


function getAdviceHandler() {

    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let advices = data;
            adviceId.innerText = "#" + advices.slip.id;
            advice.innerText = advices.slip.advice
        })
        .catch((error) => {
            console.log(error.message);
        })
}

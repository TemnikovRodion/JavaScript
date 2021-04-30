const ARROW_POINT = 180 / 12;
const COUNTER_POINT = 100 / 12;

const TIME_OUT = 20;
const ANIMATION_DURATION = 300;

let arrowRotate = 0;
let counterValue = 0;

function onCheckboxClick(event) {
    let isChecked = event.target.checked;
    let arrow = document.getElementById('arrow');
    let counter = document.getElementById('counter');

    let animationCounter = 0;
    let timer = setInterval(function () {
        if (animationCounter === ANIMATION_DURATION / TIME_OUT) {
            clearInterval(timer);
            return;
        } // if

        if (isChecked) {
            arrowRotate += ARROW_POINT / (ANIMATION_DURATION / TIME_OUT);
            counterValue += COUNTER_POINT / (ANIMATION_DURATION / TIME_OUT);
        }
        else {
            arrowRotate -= ARROW_POINT / (ANIMATION_DURATION / TIME_OUT);
            counterValue -= COUNTER_POINT / (ANIMATION_DURATION / TIME_OUT);
        } // if

        arrow.style.transform = 'rotateZ(' + arrowRotate + 'deg)';
        counter.innerHTML = Math.round(counterValue).toFixed(0);

        animationCounter++;
    }, TIME_OUT);
}
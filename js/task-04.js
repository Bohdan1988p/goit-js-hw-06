const counterValueRef = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0

function updateCounter() {
    counterValueRef.textContent = counterValue;
};

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateCounter(counterValue);
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    updateCounter(counterValue);
});
const buttons = document.querySelectorAll('.clickbutton');
const boxes = document.querySelectorAll('.component');
const saveInput = document.querySelector('.word');
const copyWord = document.querySelector('.repeat_word');
const savedWord = localStorage.getItem('userInput');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        boxes.forEach(box => box.classList.remove('active'));
        this.parentElement.classList.add('active');
    })
})

if (savedWord) {
    copyWord.textContent = savedWord
}

saveInput.addEventListener('input', word => {
    copyWord.textContent = word.target.value;
    localStorage.setItem('userInput', copyWord.textContent);
})








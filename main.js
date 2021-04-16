const buttons = document.querySelectorAll('.clickbutton');
const boxes = document.querySelectorAll('.component');
const saveInput = document.querySelector('.word');
const copyWord = document.querySelector('.repeat_word');
const savedWord = localStorage.getItem('userInput');

if (savedWord) {
    copyWord.textContent = savedWord
}

saveInput.addEventListener('input', word => {
    copyWord.textContent = word.target.value;
    localStorage.setItem('userInput', copyWord.textContent);
})

buttons.forEach(button => {
    button.addEventListener('click', function() {
        boxes.forEach(box => box.classList.remove('active'));
        this.parentElement.classList.add('active');

        let elementId = this.parentElement.id
        localStorage.setItem("activeId", elementId)
    })
})

let existedId = localStorage.getItem("activeId");

if (existedId) {
    document.getElementById(existedId).classList.add('active');
}

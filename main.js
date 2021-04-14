const buttons = document.querySelectorAll('.clickbutton');
const boxes = document.querySelectorAll('.component');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        boxes.forEach(box => box.classList.remove('active'));
        this.parentElement.classList.add('active');
    })
})







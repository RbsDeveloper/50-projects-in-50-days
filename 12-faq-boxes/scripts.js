const answers = document.querySelectorAll('.faq-answer');  // Select all answers
const openBtns = document.querySelectorAll('.open');  // Select all open buttons
const closeBtns = document.querySelectorAll('.close');

/*
openBtns.forEach((oBtn, index) => {
    oBtn.addEventListener('click', () => {
        // Toggle the 'hide' class on the corresponding answer (based on index)
        answers[index].classList.toggle('hide');
        oBtn.classList.toggle('hide');
        closeBtns[index].classList.toggle('hide');
    });
});

closeBtns.forEach((cBtn, index) => {
    cBtn.addEventListener('click', () => {
        // Toggle the 'hide' class on the corresponding answer (based on index)
        answers[index].classList.toggle('hide');
        cBtn.classList.toggle('hide');
        openBtns[index].classList.toggle('hide');
    });
});

const buttons = [openBtns, closeBtns];

buttons.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        answers[index].classList.toggle('hide');
        btn.classList.toggle('hide');
    })
})*/

function toggleFaq (index) {
    answers[index].classList.toggle('hide');
    openBtns[index].classList.toggle('hide');
    closeBtns[index].classList.toggle('hide');
};

openBtns.forEach((oBtn, index) => {
    oBtn.addEventListener('click', ()=>{
        toggleFaq(index);
    })
});

closeBtns.forEach((cBtn, index) => {
    cBtn.addEventListener('click', ()=>{
        toggleFaq(index);
    })
});
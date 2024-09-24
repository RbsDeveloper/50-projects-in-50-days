const numbers = document.querySelectorAll('.numbers');


/*
    //This was my first solution, it works well but there is a small problem, the numbers don't finish at the same time, there is a small gap between them

    window.addEventListener('DOMContentLoaded', ()=>{
        numbers.forEach(number => {
            incrementMe(number)
        })
    })


function incrementMe (input) {
    const target = +input.dataset.target;
    
    for (let i = 0; i <= target; i++){
        setTimeout(()=> {
            input.innerText = i;
        }, i*0.1)
    }
}*/

numbers.forEach(number => {
    number.innerText = '0';

    const updateNumber = () => {
        const target = +number.getAttribute('data-target');
        const c = +number.innerText;

        const increment = target / 200;

        if(c < target) {
            number.innerText = `${Math.ceil(c+increment)}`;
            setTimeout(updateNumber, 1)
        } else {
            number.innerText = number.getAttribute('data-target');
        }
    }
    updateNumber()
})
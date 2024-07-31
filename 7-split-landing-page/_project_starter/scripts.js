const sides = document.querySelectorAll('.side');
const playstation = document.querySelector('.left');
const xbox = document.querySelector('.right');


sides.forEach(side=> {
    side.addEventListener('mouseenter', ()=> {
        if(side.classList.contains('left')){
            playstation.style.width = '75%';
            xbox.style.width = "25%";
        } else {
            xbox.style.width = "75%";
            playstation.style.width = '25%';
        }
    })

    side.addEventListener('mouseleave', ()=> {
        playstation.style.width= '50%';
        xbox.style.width = '50%';
    })
})



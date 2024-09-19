const bEvent = document.getElementById('beforeEvent');
const hugeKey = document.querySelector('.hugeKey')
const key = document.querySelector('.key');
const keycode = document.querySelector('.keycode');
const code = document.querySelector('.code');


document.addEventListener('keydown', (e) => {

    const ids = ['hugeKey', 'afterEvent'];
    const animations = [
        'scaleUp',
        'fadeIn',
        'fadeOut',
        'bounce',
        'shake',
        'rotate',
        'pulse',
        'expandWidth',
        'slideIn',
        'slideOut'
    ];
    const classToAdd = 'visible';

    bEvent.classList.remove('visible');

    ids.forEach(id => {
        const element = document.getElementById(id);
        if(element) {
            element.classList.add(classToAdd);
        }
    });

    function getRandomAnimation() {
        const randomIndex = Math.floor(Math.random()*animations.length);
        return animations[randomIndex];
    }

    const randomAnimation = getRandomAnimation();

    hugeKey.style.animation = `${randomAnimation} 1s ease-in-out`;
    
    setTimeout(()=> {
        hugeKey.style.animation ='';
    }, 1000);

    if(e.code ==='Space'){
        hugeKey.textContent = 'space';
        key.textContent = 'space';
    } else {
        hugeKey.textContent = e.key;
        key.textContent = e.key;
    }
    keycode.textContent = e.keyCode;
    code.textContent = e.code;
    
    console.log(e);
})

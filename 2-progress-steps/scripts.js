const steps = document.querySelectorAll('.circle');
const progressBar = document.getElementById('progress');
const previousBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentStep = 1;
let progress = 0;


nextBtn.addEventListener('click', () => {
    currentStep++;
    if(currentStep > steps.length){
        currentStep = steps.length
    }
    
    update();
});

previousBtn.addEventListener('click', ()=>{
    currentStep--;
    if(currentStep < 1) {
        currentStep = 1
    }

    update();
});

function update() {
    steps.forEach((step, idx) => {
        if(idx < currentStep){
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progressBar.style.width = (actives.length -1) / (steps.length - 1) * 100 + '%'

    if(currentStep === 1){
        previousBtn.disabled = true;
    } else if (currentStep === steps.length) {
        nextBtn.disabled = true;
    } else {
        previousBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

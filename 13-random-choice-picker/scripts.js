const textArea = document.getElementById('choices');
const choiceZone = document.getElementById('hello');

textArea.focus();

textArea.addEventListener('keyup', (event) => {
    createTags(event.target.value);

    if(event.key==='Enter'){
        setInterval(()=>{
            event.target.value = '';
        },10);

        randomSelect();
    }
});

function createTags(input) {
    const choices = input.split(',').filter(choice => choice.trim() !== '').map(choice => choice.trim());
    console.log(choices);

    choiceZone.innerHTML = '';

    choices.forEach(choice => {
        const choiceEl = document.createElement('span');
        choiceEl.classList.add('choice');
        choiceEl.innerText = choice;
        choiceZone.appendChild(choiceEl);
    });
};

function randomSelect () {
    const times =30;

    const interval = setInterval(()=> {

        const randomSpan = pickRandomSpan();

        highlight(randomSpan);

        setTimeout(()=>{
            deHighlight(randomSpan);
        },100 )

    },100)

    setTimeout(()=> {
        clearInterval(interval);

        setTimeout(()=> {
            const randomSpan = pickRandomSpan();
            highlight(randomSpan)
        },100)

    }, times*100)

};

function pickRandomSpan () {
    const spans = document.querySelectorAll('.choice');
    return spans[Math.floor(Math.random() * spans.length)];
}

function highlight(span) {
    span.classList.add('highlight')
};

function deHighlight(span) {
    span.classList.remove('highlight')
};


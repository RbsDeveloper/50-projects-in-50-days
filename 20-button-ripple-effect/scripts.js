const buttons = document.querySelectorAll('.ripple')

buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        //These variables store the coordinates of the click on the entire viewport, not inside the button;
        const x = e.clientX;
        const y = e.clientY;
        //These variables stores the coordinates of the button clicked;
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        //Now we calculate the coordinates where we clicked inside the button;
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside+'px';
        circle.style.left = xInside+'px';        

        this.appendChild(circle);

        setTimeout(()=> circle.remove(), 500)
    })  
});
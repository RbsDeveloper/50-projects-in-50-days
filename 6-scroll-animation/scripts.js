const containers = document.querySelectorAll('.container');

window.addEventListener('scroll', () => {
    containers.forEach(container => {
        
        const triggerPoint = window.innerHeight / 5 * 4;

        if(container.getBoundingClientRect().top < triggerPoint) {
            container.classList.add('show')
        } else {
            container.classList.remove('show')
        }
    })
})


    let loadText = document.querySelector('.loading-text');
    let bg = document.querySelector('.bg');
  
    let percentage = 0;

    let int = setInterval(deBlurring, 30);

    function deBlurring () {
        percentage ++;

        if(percentage > 99) {
           clearInterval(int) 
        }

        loadText.innerText =   `${percentage}%`;
        loadText.style.opacity = scale(percentage, 0, 100, 1, 0);   
        bg.style.filter = `blur(${scale(percentage, 0, 100, 30, 0)}px)`
    }

    /*https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers */

    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

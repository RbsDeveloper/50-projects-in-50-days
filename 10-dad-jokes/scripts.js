const btn = document.getElementById("jokeBtn");
const jokePlaceholder = document.getElementById("joke");



const fetchJoke = async () => {
    try {
        const fetchedData = await fetch('https://icanhazdadjoke.com', { 
            headers: {
                'Accept': 'application/json'
            }}
        );
        const response = await fetchedData.json();
        jokePlaceholder.innerText = response.joke;
    } catch (error) {
        console.error('error occured while fetching data', error);
        }
}

fetchJoke();

btn.addEventListener('click', fetchJoke);



const API_KEY = 'cc93f52162e8da136694f69e007e673b';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


//Get Initial Movies

getMovies(API_URL);

async function getMovies(url) {
    const response = await fetch(url)
    const data = await response.json()

    loadPage(data.results)
}

function loadPage(movies){
    main.innerHTML='';

    movies.forEach(movie  => {
        /*Destructuring parameters which all came from the API URL above.*/
        const {title, vote_average, overview, poster_path} = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML=`
                <img src=${IMG_PATH + poster_path} alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}" id="rating">${vote_average}</span>
                </div>

                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
        `
        main.appendChild(movieEl)

    })
}

function getClassByRate (vote) {
    if(vote>=8){
        return 'green'
    } else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const searchTerm = search.value;

    if(searchTerm && searchTerm !==''){
        getMovies(SEARCH_URL + searchTerm);
        //this is used to clear the search with an empty string when we click enter.
        search.value = '';
    } else {
        /*This just reloads the page*/
        window.location.reload();
    }
})


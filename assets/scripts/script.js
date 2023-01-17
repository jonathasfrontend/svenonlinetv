const filmesseriescontent = document.querySelector('.filmes-series');
const desenhosanimados = document.querySelector('.desenhos-animados');
const variedades = document.querySelector('.variedades');
const esports = document.querySelector('.esports');
const banner = document.getElementById('banner');

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=pt-BR&page=1')
.then(response=> response.json())
.then(data=>{
    data.results.map((i,j)=>{      
        if(j > 18)
        return;
        if(j == 0){
            banner.innerHTML+=`
            <img src="https://image.tmdb.org/t/p/original`+i.backdrop_path+`" alt="">
            
            <div class="title-banner">
                <div class="texts">
                    <h1>${i.title }</h1>
                    <p>${i.overview}</p>
                </div>

                <div class="img-poster">
                    <img src="https://image.tmdb.org/t/p/original`+i.poster_path+`" alt="">
                </div>
            </div>
            `;
        }
    })
})

fetch('https://tvonline-delta.vercel.app/')
.then(response => response.json())
.then(data=>{
data.forEach(element => {
    element.filmesseries.map(filme =>  {

        filmesseriescontent.innerHTML += `
            <div class="card">
            <img src="${filme.image}" alt="Sven tv online" class="img-banner-play">
            <div class="titles-card">
                <a href="${filme.link}"><img src="./assets/img/tv.svg" alt=""><h1>${filme.title}</h1></a>
            </div>
            </div>
            `;
    })

})

data.forEach(element => {
    element.desenhosanimados.map(filme => {

        desenhosanimados.innerHTML += `
            <div class="card">
            <img src="${filme.image}" alt="Sven tv online" class="img-banner-play">
            <div class="titles-card">
                <a href="${filme.link}"><img src="./assets/img/tv.svg" alt=""><h1>${filme.title}</h1></a>
            </div>
            </div>
            `;
    })
})

data.forEach(element => {
    element.variedades.map(filme => {

        variedades.innerHTML += `
            <div class="card">
            <img src="${filme.image}" alt="Sven tv online" class="img-banner-play">
            <div class="titles-card">
                    <a href="${filme.link}"><img src="./assets/img/tv.svg" alt=""><h1>${filme.title}</h1></a>
            </div>
            </div>
            `;
    })
})
    
data.forEach(element => {
    element.sport.map(filme => {

        esports.innerHTML += `
            <div class="card">
            <img src="${filme.image}" alt="Sven tv online" class="img-banner-play">
            <div class="titles-card">
                    <a href="${filme.link}"><img src="./assets/img/tv.svg" alt=""><h1>${filme.title}</h1></a>
            </div>
            </div>
            `;
    })
})
    
})
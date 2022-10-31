const filmesseriescontent = document.querySelector('.filmes-series');
const desenhosanimados = document.querySelector('.desenhos-animados');
const variedades = document.querySelector('.variedades');
const banner = document.getElementById('banner');

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=2').then(response=> response.json()).then(data=>{
    data.results.map((i,j)=>{
        if(j > 18)
        return;
        if(j == 0){
            banner.innerHTML+=`
            <img src="https://image.tmdb.org/t/p/original`+i.backdrop_path+`" alt="">
            `;
        }
    })
})

fetch('https://apitvonline.herokuapp.com/clients').then(response => response.json()).then(data=>{
data.forEach(element => {
    element.filmesseries.map(filme =>  {

        filmesseriescontent.innerHTML += `
            <div class="card">
            <img src="${filme.image}" alt="Sven tv online">
            <div class="titles-card">
                <a href="${filme.link}"><h1>${filme.title}</h1></a>
            </div>
            </div>
            `;
    })

})

data.forEach(element => {
    element.desenhosanimados.map(filme => {

        desenhosanimados.innerHTML += `
            <div class="card">
            <img src="${filme.image}" alt="Sven tv online">
            <div class="titles-card">
                <a href="${filme.link}"><h1>${filme.title}</h1></a>
            </div>
            </div>
            `;
    })
})

data.forEach(element => {
    element.variedades.map(filme => {

        variedades.innerHTML += `
            <div class="card">
            <img src="${filme.image}" alt="Sven tv online">
            <div class="titles-card">
                    <a href="${filme.link}"><h1>${filme.title}</h1></a>
            </div>
            </div>
            `;
    })
})
    
})
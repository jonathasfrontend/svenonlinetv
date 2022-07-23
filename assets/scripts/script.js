const filmesseriescontent = document.querySelector('.filmes-series');
const desenhosanimados = document.querySelector('.desenhos-animados');
const variedades = document.querySelector('.variedades');

fetch('https://apitvonline.herokuapp.com/clients').then(response=> response.json()).then(data=>{

    data.forEach(element => {
        element.filmesseries.map(filme => {

            filmesseriescontent.innerHTML += `
                <div class="card">
                <a href="${filme.link}"><img src="${filme.image}" alt="Sven tv online"></a>
                <div class="titles-card">
                    <h1>${filme.title}</h1>
                </div>
                </div>
                `;
        })
    })

    data.forEach(element => {
        element.desenhosanimados.map(filme => {

            desenhosanimados.innerHTML += `
                <div class="card">
                <a href="${filme.link}"<img src="${filme.image}" alt="Sven tv online"></a>
                <div class="titles-card">
                    <h1>${filme.title}</h1>
                </div>
                </div>
                `;
        })
    })
    data.forEach(element => {
        element.variedades.map(filme => {

            variedades.innerHTML += `
                <div class="card">
                <a href="${filme.link}"><img src="${filme.image}" alt="Sven tv online"></a>
                <div class="titles-card">
                    <h1>${filme.title}</h1>
                </div>
                </div>
                `;
        })
    })
    
})
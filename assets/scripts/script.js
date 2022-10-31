const filmesseriescontent = document.querySelector('.filmes-series');
const desenhosanimados = document.querySelector('.desenhos-animados');
const variedades = document.querySelector('.variedades');

fetch('https://apitvonline.herokuapp.com/clients').then(response=> response.json()).then(data=>{

    data.forEach(element => {
        element.filmesseries.map(filme => {

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
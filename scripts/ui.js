const containerPokemons = document.getElementById('container');

export const printPokemons = (listPokemons) => {
    console.log(listPokemons)
    containerPokemons.innerHTML = '';
    listPokemons.forEach(pokemon => {
        const {info} = pokemon;
        console.log(info);
        const {abilities,types,sprites}=info;
        console.log(sprites.front_default);
       
        let typepokemon="";
        types.forEach(item=>{
           typepokemon +=`

           <span> ${item.type.name} </span>
           `
        })
        
        let habilidadespokemon="";
        abilities.forEach(item=>{
            habilidadespokemon +=`
           
            <span class="info-text">${item.ability.name} </span>
            `

        })
        
        
        
        containerPokemons.innerHTML += `
        <section class="charizard-container">
            <div class="title">
                <figure>
                    <img src="https://static.vecteezy.com/system/resources/previews/001/188/706/original/flame-png.png" alt="llama">
                </figure>
                <h2>CHARIZARD ${pokemon.name} </h2>
            </div>
            <figure class="image-charizard">
                <img src="${sprites.front_default} " alt="imgdepokemon">
            </figure>
        </section>
        <article class="info-pokemon">
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">No.</span>
                    <span class="info-text">006</span>
                </div>
                <div class="row-item">
                    <span class="title-info">LEVEL</span>
                    <span class="info-text">${info.base_experience}</span>
                </div>
            </div>
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">TYPE</span>
                    <span class="info-text">${typepokemon} </span>
                </div>
                <div class="row-item">
                    <span class="title-info">HABILITY</span>
                    <span class="info-text">${habilidadespokemon}</span>
                </div>
            </div>
            <div class="row-info">
                <div class="row-item">
                    <span class="title-info">HEIGHT</span>
                    <span class="info-text">${info.height}</span>
                </div>
                <div class="row-item">
                    <span class="title-info">WEIGHT</span>
                    <span class="info-text">${info.weight}</span>
                </div>
            </div>
        </article>
        `
    });
}
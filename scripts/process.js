export const getInfo = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const {
    data: { results },
  } = await axios.get(URL);

  // results.forEach(async (pokemon, index) => {
  //     const {data} = await axios.get(pokemon.url)
  //     results[index].info = data
  // });
  return results;
};

export const getDataUnique = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
export const filtrado =(data)=>{
  let datosFiltrar=[]
  datosFiltrar=data
  const input = document.getElementById("inputbarra");
  const btnSearch = document.getElementById("btnsearch");
  const busqueda =()=>{
    
    let query = input.value
    
    input.value=""
    
    const filtro=()=>{
      console.log(query);
      console.log(datosFiltrar)
      let filtradofinal= datosFiltrar.filter((some)=>
        some.name.includes(query)

      )
      
      console.log(filtradofinal);
      const containerPokemons = document.getElementById("container");
      const printPokemons = (listPokemons) => {
        console.log(listPokemons);
        containerPokemons.innerHTML = "";
        listPokemons.forEach((pokemon) => {
          const { info } = pokemon;
          console.log(info);
          const { abilities, types, sprites } = info;
          console.log(sprites.front_default);
      
          let typepokemon = "";
          types.forEach((item) => {
            typepokemon += `
      
                 <span> ${item.type.name} </span>
                 `;
          });
      
          let habilidadespokemon = "";
          abilities.forEach((item) => {
            habilidadespokemon += `
                 
                  <span class="info-text">${item.ability.name} </span>
                  `;
          });
      
          containerPokemons.innerHTML += `
              <section class="charizard-container">
                  <div class="title">
                      <figure>
                          <img src="https://static.vecteezy.com/system/resources/previews/001/188/706/original/flame-png.png" alt="llama">
                      </figure>
                      <h2>${pokemon.name} </h2>
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
              `;
        });
      };
      printPokemons(filtradofinal)
      
    }
    filtro()
  }
  
  btnSearch.addEventListener("click",busqueda)
}


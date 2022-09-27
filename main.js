import { getDataUnique} from "./scripts/process.js";
import {renderponkemon} from "./scripts/ui.js";


const filtrado = () => {
  const input = document.getElementById("inputbarra");
  const btnSearch = document.getElementById("btnsearch");
  const busqueda = async () => {
    let query = input.value;
    if (query=="") {
      
    }else{
    const URLpokemon = `https://pokeapi.co/api/v2/pokemon/${query}`;
    let infoPokemon = await getDataUnique(URLpokemon);
    renderponkemon(infoPokemon)
    input.value = "";}
  };

  btnSearch.addEventListener("click", busqueda);
};
filtrado()

document.addEventListener("click",async({ target }) => {
  if (target.classList.contains('imgfooter')) {
    const name=target.getAttribute('name')
    const URLpokemon=`https://pokeapi.co/api/v2/pokemon/${name}`
    let infoPokemon = await getDataUnique(URLpokemon);
    renderponkemon(infoPokemon)
  }
  
});


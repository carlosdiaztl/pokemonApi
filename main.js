import { getDataUnique, getInfo } from "./scripts/process.js";
import { printPokemons } from "./scripts/ui.js";
const input = document.getElementsByClassName("input");
const btnSearch = document.getElementById("btnsearch");

// const esconder = () => {
//   if (input.classlist.contain("hidden")) {
//     input.classlist.remove("hidden");
//   } else {
//     input.classlist.add("hidden");
//   }
// };
// btnsearch.addEventListener("click", esconder);

const mainFunction = async () => {
  let data = await getInfo();
  let responseInfo = [];
  data.forEach((element) => {
    let infoPokemons = getDataUnique(element.url);
    responseInfo.push(infoPokemons);
  });

  const newResponse = await Promise.all(responseInfo);

  data.forEach((_, index) => {
    data[index].info = newResponse[index];
  });
  data.splice(6, 14);
  filterArray("charmander", data);
};

mainFunction();
// nueva funcion

const filterArray = (text, data) => {
  let query = data.filter((element) => element.name === text);
  console.log(query);
};
// const handleSearch = () => {
//   let q = input.value;
//   filterArray(q);
// };
// btnSearch.addEventListener("click", handleSearch);
// //hola

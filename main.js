import { getDataUnique, getInfo, filtrado} from "./scripts/process.js";



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
  console.log(data);

  let datosFiltrar=[]
  datosFiltrar=data
  console.log(datosFiltrar);
  filtrado(datosFiltrar)


  // data.splice(1, 19);
  // printPokemons(data)
  // filterArray("charmander", data);
};

mainFunction();
// nueva funcion

// const filterArray = (text, data) => {
//   let query = data.filter((element) => element.name === text);
//   console.log(query);
// };
// const handleSearch = () => {
//   let q = input.value;
//   filterArray(q);
// };
// btnSearch.addEventListener("click", handleSearch);
// //hola

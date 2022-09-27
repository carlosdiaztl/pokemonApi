import { getDataUnique, getInfo } from "./scripts/process.js";
import { printPokemons } from "./scripts/ui.js";

const mainFunction = async () => {
    let data = await getInfo();
    let responseInfo = [];
    data.forEach(element => {
        let infoPokemons = getDataUnique(element.url);
        responseInfo.push(infoPokemons)
    });

    const newResponse = await Promise.all(responseInfo);

    data.forEach((_, index) => {
        data[index].info = newResponse[index];
    })
    data.splice(6,14)
    printPokemons(data);
}

mainFunction();
// nueva funcion
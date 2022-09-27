export const getInfo = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
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

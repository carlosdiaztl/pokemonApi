
export const getDataUnique = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
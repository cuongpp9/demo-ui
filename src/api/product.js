import axios from 'axios';

const URL_API = 'https://5eafd5000605ed0016d2ceca.mockapi.io/products';

export const getListProductsFromAPI = () => axios.get(`${URL_API}`);

export const editProductFromAPI = payload => {
  const { id, ...rest } = payload;
  return axios.put(`${URL_API}/${id}`, rest);
};

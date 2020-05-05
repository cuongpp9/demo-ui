import axios from 'axios';

const URL_API = 'https://5eafd5000605ed0016d2ceca.mockapi.io/list-user';

export const getListUserFormAPI = () => axios.get(`${URL_API}`);

export const deleteUserFromAPI = id => {
  return axios.delete(`${URL_API}/${id}`);
};

export const addNewUserFromAPI = payload => {
  return axios.post(`${URL_API}`, payload);
};

export const editUserFromAPI = payload => {
  const { id, ...rest } = payload;
  return axios.put(`${URL_API}/${id}`, rest);
};

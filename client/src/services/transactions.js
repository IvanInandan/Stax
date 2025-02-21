import axios from "axios";
const baseUrl = "/api/transactions";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = () => {
  const config = {
    headers: { Authorization: token },
  };

  const request = axios.get(baseUrl, config);
  return request.then((response) => response.data);
};

const create = (transaction) => {
  // config needs to be passed in this format with axios request for axios to read it and since API endpoint requires token through tokenExtractor middleware
  const config = {
    headers: { Authorization: token },
  };

  const request = axios.post(baseUrl, transaction, config);
  return request.then((response) => response.data);
};

const remove = (id) => {
  const config = {
    headers: { Authorization: token },
  };

  const request = axios.delete(`${baseUrl}/${id}`, config);
  return request.then((response) => response.data);
};

export default { setToken, getAll, create, remove };

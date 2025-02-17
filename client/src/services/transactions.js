import axios from "axios";
const baseUrl = "/api/transactions";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (transaction) => {
  const request = axios.post(baseUrl, transaction);
  return request.then((response) => response.data);
};

export default { getAll, create };

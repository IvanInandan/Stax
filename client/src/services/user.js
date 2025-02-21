import axios from "axios";
const baseUrl = "/api/users";

const create = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const getTransactions = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}/transactions`);
  return response.data;
};

export default { create, getTransactions };

import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  try {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
  } catch (err) {
    console.log(err);
    return;
  }
};

const create = (person) => {
  try {
    const request = axios.post(baseUrl, person);
    return request.then((response) => response.data);
  } catch (err) {
    console.log(err);
    return;
  }
};

const remove = (id) => {
  try {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then((response) => response.data);
  } catch (err) {
    console.log(err);
    return;
  }
};

export default {
  getAll,
  create,
  remove,
};

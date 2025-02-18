import axios from "axios";
const url = "http://localhost:8000/users";

const create = async (user) => {
  try {
    return await axios.create(`${url}/create`, user);
  } catch (err) {
    console.log(err);
  }
};

const get = async () => {
  try {
    return await axios.get(`${url}`);
  } catch (err) {
    console.log(err);
  }
};

const update = async (user) => {
  try {
    return await axios(`${url}/${user.id}`);
  } catch (err) {
    console.log(err);
  }
};

const deleteById = async (id) => {
  try {
    return await axios.delete(`${url}/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const getById = async (id) => {
  try {
    return await axios.get(`${url}/${id}`);
  } catch (err) {
    console.log(err);
  }
};

export { create, get, update, deleteById, getById };

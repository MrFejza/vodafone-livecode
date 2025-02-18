import axios from "axios";
const url = "http://localhost:8000/users";


const create = async (user) => {
  try {
    const response = await axios.post(url, user); 
    return response;
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
};

const get = async () => {
  try {
    const response = await axios.get(url); 
    return response;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
};

const update = async (user) => {
  try {
    const response = await axios.put(`${url}/${user.id}`, user); 
    return response;
  } catch (err) {
    console.error("Error updating user:", err);
    throw err;
  }
};

const deleteById = async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`); 
    return response;
  } catch (err) {
    console.error("Error deleting user:", err);
    throw err;
  }
};

const getById = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`); 
    return response;
  } catch (err) {
    console.error("Error fetching user by ID:", err);
    throw err;
  }
};

export { create, get, update, deleteById, getById };

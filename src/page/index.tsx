import { useEffect, useState } from "react";
import UserTable from "../components/table";
import { users } from "../../data/db.json";
import { create, get, update, deleteById, getById } from "../services";

const Page = () => {
  const [usersDate, setUsers] = useState(users);
  const [errorStatus, setErrorStatus] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const response = await get();

    if (response?.data.status !== 200) {
      setUsers(response.data);
    } else {
      setErrorStatus({ status: true, message: response.data.message });
    }
  };


  
  const createUser = async (data) => {
    try {
      const response = await create(data);
      if (response.status === 201) { 
        setUsers((prevUsers) => [...prevUsers, response.data]); 
      } else {
        setErrorStatus({ status: true, message: "Failed to create user" });
      }
    } catch (err) {
      setErrorStatus({ status: true, message: err.message });
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      const response = await update(updatedUser); 
      if (response.status === 200) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          )
        );
      } else {
        setErrorStatus({ status: true, message: "Failed to update user" });
      }
    } catch (err) {
      setErrorStatus({ status: true, message: err.message });
    }
  };
  const deleteUser = async (id) => {
    try {
      const response = await deleteById(id); 
      if (response.status === 200) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id)); 
      } else {
        setErrorStatus({ status: true, message: "Failed to delete user" });
      }
    } catch (err) {
      setErrorStatus({ status: true, message: err.message });
    }
  };

  return (
    
      <UserTable users={usersDate} create={createUser} error={errorStatus} onUpdateUser={updateUser}  onDeleteUser={deleteUser}/>
    
  );
};

export default Page;

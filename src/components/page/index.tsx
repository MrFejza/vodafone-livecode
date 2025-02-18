import { useEffect, useState } from "react";
import UserTable from "../table";
import { users } from "../../../data/db.json";
import { create, get, update, deleteById, getById } from "../../services";

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
    const response = await create(data);
    if (response?.data.status === 200) {
      setUsers(response.data);
    } else {
      setErrorStatus({ status: true, message: response.data.message });
    }
  };

  return (
    <>
      <UserTable users={usersDate} create={createUser} error={errorStatus} />
    </>
  );
};

export default Page;

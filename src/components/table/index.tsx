import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import CreateUser from "../modal/createUser";
import "./index.css";
import { BiShow } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

const UserTable = ({ users, create,error }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CreateUser
        show={show}
        open={handleShow}
        close={handleClose}
        create={create}
        error={error}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th className="center-text">Show All</th>
            <th className="center-text">Edit</th>
            <th className="center-text">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>
                <Button variant="primary" className="center-btn">
                  <BiShow />
                </Button>
              </td>
              <td>
                <Button variant="primary" className="center-btn">
                  <CiEdit />
                </Button>
              </td>
              <td>
                <Button variant="danger" className="center-btn">
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default UserTable;

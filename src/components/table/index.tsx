import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import CreateUser from "../modal/createUser";
import ViewUserModal from "../modal/ViewUserModal";
import EditUserModal from "../modal/EditUserModal";
import DeleteConfirmationModal from "../modal/DeleteUserModal";
import { BiShow } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import "./index.css";

const UserTable = ({ users, create, error, onUpdateUser, onDeleteUser }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for delete modal
  const [selectedUser, setSelectedUser] = useState(null);

  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleShowCreateModal = () => setShowCreateModal(true);

  const handleCloseViewModal = () => setShowViewModal(false);
  const handleShowViewModal = (user) => {
    setSelectedUser(user);
    setShowViewModal(true);
  };

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    onDeleteUser(selectedUser.id); // Call the onDeleteUser function passed from the parent
    handleCloseDeleteModal(); // Close the modal
  };

  return (
    <>
      {/* Create User Modal */}
      <CreateUser
        show={showCreateModal}
        open={handleShowCreateModal}
        close={handleCloseCreateModal}
        create={create}
        error={error}
      />

      {/* View User Modal */}
      <ViewUserModal
        show={showViewModal}
        onHide={handleCloseViewModal}
        user={selectedUser}
      />

      {/* Edit User Modal */}
      <EditUserModal
        show={showEditModal}
        onHide={handleCloseEditModal}
        user={selectedUser}
        onSave={onUpdateUser}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        show={showDeleteModal}
        onHide={handleCloseDeleteModal}
        onConfirm={handleDelete}
      />

      {/* Table */}
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
                <Button
                  variant="primary"
                  className="center-btn"
                  onClick={() => handleShowViewModal(user)}
                >
                  <BiShow />
                </Button>
              </td>
              <td>
                <Button
                  variant="primary"
                  className="center-btn"
                  onClick={() => handleShowEditModal(user)}
                >
                  <CiEdit />
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  className="center-btn"
                  onClick={() => handleShowDeleteModal(user)}
                >
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
import React from "react";
import { Modal, Button } from "react-bootstrap";

const ViewUserModal = ({ show, onHide, user }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {user && (
          <div>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Address:</strong></p>
            <ul>
              <li><strong>Street:</strong> {user.address.street}</li>
              <li><strong>Suite:</strong> {user.address.suite}</li>
              <li><strong>City:</strong> {user.address.city}</li>
              <li><strong>Zipcode:</strong> {user.address.zipcode}</li>
              <li><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</li>
            </ul>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewUserModal;
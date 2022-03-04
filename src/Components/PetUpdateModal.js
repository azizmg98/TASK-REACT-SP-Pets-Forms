import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import petStore from "../petStore";

import React from "react";

const PetUpdateModal = ({ pet, isOpen, handleShow }) => {
  const [newPet, setNewPet] = useState({
    id: pet.id,
    name: pet.name,
    type: pet.type,
    image: pet.image,
  });

  const handleChange = (event) => {
    //{}to create a new obj> ... to spread obj > [] to indicate incoming string is key > event.target.value takes value
    setNewPet({ ...pet, [event.target.name]: event.target.value });

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.updatePet(newPet);
    handleShow();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>
      <Modal show={isOpen} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Update pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                onChange={handleChange}
                type="text"
                value={newPet.name}
              />
            </Form.Group>
            <Form.Label>Pet type</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Select
                name="type"
                onChange={handleChange}
                aria-label="Default select example"
                value={newPet.type}
              >
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Paste in yours pets image url</Form.Label>
              <Form.Control
                name="image"
                onChange={handleChange}
                type="text"
                value={newPet.image}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update pet
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PetUpdateModal;

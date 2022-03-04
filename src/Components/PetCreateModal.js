import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import petStore from "../petStore";

function PetCreateModal({ isOpen, handleShow }) {
  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    image: "",
  });

  const handleChange = (event) => {
    //{}to create a new obj> ... to spread obj > [] to indicate incoming string is key > event.target.value takes value
    setNewPet({ ...newPet, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.addPet(newPet);
    handleShow();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a pet
      </Button>
      <Modal show={isOpen} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Enter pet name"
              />
            </Form.Group>
            <Form.Label>Pet type</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Select
                name="type"
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Paste in yours pets image url</Form.Label>
              <Form.Control name="image" onChange={handleChange} type="text" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit pet
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default PetCreateModal;

import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import MultiplePizzas from "../assets/multiplePizzas.jpeg";


function Fichier() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
       <Container>
      <Row>
        <Col xs={6} md={6}>
          <Image src={MultiplePizzas} thumbnail />
        </Col>
        <Col xs={6} md={6}>
            <>
        <p id="description" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
         iatis minima nesciunt dolorem! Officiis iure rerum voluptates a
      </p>
      <h1 id="price">15000</h1>
      </>
      <>
        <Button variant="primary"  onClick={handleShow}>Commande</Button> 
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Entrez Vos Infos Pour Passer La Commande</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="nomForm.ControlInput1">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="entre ton nom" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="adresseForm.ControlInput1">
        <Form.Label> Addresse</Form.Label>
        <Form.Control type="text" placeholder="entre ton adresse" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="telForm.ControlTextarea1">
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="text" placeholder="entre ton numero de telephone" />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     </>     
        </Col>
      </Row>
      <Row>
      <Col xs={6} md={3}>
          <Image src={MultiplePizzas} fluid />
        </Col>
        <Col xs={6} md={3}>
          <Image src={MultiplePizzas} fluid />
        </Col>
        <Col xs={6} md={3}>
          <Image src={MultiplePizzas} fluid />
        </Col>
        <Col xs={6} md={3}>
          <Image src={MultiplePizzas} fluid />
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Container>
    </div>
  )
}

export default Fichier

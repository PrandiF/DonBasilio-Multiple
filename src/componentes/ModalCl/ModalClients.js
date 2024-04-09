import "./ModalCl.scss";
import { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Reveal from "../Reveal";

const ModalCl = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // variant="light"

  return (
    <div className="modalCliente">
      <button onClick={handleShow} className="button1">
        CLIENTES
      </button>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header  onClick={handleClose}>
          <div className="headerContainer">
            <IoClose className="closeModalButton" onClick={handleClose} />
          </div>
        </Modal.Header>
        <img src="./favicon.ico" alt="img2" className="logo"></img>
        <Row className="two-columns-grid"  onClick={handleClose}>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./IMG_3294.webp" alt="img2"></img>
              </Modal.Body>
            </Reveal>
          </Col>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./IMG_3299.webp" alt="img2"></img>
              </Modal.Body>
            </Reveal>
          </Col>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./IMG_3298.webp" alt="img2"></img>
              </Modal.Body>
            </Reveal>
          </Col>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./IMG_3297.webp" alt="img2"></img>
              </Modal.Body>
            </Reveal>
          </Col>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./IMG_3293.webp" alt="img2"></img>
              </Modal.Body>
            </Reveal>
          </Col>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./IMG_3294.webp" alt="img2"></img>
              </Modal.Body>
            </Reveal>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default ModalCl;

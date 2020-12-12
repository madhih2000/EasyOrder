import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { FaPlusSquare } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";

export default function Product(props) {
  const { product, onAdd } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  return (
    <React.Fragment>
      <Container className="my-1 p-0">
        <Card className="flex-row justify-content-between align-items-center">
          <Card.Img
            variant="left"
            src={product.image}
            width="60px"
            onClick={setModalIsOpenToTrue}
            className="m-2"
          />
          <div>
            <Modal
              isOpen={modalIsOpen}
              ariaHideApp={false}
              backdrop="static"
              style={{ overlay: { background: "rgba(52, 52, 52, 0.8)" } }}
            >
              <div className="d-flex flex-column h-100 align-items-center justify-content-center position-relative">
                <button
                  onClick={setModalIsOpenToFalse}
                  style={{
                    backgroundColor: "transparent",
                    outline: "none",
                    border: "none",
                    top: 0,
                    right: 0,
                  }}
                  className="ml-auto d-block justify-self-end align-self-start position-absolute"
                >
                  <AiOutlineCloseCircle
                    style={{
                      width: "36px",
                      height: "36px",
                      color: "#000",
                    }}
                  />
                </button>
                <div className="h-100 d-flex align-items-center justify-content-center">
                  <img
                    src={product.image}
                    onClick={setModalIsOpenToTrue}
                    alt="product"
                    className="mw-100 d-inline-block mx-auto"
                    style={{
                      maxHeight: "calc(100% - 50px)",
                      backfaceVisibility: "hidden",
                    }}
                  />
                </div>
              </div>
            </Modal>
          </div>
          <Card.Body style={{ marginTop: "1rem" }} className="m-0 p-0">
            <h6 className="font-weight-bold text-secondary">
              {product.englishname}
            </h6>
            <h6>{product.tamilname}</h6>
          </Card.Body>
          <div className="d-flex align-items-center justify-content-between pr-3">
            <div className="d-flex align-items-center justify-content-center mr-2">
              <small className="text-secondary">S$</small>
              <h6 className="m-0 ml-1">{product.price.toFixed(2)}</h6>
            </div>
            <button
              onClick={() => onAdd(product)}
              style={{
                border: "none",
                backgroundColor: "transparent",
                outline: "none",
              }}
            >
              <FaPlusSquare
                style={{
                  width: "32px",
                  height: "32px",
                  color: "green",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </button>
          </div>
        </Card>
      </Container>
      {/* <Card
            style={{
              marginTop: "1rem",
              flexWrap: "wrap",
              width: "auto",
            }}
          >
            <Card.Body>
              <Col>
                <div
                  style={{
                    marginLeft: "2rem",
                  }}
                >
                  <img
                    src={product.image}
                    width="100px"
                    height="100px"
                    onClick={setModalIsOpenToTrue}
                  />
                  <Modal isOpen={modalIsOpen} style={{ width: "100px" }}>
                    <Button onClick={setModalIsOpenToFalse}>
                      <AiFillCloseCircle
                        style={{
                          position: "right",
                          width: "40px",
                          height: "40px",
                          color: "yellow",
                        }}
                      />
                    </Button>
                    <img
                      src={product.image}
                      style={{ position: "absolute", height: "800px" }}
                      onClick={setModalIsOpenToTrue}
                    />
                  </Modal>
                </div>
              </Col>
              <Col sm={8}>
                <div
                  style={{
                    marginLeft: "1rem",
                    padding: "1rem",
                  }}
                >
                  <h6>{product.englishname}</h6>
                  <h6>{product.tamilname}</h6>
                </div>
              </Col>
              <Col>
                <div style={{ padding: "1rem" }}>
                  <Button onClick={() => onAdd(product)}>
                    <FaPlusSquare
                      style={{
                        float: "right",
                        width: "40px",
                        height: "40px",
                        color: "yellow",
                      }}
                    />
                  </Button>
                  <h5 style={{ margin: "1rem", float: "left" }}>
                    S${product.price}
                  </h5>
                </div>
              </Col>
            </Card.Body>
          </Card> */}
    </React.Fragment>
  );
}

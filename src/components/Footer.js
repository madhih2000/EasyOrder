import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

import Scroll from "react-scroll";

const scroller = Scroll.scroller;
export default function Footer(props) {
  const { totalPrice, countCartItems } = props;

  return (
    <Navbar bg="light" expand="lg" className="fixed-bottom mt-5">
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav"> */}
      <Container>
        <Nav className="d-flex align-items-center">
          {Number(countCartItems) > 0 && (
            <div
              style={{
                fontSize: "20px",
                marginLeft: "10px",
                fontWeight: "bold",
                borderRadius: 50,
                backgroundColor: "#e0e0e0",
                width: 30,
                height: 30,
                textAlign: "center",
              }}
            >
              <div className="px-2">{countCartItems}</div>
            </div>
          )}
          <span
            className="bg-secondary mx-1"
            style={{
              width: 2,
              height: 2,
              borderRadius: 50,
            }}
          ></span>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: 14,
            }}
            className="text-secondary"
          >
            S$ &nbsp;{totalPrice.toFixed(2)}
          </div>
        </Nav>
        <FaShoppingCart
          style={{
            width: "40px",
            height: "40px",
            color: "green",
            cursor: "pointer"
          }}
          onClick={() =>
            scroller.scrollTo("form", {
              duration: 500,
              smooth: true,
              offset: -100,
            })
          }
        />
      </Container>
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
}

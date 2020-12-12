import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
var Scroll = require("react-scroll");

var Element = Scroll.Element;
export default function Basket(props) {
  const {
    onAdd,
    onRemove,
    itemsPrice,
    taxPrice,
    totalPrice,
    cartItems,
    onPost,
  } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [postal, setPostal] = useState("");
  const [note, setNote] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [phoneErr, setPhoneErr] = useState({});
  const [addressErr, setAddressErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [postalErr, setPostalErr] = useState({});

  const formValidation = () => {
    const nameErr = {};
    const phoneErr = {};
    const addressErr = {};
    const emailErr = {};
    const postalErr = {};
    let isValid = true;

    if (name.length === 0) {
      nameErr.nameInvalid = "Please input a valid name";
      isValid = false;
    }
    if (phone.length === 0) {
      phoneErr.phoneInvalid = "Please input a valid number";
      isValid = false;
    }
    if (phone.length !== 8) {
      phoneErr.phoneInvalid = "Please input a valid number";
      isValid = false;
    }
    if (address.length === 0) {
      addressErr.addressInvalid = "Please input a valid address";
      isValid = false;
    }
    if (email.length === 0) {
      emailErr.emailInvalid = "Please input a valid email address";
      isValid = false;
    }
    if (!email.includes("@")) {
      emailErr.emailInvalid = "Please input a valid email address";
      isValid = false;
    }
    if (!email.includes(".")) {
      emailErr.emailInvalid = "Please input a valid email address";
      isValid = false;
    }
    if (postal.length === 0) {
      postalErr.postalInvalid = "Please input a valid postal code";
      isValid = false;
    }
    if (cartItems.length === 0) {
      cartItems.cartEmpty = "Cart cannot be Empty";
      isValid = false;
    }

    setNameErr(nameErr);
    setPhoneErr(phoneErr);
    setAddressErr(addressErr);
    setEmailErr(emailErr);
    setPostalErr(postalErr);

    return isValid;
  };
  return (
    <React.Fragment>
      <Container fluid className="m-0 p-0">
        <div style={{ marginBottom: "6rem" }}>
          <div>
            <form>
              <div className="p-3 bg-white rounded border">
                <div>
                  <div className="bg-success my-3 p-1 rounded d-inline-block">
                    <div
                      style={{ cursor: "pointer" }}
                      className="font-weight-bold m-0 p-0 delivery text-white d-inline-block px-2"
                    >
                      Delivery
                    </div>
                    <div
                      className="pickup text-white d-inline-block px-2 bg-white text-secondary font-weight-bold"
                      style={{
                        borderTopRightRadius: 2,
                        borderBottomRightRadius: 2,
                        cursor: "pointer",
                      }}
                    >
                      Pick-up
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name" className="font-weight-bold">
                    Name
                  </label>
                  <input
                    id="name"
                    value={name}
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  {Object.keys(nameErr).map((key) => {
                    return (
                      <div
                        style={{ color: "red", marginLeft: "0.5rem" }}
                        key={nameErr[key]}
                      >
                        {nameErr[key]}
                      </div>
                    );
                  })}
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="font-weight-bold">
                    Contact number
                  </label>
                  <input
                    id="phone"
                    value={phone}
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  {Object.keys(phoneErr).map((key) => {
                    return (
                      <div
                        style={{ color: "red", marginLeft: "0.5rem" }}
                        key={phoneErr[key]}
                      >
                        {phoneErr[key]}
                      </div>
                    );
                  })}
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="font-weight-bold">
                    Email address
                  </label>
                  <input
                    id="email"
                    value={email}
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {Object.keys(emailErr).map((key) => {
                    return (
                      <div
                        style={{ color: "red", marginLeft: "0.5rem" }}
                        key={emailErr[key]}
                      >
                        {emailErr[key]}
                      </div>
                    );
                  })}
                </div>
                <div className="form-group">
                  <label htmlFor="address" className="font-weight-bold">
                    Address
                  </label>
                  <input
                    id="address"
                    value={address}
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                  {Object.keys(addressErr).map((key) => {
                    return (
                      <div
                        style={{ color: "red", marginLeft: "0.5rem" }}
                        key={addressErr[key]}
                      >
                        {addressErr[key]}
                      </div>
                    );
                  })}
                </div>
                <div className="form-group">
                  <label htmlFor="zipcode" className="font-weight-bold">
                    Postal Code
                  </label>
                  <input
                    id="zipcode"
                    value={postal}
                    type="number"
                    className="form-control"
                    placeholder="Postal Code"
                    onChange={(e) => {
                      setPostal(e.target.value);
                    }}
                  />
                  {Object.keys(postalErr).map((key) => {
                    return (
                      <div
                        style={{ color: "red", marginLeft: "0.5rem" }}
                        key={postalErr[key]}
                      >
                        {postalErr[key]}
                      </div>
                    );
                  })}
                </div>
              </div>
              <Element name="form">
                <div className="bg-white border rounded p-2 mt-3">
                  <h5 className="title">Your Cart</h5>
                  <div
                    style={{
                      height: "auto",
                      marginBottom: "2rem",
                    }}
                  >
                    {cartItems.length === 0 && (
                      <div className="d-flex align-items-center justify-content-center border-bottom p-4">
                        <div className="text-secondary">Your cart is empty</div>
                      </div>
                    )}
                    <div className="border">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="d-flex align-items-center justify-content-between border-bottom py-2 px-1 flex-nowrap"
                        >
                          <div>
                            <span
                              onClick={() => onRemove(item)}
                              className="px-2 h-auto"
                              style={{
                                border: "3px solid #000",
                                borderRadius: "4px",
                                fontWeight: "bolder",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            >
                              -
                            </span>
                          </div>
                          <div>{item.englishname}</div>
                          <span>&nbsp;|&nbsp;</span>
                          <div>
                            {item.qty} x ${item.price.toFixed(2)}
                          </div>
                          <div>
                            <span
                              onClick={() => onAdd(item)}
                              className="px-1 h-auto"
                              style={{
                                border: "3px solid #000",
                                borderRadius: "4px",
                                fontWeight: "bolder",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            >
                              +
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {cartItems.length !== 0 && (
                      <>
                        <hr></hr>
                        <div className="text-secondary d-flex justify-content-between p-0">
                          <div>
                            <strong>Items Price</strong>
                          </div>
                          <div>
                            <strong>${itemsPrice.toFixed(2)}</strong>
                          </div>
                        </div>
                        <div className="text-secondary d-flex justify-content-between">
                          <div>Delivery Fee</div>
                          <div>${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="text-secondary d-flex justify-content-between">
                          <div>
                            <strong>Total Price</strong>
                          </div>
                          <div>
                            <strong>${totalPrice.toFixed(2)}</strong>
                          </div>
                        </div>
                        <div
                          style={{ fontSize: "12px" }}
                          className="text-secondary my-2"
                        >
                          Your order is ready to be sent via WhatsApp.
                        </div>
                        <hr />
                      </>
                    )}
                  </div>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      placeholder="Note"
                      value={note}
                      rows={3}
                      onChange={(e) => {
                        setNote(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Button
                    type="button"
                    className="btn btn-success d-block w-100"
                    onClick={() =>
                      formValidation() &&
                      onPost(cartItems, { name, phone, address, postal, note })
                    }
                  >
                    Click to WhatsApp
                  </Button>
                </div>
              </Element>
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

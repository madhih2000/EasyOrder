import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import { Container, Row, Col } from "react-bootstrap";
import ReactNotification from "react-notifications-component";
import { store } from "react-notifications-component";
import random from "alphanumeric";

import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import data from "./components/data";
import cat from "./components/cat";
import NavigationBar from "./components/NavigationBar";

function App() {
  const { products } = data;
  const { categories } = cat;
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState("");
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice > 70 ? 0 : 8;
  const totalPrice = itemsPrice + taxPrice;
  let orderID = random(5);

  var orderData =
    "New order 🛵 (SuperValueCart) \n (# " + orderID.upper + ") \n\n";

  const onPost = (cartItems, { name, phone, address, postal, note }) => {
    cartItems.forEach((item) => {
      orderData =
        orderData + "◾️\t" + item.qty + "X" + item.englishname + "\n\n";
      return orderData;
    });

    orderData =
      orderData +
      "*Payable: S$ " +
      totalPrice +
      "*" +
      "\n\n" +
      "*Customer details*\n" +
      name +
      "\n" +
      phone +
      "\n" +
      address +
      "\n" +
      postal +
      "\n\n" +
      "*Note From Customer:*\n" +
      note +
      "\n****\n______________\n(Message for customer)\n\nThank you for your order.\nPlease pay using PayNow to UEN 202030732E";

    window.open(
      "https://api.whatsapp.com/send?text=" +
        urlencode(orderData) +
        "&phone=6593868031?",
      "_blank"
    );
  };

  function urlencode(str) {
    str = str + "";
    return encodeURIComponent(str)
      .replace(/!/g, "%21")
      .replace(/'/g, "%27")
      .replace(/\(/g, "%28")
      .replace(/\)/g, "%29")
      .replace(/\*/g, "%2A")
      .replace(/~/g, "%7E")
      .replace(/%20/g, "+");
  }

  const onAdd = (product) => {
    store.addNotification({
      title: "Cart Updated",
      message: "Added to Cart Successfully",
      type: "success",
      insert: "top",
      container: "top-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    store.addNotification({
      title: "Cart Updated",
      message: "Removed from Cart Successfully",
      type: "danger",
      insert: "top",
      container: "top-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <ReactNotification />
      <Header />
      <Container
        fluid
        style={{ backgroundColor: "#f6f6f6" }}
        className="px-3 px-sm-2 px-md-4 px-lg-5 pt-4"
      >
        <Row className="px-0 px-sm-2 px-md-4 px-lg-5">
          <Col md={8}>
            <NavigationBar
              categories={categories}
              filter={filter}
              setFilter={setFilter}
            />
            <Main
              products={products.filter((prod) =>
                prod.englishname.toLowerCase().includes(filter.toLowerCase())
              )}
              onAdd={onAdd}
            />
          </Col>

          <Col md={4} sm={12}>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              itemsPrice={itemsPrice}
              taxPrice={taxPrice}
              totalPrice={totalPrice}
              onPost={onPost}
            />
          </Col>
        </Row>
      </Container>
      <div className="mt-5">
        {cartItems.length > 0 && (
          <Footer
            countCartItems={cartItems.reduce(
              (acc, value) => acc + value.qty,
              0
            )}
            totalPrice={totalPrice}
          />
        )}
      </div>
    </div>
  );
}

export default App;

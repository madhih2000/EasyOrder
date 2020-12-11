import React from "react";
import Product from "./Product";
var Scroll = require("react-scroll");
var Element = Scroll.Element;
export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main>
      <Element name="promotions">
        <h2
          id="promotions"
          style={{ fontSize: 20 }}
          className="font-weight-bold my-4"
        >
          Promotions
        </h2>
      </Element>
      <div>
        {products
          .filter((product) => product.id < 5)
          .map((filteredProduct) => (
            <Product
              key={filteredProduct.id}
              product={filteredProduct}
              onAdd={onAdd}
            />
          ))}
      </div>
      <Element name="rice">
        <h2
          id="rice"
          style={{ fontSize: 20 }}
          className="font-weight-bold my-4"
        >
          Rice
        </h2>
      </Element>
      <div>
        {products
          .filter((product) => product.id < 15 && product.id > 5)
          .map((filteredProduct) => (
            <Product
              key={filteredProduct.id}
              product={filteredProduct}
              onAdd={onAdd}
            />
          ))}
      </div>
      <Element name="dal">
        <h2 id="dal" style={{ fontSize: 20 }} className="font-weight-bold my-4">
          Dal
        </h2>
      </Element>
      <div>
        {products
          .filter((product) => product.id < 24 && product.id > 14)
          .map((filteredProduct) => (
            <Product
              key={filteredProduct.id}
              product={filteredProduct}
              onAdd={onAdd}
            />
          ))}
      </div>
      <Element name="salt">
        <h2
          id="salt"
          style={{ fontSize: 20 }}
          className="font-weight-bold my-4"
        >
          Salt
        </h2>
      </Element>
      <div>
        {products
          .filter((product) => product.id > 23)
          .map((filteredProduct) => (
            <Product
              key={filteredProduct.id}
              product={filteredProduct}
              onAdd={onAdd}
            />
          ))}
      </div>
    </main>
  );
}

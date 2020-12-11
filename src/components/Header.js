import React from "react";

function Header() {
  return (
    <div className="container py-4 overflow-none ">
      <div className="d-flex align-items-start">
        <div className="d-none d-sm-block mr-3">
          <img
            style={{ width: 64 }}
            src="https://www.supervaluecart.com/image/placeholder.png"
            className="image"
            alt="logo"
          />
        </div>
        <div className="">
          <small className="text-uppercase text-secondary font-weight-normal text-wrap">
            Order on WhatsApp from
          </small>
          <br />
          <h2 className="font-weight-bold text-wrap">SuperValueCart</h2>
          <h5 className="text-secondary">FREE Delivery Above $70</h5>
          <span className="bg-primary text-white p-1 rounded">
            Order by Thursday &amp; Get on Saturday
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;

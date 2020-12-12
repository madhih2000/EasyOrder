import React from "react";

function Header() {
  return (
    <div className="container py-4 px-1 overflow-none ">
      <div className="d-flex align-items-start">
        <div className="mr-0 mr-sm-3 mt-3">
          <img
            style={{ maxWidth: 78, minWidth: 48 }}
            src="https://www.supervaluecart.com/image/placeholder.png"
            className="image w-sm-100 w-75"
            alt="logo"
          />
        </div>
        <div className="">
          <small
            className="text-uppercase text-secondary font-weight-normal text-wrap word-wrap"
            style={{ wordBreak: "break-all" }}
          >
            Order on WhatsApp from
          </small>
          <br />
          <h2 className="font-weight-bold text-wrap">SuperValueCart</h2>
          <h5 className="text-secondary">FREE Delivery Above $70</h5>
          <span className="bg-primary text-white p-1 rounded">
            order by Thursday &amp; Get on Saturday
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;

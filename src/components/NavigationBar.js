import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Scroll from "react-scroll";

const scroller = Scroll.scroller;
export default function NavigationBar({ categories, filter, setFilter }) {
  const [showNav, setShowNav] = useState(true);

  return (
    <React.Fragment>
      <Nav className="sticky-top bg-white m-0 p-0">
        <Navbar className="overflow-auto nav-bar py-0 d-flex w-100">
          {showNav && (
            <img
              src={require("../search.png")}
              alt="search"
              style={{ width: 24 }}
              onClick={() => setShowNav(false)}
            />
          )}
          {!showNav && (
            <div style={{ width: "100%" }} className="flex-grow-1">
              <div className="input-group my-1" style={{ width: "100%" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
                <div
                  className="input-group-append"
                  onClick={() => setShowNav(true)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="input-group-text text-dark">&#x292B;</div>
                </div>
              </div>
            </div>
          )}
          {showNav &&
            categories.map((category) => (
              <span
                key={category.href}
                className="px-3 m-0 text-decoration-none text-dark text-nowrap py-2"
                onClick={() =>
                  scroller.scrollTo(category.href, {
                    duration: 500,
                    smooth: true,
                    offset: -100,
                  })
                }
              >
                {category.category}
              </span>
            ))}
        </Navbar>
      </Nav>
      {/* <Form inline>`
        <FormControl
          type="text"
          name="query"
          placeholder="Search..."
          className="mr-sm-2"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </React.Fragment>
  );
}

import { Button } from "bootstrap";
import React from "react";

const Navbar = () => {
  return (
    // <div
    //   className="bg-gradient-primary border-radius-lg"
    //   style={{ marginTop: "18px" }}
    // >
    <nav
      className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
      id="navbarBlur"
      navbar-scroll="true"
    >
      <div className="container-fluid py-1 px-3">
        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <div className="navbar-nav  justify-content-end">
            <div className="nav-item d-flex align-items-center font-weight-bold ">
              <button
                type="button"
                className="btn btn-lg btn-link btn-outline-secondary border-radius-lg "
                style={{ borderWidth: "2px" }}
              >
                <i className="fa fa-user me-sm-2 "></i>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // </div>
  );
};

export default Navbar;

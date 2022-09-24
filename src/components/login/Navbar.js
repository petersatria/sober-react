import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand className="ms-4">
          <Link to="/">
            <img src={require("../../assets/sober.png")} className="img-fluid img-nav" alt="PHLOX" />
            <span className="bold ms-2" style={{ color: "black", height: "1000px" }}>
              |
            </span>
          </Link>
            <span className="ms-3 nav-text">Login</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

import React from "react";
import "../css/login.css";
import NavigationBar from "../components/login/Navbar";
import BodyTagline from "../components/login/BodyTagline";
import FormBody from "../components/login/FormBody";

const Login = () => {
  return (
    <div>
      <section className="general-area">
        <NavigationBar />
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <BodyTagline />
            <FormBody />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

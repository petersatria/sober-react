import React, { useState } from "react";
import GoogleLoginButton from "./GoogleLoginButton";
import FacebookLoginButton from "./FacebookLoginButton";
import { Link, useNavigate } from "react-router-dom";
import { setCookie } from "../../moduleComponents/cookie";
import { notifications, errorNotification } from "../../moduleComponents/notification";
import "sweetalert2/src/sweetalert2.scss";

const FormBody = () => {
  const navigate = useNavigate();
  const axios = require("axios").default;
  // state
  const [iconPass, setIconPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // function
  const userLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/loginData", {
        username: username,
        password: password,
      });
      console.log(response);
      let isNotif = await notifications(response);
      if (isNotif) {
        setCookie(`cookie-${username}`, JSON.stringify(response.data.sendData), 1);
        navigate("/");
        return;
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        await notifications(error.response);
        return;
      }
      console.log(error);
      errorNotification();
    }
  };

  // Function for JSX
  const passIconTrigger = () => (
    <input
      type={iconPass ? "text" : "password"}
      id="password"
      className="form-control form-control-lg"
      onChange={(e) => {
        setPassword(e.target.value);
      }}
    />
  );
  const passIconImg = () => <i className={iconPass ? "bi bi-eye-slash-fill input-group-text pb-3" : "bi bi-eye-fill input-group-text pb-3"} onClick={() => setIconPass(!iconPass)} id="togglePassword"></i>;

  // render
  return (
    <div className="col-md-7 col-sm-10 col-lg-5 col-xl-5 offset-xl-1 px-md-3 py-md-3 form-area">
      <form>
        <div className="mt-sm-0 mb-sm-1 divider d-flex align-items-center ">
          <span className="mx-3 text-center text-dark fw-bold">Sign in</span>
        </div>
        {/* <!-- Email input --> */}
        <div className="form-outline ">
          <label className="form-label" htmlFor="form1Example13">
            Username
          </label>
          <input
            type="text"
            id="form1Example13"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="form-control form-control-lg"
          />
        </div>
        {/* <!-- Password input --> */}
        <div className="form-outline ">
          <label className="form-label" htmlFor="form1Example23">
            Password
          </label>
          <div className="input-group">
            {passIconTrigger()}
            {passIconImg()}
          </div>
        </div>
        <div className="d-flex justify-content-end mb-3 mt-1 me-3">
          {/* <!-- Checkbox --> */}
          <Link to="forgotPassword" id="forgot-password">
            Forgot Password ?
          </Link>
        </div>
        {/* <!-- Submit button --> */}
        <button type="submit" className="btn btn-primary btn-md" id="btn-submit" onClick={userLogin}>
          Sign in
        </button>
        <div className="divider d-flex align-items-center my-3">
          <span className="text-center fw-bold mx-3 mb-0">OR</span>
        </div>
        <GoogleLoginButton />
        <FacebookLoginButton />
        <div className="register text-center mt-1 mb-2">
          <span className="me-2">Don't have account ?</span>
          <Link to="signup" id="register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormBody;
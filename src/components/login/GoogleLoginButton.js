import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../moduleComponents/cookie";
import { errorNotification, notificationSocialLogin } from "../../moduleComponents/notification";
import jwt_decode from "jwt-decode";
import "sweetalert2/src/sweetalert2.scss";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const axios = require("axios").default;

  const [googleUsername, setGoogleUsername] = useState("");
  const [googleEmail, setGoogleEmail] = useState("");
  const [googlePassword, setGooglePassword] = useState("");
  const [googleRole, setGoogleRole] = useState("");

  const handleCallbackResponse = async (response) => {
    let userDecode = jwt_decode(response.credential);
    setGoogleUsername(userDecode.given_name);
    setGoogleEmail(userDecode.email);
    setGooglePassword(userDecode.given_name);
    setGoogleRole("user");
  };

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "723325124358-7idukikel5vlp0logd8crflsclqlfcs4.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"), { theme: "outline", size: "large" });
  }, []);

  useEffect(() => {
    const userGoogle = async () => {
      try {
        const response = await axios.post("http://localhost:5000/socialLogin", {
          email: googleEmail,
          password: googlePassword,
        });
        let isNotif = await notificationSocialLogin(response);
        if (isNotif) {
          setCookie(`userCookie`, JSON.stringify(response.data.sendData), 1);
          navigate("/");
          return;
        }
      } catch (error) {
        if (error.response) {
          try {
            const responseRegister = await axios.post("http://localhost:5000/register", {
              username: googleUsername,
              email: googleEmail,
              password: googlePassword,
              role: googleRole,
            });
            if (responseRegister.data.statusCode === 200) {
              try {
                const response = await axios.post("http://localhost:5000/socialLogin", {
                  email: googleEmail,
                  password: googlePassword,
                });
                let isNotif = await notificationSocialLogin(response);
                if (isNotif) {
                  setCookie(`userCookie`, JSON.stringify(response.data.sendData), 1);
                  navigate("/");
                  return;
                }
              } catch (error) {
                console.log(error);
                errorNotification();
              }
            }
          } catch (error) {
            if (error.response) {
              notificationSocialLogin(error.response);
              return;
            }
            console.log(error);
            errorNotification();
          }
          return;
        }
        console.log(error);
        errorNotification();
      }
    };
    if (googleEmail && googlePassword !== "") {
      userGoogle();
    }
  }, [googleEmail, googlePassword, googleUsername, googleRole]);

  return <div id="google-btn" className="mb-2"></div>;
};

export default GoogleLoginButton;

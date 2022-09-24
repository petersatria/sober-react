import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../moduleComponents/cookie";
import { errorNotification, notificationSocialLogin } from "../../moduleComponents/notification";
import FacebookLogin from "react-facebook-login";
import "sweetalert2/src/sweetalert2.scss";

const FacebookLoginButton = () => {
  const navigate = useNavigate();
  const axios = require("axios").default;

  const [facebookUsername, setFacebookUsername] = useState("");
  const [facebookPassword, setFacebookPassword] = useState("");
  const [facebookEmail, setFacebookEmail] = useState("");
  const [facebookRole, setFacebookRole] = useState("");

  const responseFacebook = (response) => {
    console.log("responseFacebook", response);
    setFacebookUsername(response.first_name);
    setFacebookEmail(response.email);
    setFacebookPassword(response.name);
    setFacebookRole("user");
  };

  // useEffect
  useEffect(() => {
    const userFacebook = async () => {
      console.log(facebookEmail);
      console.log(facebookPassword);
      try {
        const response = await axios.post("http://localhost:5000/socialLogin", {
          email: facebookEmail,
          password: facebookPassword,
        });
        console.log("myresponse :", response);
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
              username: facebookUsername,
              email: facebookEmail,
              password: facebookPassword,
              role: facebookRole,
            });
            console.log("myresponse :", responseRegister);
            if (responseRegister.data.statusCode === 200) {
              try {
                const response = await axios.post("http://localhost:5000/socialLogin", {
                  email: facebookEmail,
                  password: facebookPassword,
                });
                console.log("myresponse :", response);
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
    if (facebookEmail && facebookPassword !== "") {
      userFacebook();
    }
  }, [facebookEmail, facebookPassword]);
  return (
    <FacebookLogin
      appId="493278945653702"
      fields="name,email,picture,first_name"
      cssClass="btnFacebook"
      autoLoad={false}
      callback={responseFacebook}
      icon={<i className="bi bi-facebook" style={{ marginRight: "7px", fontSize: "18px" }}></i>}
    />
  );
};

export default FacebookLoginButton;

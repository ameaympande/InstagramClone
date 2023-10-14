import React, { useEffect, useState } from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import logo from "../../../../public/logo.png";
import facebookLogo from "../../../../public/facebook.svg";
import microsoft from "../../../../public/microsoft.png";
import googlePlay from "../../../../public/googlePlay.png";
import phoneImg from "../../../../public/backgroundimg.png";
import image1 from "../../../../public/1ss.png";
import image2 from "../../../../public/2ss.png";
import image3 from "../../../../public/3ss.png";
import image4 from "../../../../public/4ss.png";
import "./style.css";
import { isValidUsername } from "../../../helper/validUsername";

const imageList = [image1, image2, image3, image4];

const Login = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "username") {
      setLogin((prevLogin) => ({
        ...prevLogin,
        username: value,
      }));
      if (!isValidUsername(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: "Please enter a valid username.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: "",
        }));
      }
    } else if (name === "password") {
      setLogin((prevLogin) => ({
        ...prevLogin,
        password: value,
      }));
      if (value.length < 8) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must be at least 8 characters.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "",
        }));
      }
    }
  };

  const handleSubmit = () => {
    if (login.username === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Please enter a valid username.",
      }));
    } else if (login.password === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Please enter a valid password.",
      }));
    } else console.log("hello");
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={phoneImg} alt="Instagram on Phone" className="Instagram" />
        <img
          src={imageList[currentImageIndex]}
          alt="Screenshot"
          className="screenshot"
        />
      </div>
      <div className="main_box">
        <div className="login-box">
          <img className="logo" src={logo} alt="Logo" />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <input
                className={`input username_input ${
                  errors.username ? "error" : ""
                }`}
                placeholder="Phone number, username, or email"
                aria-required="true"
                autoCapitalize="off"
                autoCorrect="off"
                maxLength="75"
                type="text"
                value={login.username}
                onChange={handleOnChange}
                name="username"
              />
              {errors.username && (
                <div className="error-message">{errors.username}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <input
                className={`input password_input ${
                  errors.password ? "error" : ""
                }`}
                placeholder="Password"
                aria-required="true"
                autoCapitalize="off"
                autoCorrect="off"
                maxLength="75"
                type="password"
                value={login.password}
                onChange={handleOnChange}
                name="password"
              />
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                className="btn_login"
                style={{ borderRadius: "10px" }}
                variant="contained"
                onClick={handleSubmit}
              >
                Log in
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider className="custom-divider">OR</Divider>
            </Grid>
            <Grid
              item
              container
              xs={12}
              justifyContent="center"
              alignItems="center"
            >
              <a
                href="https://www.facebook.com"
                className="facebook-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={facebookLogo}
                  alt="Facebook Logo"
                  className="facebook-logo"
                />
                Log in with Facebook
              </a>
            </Grid>
            <Grid item xs={12}>
              <Typography className="label_forgot_pass" variant="body2">
                <a href="/forgot-password">Forgot Password?</a>
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className="sign-up">
          <Typography variant="body2">
            Don't have an account? <a href="/signup">Sign up</a>
          </Typography>
        </div>
        <div className="app-box">
          <div className="label-get-app">
            <Typography variant="body2">Get the app.</Typography>
          </div>
          <div className="links">
            <a
              href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D1C854017-22F4-47E7-87ED-2ED06948D056%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={googlePlay}
                alt="Get it on Google Play"
                className="link-logo"
              />
            </a>
            <a
              href="https://apps.microsoft.com/detail/instagram/9NBLGGH5L9XT?hl=en-us&gl=IN"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={microsoft}
                alt="Get it from Microsoft"
                className="link-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

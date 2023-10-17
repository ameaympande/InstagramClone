/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Divider, Typography } from "@mui/material";
import logo from "/logo.png";
import facebookLogo from "/facebook.svg";
import microsoft from "/microsoft.png";
import googlePlay from "/public/googlePlay.png";
import phoneImg from "/backgroundimg.png";
import image1 from "/1ss.png";
import image2 from "/2ss.png";
import image3 from "/3ss.png";
import image4 from "/4ss.png";
import "./style.css";
import { isValidUsername } from "../../../helper/validUsername";
import LoginAPI from "../../../apicalls/LoginAPI";
import { useNavigate } from "react-router-dom";

const imageList = [image1, image2, image3, image4];

const Login = () => {
  const navigate = useNavigate();
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

      setErrors((prevErrors) => ({
        ...prevErrors,
        username: !isValidUsername(value)
          ? "Please enter a valid username."
          : "",
      }));
    } else if (name === "password") {
      setLogin((prevLogin) => ({
        ...prevLogin,
        password: value,
      }));

      setErrors((prevErrors) => ({
        ...prevErrors,
        password: value === "" ? "Please enter a valid password." : "",
      }));
    }
  };

  const handleSubmit = async () => {
    setErrors({ username: "", password: "" });

    if (!login.username.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Please enter a valid username.",
      }));
      return;
    }

    if (!login.password.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Please enter a valid password.",
      }));
      return;
    }

    try {
      const response = await LoginAPI(login.username, login.password);
      if (response.data.token) {
        localStorage.setItem("Token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
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
          <input
            className={`input username_input ${errors.username ? "error" : ""}`}
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
          <input
            className={`input password_input ${errors.password ? "error" : ""}`}
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
          <button className="btn_login" onClick={handleSubmit}>
            Log in
          </button>
          <Divider className="custom-divider">OR</Divider>
          <div className="facebook-link-container">
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
          </div>
          <Typography mt={2} className="label_forgot_pass" variant="body2">
            <a href="/forgot-password">Forgot Password?</a>
          </Typography>
        </div>
        <div className="sign-up">
          Don't have an account? <a href="/signup">Sign up</a>
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

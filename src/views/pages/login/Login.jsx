import { Button, Divider, Grid, Typography } from "@mui/material";
import logo from "../../../../public/logo.png";
import facebookLogo from "../../../../public/facebook.svg";
import microsoft from "../../../../public/microsoft.png";
import googlePlay from "../../../../public/googlePlay.png";
import "./style.css";

const Login = () => {
  return (
    <>
      <div className="main_box">
        <div className="login-box">
          <img className="logo" src={logo} alt="Logo" />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <input
                className="input username_input"
                placeholder="Phone number, username, or email"
                aria-required="true"
                autoCapitalize="off"
                autoCorrect="off"
                maxLength="75"
                type="text"
                value=""
                name="username"
              />
            </Grid>
            <Grid item xs={12}>
              <input
                className="input password_input"
                placeholder="Password"
                aria-required="true"
                autoCapitalize="off"
                autoCorrect="off"
                maxLength="75"
                type="password"
                value=""
                name="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className="btn_login"
                style={{ borderRadius: "10px" }}
                variant="contained"
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
              <a href="https://www.facebook.com" className="facebook-link">
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
    </>
  );
};

export default Login;

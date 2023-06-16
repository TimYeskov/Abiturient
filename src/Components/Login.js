import React from "react";
import googleLogo from "../img/googleLogo.png";
import cancel from "../img/cacnel.svg";
import cancelDark from "../img/cancelDark.svg";
import "../styles/components/login.scss";
export const Login = ({ openLogin, colorTheme }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="container">
        <div className="container__header">
          <div>
            {/* <img src={logo} /> */}
            <img
              src={colorTheme === "light" ? cancel : cancelDark}
              className="cancel"
              onClick={() => openLogin(false)}
            />
          </div>

          <h2>Lopem ipsum Login,10 if kafa gubi</h2>
        </div>
        <div className="container__wrapper">
          <div className="container__login">
            <form>
              <input type="text" name="Email" placeholder="johndoe@gmail.com" />
              <input type="password" name="password" placeholder="password" />
            </form>
            <div className="container__settings">
              <h4>Remember Me</h4>
              <a>Forgot Password</a>
            </div>
            <button className="loginBtn">LOGIN</button>
            <h4 className="underBtn">
              Don’t have an Account? <span>Register Here</span>
            </h4>
            <button className="googleReg">
              <img src={googleLogo} />
              <h4>Login with Google</h4>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

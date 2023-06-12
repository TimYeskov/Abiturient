import React from "react";
import googleLogo from "../img/googleLogo.png";
import cancel from "../img/cacnel.svg";
import cancelDark from "../img/cancelDark.svg";
import "../styles/components/login.scss";
export const Login = ({ openLogin, colorTheme }) => {
  const [login, setSignUp] = React.useState(true);
  const click = () => {
    setSignUp(!login);
  };
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
          <div className="container__options">
            <h2>Login</h2>
            <h2 onClick={click}>Sign Up</h2>
          </div>
          {login ? (
            <div className="container__login">
              <form>
                <input
                  type="text"
                  name="Email"
                  placeholder="johndoe@gmail.com"
                />
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
          ) : (
            <div className="container__signUp">
              <form>
                <div className="nameSurname">
                  <div>
                    <label for="signupName" class="input-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="signupName"
                    />
                  </div>
                  <div>
                    <label for="signupSurname">Surname</label>
                    <input
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      className="signupSurname"
                    />
                  </div>
                </div>
                <select class="custom-select" required>
                  <option
                    value=""
                    disabled
                    selected
                    className="option__disabled"
                  >
                    Выберите группу
                  </option>
                  <option value="1">I qrup</option>
                  <option value="2">II qrup</option>
                  <option value="3">III qrup</option>
                  <option value="4">IV qrup</option>
                </select>

                <label for="signupEmal">Email</label>
                <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  className="signupEmal"
                />

                <label for="passwordSignup">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="passwordSignup"
                />

                <label for="Confirm Password">Confirm Password</label>
                <input
                  className="password__confirm"
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                />
              </form>

              <button className="loginBtn">SİGNUP</button>

              {/* <button className="googleReg">
                <img src={googleLogo} />
                <h4>Login with Google</h4>
              </button> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

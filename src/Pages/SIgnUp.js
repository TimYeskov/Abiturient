import { Link } from "react-router-dom";
import { useState } from "react";

import "../styles/components/signup.scss";

import { Login } from "../Components/Login";
import { useColorTheme } from "../hooks/useColorTheme";

import logo from "../img/logo.png";
import icon from "../img/user-signup.svg";
import darkMode from "../img/dark-mode.png";
import lightMode from "../img/light-mode.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstName,
  setLastName,
  setMail,
  setPassword,
  setRepeatPassword,
} from "../redux/slices/signUpSlice";
import { Value } from "sass";
const SignUp = ({ colorTheme, toggleColorTheme }) => {
  const dispatch = useDispatch();
  const [login, openLogin] = useState(false);

  const onChangeTheme = () => {
    toggleColorTheme();
  };

  const {
    firstName,
    lastName,
    firstNameError,
    lastNameError,
    mail,
    mailError,
    password,
    passwordError,
    repeatPassword,
    repeatPasswordError,
  } = useSelector((state) => state.signUpSlice);
  const handleInputChange = (event, field) => {
    event.preventDefault();
    const value = event.target.value;

    if (field === "firstName") {
      dispatch(setFirstName(value));
    } else if (field === "lastName") {
      dispatch(setLastName(value));
    } else if (field === "mail") {
      dispatch(setMail(value));
    } else if (field === "password") {
      dispatch(setPassword(value));
    } else if (field === "repeatpassword") {
      dispatch(setRepeatPassword(value));
    }
  };
  return (
    <>
      {login && <Login openLogin={openLogin} />}
      <div className="signup">
        <header>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <div>
            <img
              src={colorTheme === "light" ? lightMode : darkMode}
              alt="theme"
              className="theme"
              onClick={onChangeTheme}
            />
            <h4>Already have an account? </h4>
            <button onClick={() => openLogin(true)}>Log In</button>
          </div>
        </header>
        <main>
          <h1>Get started on Heroku today</h1>
          <div className="signup__wrapper">
            <div className="wrapper__left">
              <div className="left__block">
                <div>
                  <img src={icon} alt="icon" />
                  <h3>Heroku account</h3>
                </div>
                <h4>
                  Create apps, connect databases and add-on services, and
                  collaborate on your apps.
                </h4>
              </div>
              <div className="left__block">
                <div>
                  <img src={icon} alt="icon" />
                  <h3>Ypur app platform</h3>
                </div>
                <h4>
                  Create apps, connect databases and add-on services, and
                  collaborate on your apps.
                </h4>
              </div>
              <div className="left__block">
                <div>
                  <img src={icon} alt="icon" />
                  <h3>Deploy now</h3>
                </div>
                <h4>
                  Create apps, connect databases and add-on services, and
                  collaborate on your apps.
                </h4>
              </div>
            </div>
            <div className="wrapper__right">
              <form>
                <div className="input__block">
                  <div>
                    <label for="firstName">
                      First name <span>*</span>
                    </label>
                    {firstNameError && <p>{firstNameError}</p>}
                  </div>

                  <input
                    type="text"
                    name="firstname"
                    placeholder="name"
                    id="firstName"
                    required
                    value={firstName}
                    onChange={(event) => handleInputChange(event, "firstName")}
                    style={{ borderColor: firstNameError && "red" }}
                  />
                </div>

                <div className="input__block">
                  <div>
                    <label for="lastName">
                      Last name <span>*</span>
                    </label>
                    {lastNameError && <p>{lastNameError}</p>}
                  </div>

                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    id="lastName"
                    required
                    value={lastName}
                    onChange={(event) => handleInputChange(event, "lastName")}
                    style={{ borderColor: lastNameError && "red" }}
                  />
                </div>

                <div className="input__block">
                  <div>
                    <label for="mail">Email adress</label>
                    {mailError && <p>{mailError}</p>}
                  </div>

                  <input
                    type="text"
                    name="password"
                    placeholder="Email adress"
                    id="mail"
                    value={mail}
                    onChange={(event) => handleInputChange(event, "mail")}
                    style={{ borderColor: mailError && "red" }}
                  />
                </div>

                <div className="input__block">
                  <div>
                    <label for="password">
                      Password <span>*</span>
                    </label>
                    {passwordError && <p>{passwordError}</p>}
                  </div>

                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => handleInputChange(event, "password")}
                    style={{ borderColor: passwordError && "red" }}
                    placeholder="Password"
                    id="password"
                    required
                  />
                </div>

                <div className="input__block">
                  <div>
                    <label for="repeatPassword">
                      Repeat password <span>*</span>
                    </label>
                    {repeatPasswordError && <p>{repeatPasswordError}</p>}
                  </div>

                  <input
                    type="password"
                    name="password"
                    placeholder="Repeat password"
                    id="repeatPassword"
                    value={repeatPassword}
                    onChange={(event) =>
                      handleInputChange(event, "repeatpassword")
                    }
                    style={{ borderColor: repeatPasswordError && "red" }}
                    required
                  />
                </div>

                <select>
                  <option value="" disabled selected>
                    Выберите группу
                  </option>
                  <option value="1">Группа 1</option>
                  <option value="2">Группа 2</option>
                  <option value="3">Группа 3</option>
                  <option value="4">Группа 4</option>
                </select>
                <button type="submit">Create an account</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default SignUp;

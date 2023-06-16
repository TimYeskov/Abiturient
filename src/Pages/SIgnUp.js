import "../styles/components/signup.scss";
import logo from "../img/logo.png";
import icon from "../img/user-signup.svg";
const SignUp = () => {
  return (
    <div className="signup">
      <header>
        <img src={logo} alt="logo" />
        <div>
          <h4>Already have an account? </h4>
          <button>Log In</button>
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
              <label for="firstName">
                First name <span>*</span>
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="name"
                id="firstName"
              />

              <label for="lastName">
                Last name <span>*</span>
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                id="lastName"
              />

              <label for="mail">
                Email adress <span>*</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="Email adress"
                id="mail"
              />

              <label for="password">
                Password <span>*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />

              <label for="repeatPassword">
                Repeat password <span>*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Repeat password"
                id="repeatPassword"
              />
              <select>
                <option value="" disabled selected>
                  Выберите группу
                </option>
                <option value="1">Группа 1</option>
                <option value="2">Группа 2</option>
                <option value="3">Группа 3</option>
                <option value="4">Группа 4</option>
              </select>
              <button>Create an account</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default SignUp;

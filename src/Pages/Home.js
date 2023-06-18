import React, { useState, useEffect } from "react";

import logo from "../img/logo.png";
import lightMode from "../img/light-mode.png";
import darkMode from "../img/dark-mode.png";
import themeLine from "../img/theme-line.svg";
import lessonIcon from "../img/lesson-icon.svg";

import sinaqIcon from "../img/sinaqIcon.svg";

import bloqBtn from "../img/bloqBtn.svg";
import bloqImg1 from "../img/bloq_image1.png";
import bloqImg2 from "../img/bloq_image2.png";
import bloqImg3 from "../img/bloq_image3.png";
import bloqDataIcon from "../img/bloqDataIcon.svg";

import aboutIcon from "../img/aboutIcon.svg";

import { useColorTheme } from "../hooks/useColorTheme";
import { Login } from "../Components/Login";
import { Link } from "react-router-dom";
import SignUp from "./SIgnUp";
function Home({ colorTheme, toggleColorTheme }) {
  const onChangeTheme = () => {
    toggleColorTheme();
  };

  const [login, openLogin] = useState(false);

  return (
    <>
      {console.log("home", colorTheme)}
      {login && <Login openLogin={openLogin} colorTheme={colorTheme} />}
      <header>
        <div className="rows">
          <div className="first-row">
            <div>
              <img src={logo} alt="logo" />
              <ul className="header-nav">
                <li>Sinaq</li>
                <li>Bloq</li>
                <li>Contact</li>
              </ul>
              <div className="header-right">
                <img
                  src={colorTheme === "light" ? lightMode : darkMode}
                  alt="theme"
                  className="theme"
                  onClick={onChangeTheme}
                />
                <ul className="header-right__lang">
                  <li>AZ</li>
                  <img src={themeLine} />
                  <li>RU</li>
                </ul>
                <button
                  className="header-btn login"
                  onClick={() => openLogin(true)}
                >
                  giriş
                </button>
                <Link to="/signup">
                  <button className="header-btn signup">qeydiyyat</button>
                </Link>
              </div>
            </div>
          </div>
          <ul className="second-row">
            <li>Riyaziyyat</li>
            <li>Xarici dil</li>
            <li>Azərbaycan dili</li>
            <li>Fizika</li>
            <li>Kimya</li>
          </ul>
        </div>
        {/* <div className="navbar-header">
          <div className="navbar-header__div">
            <img src={logo} alt="logo" />
            <div class="hamburger-lines" onClick={toggleMenu}>
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
          </div>

          <div className={`navbar-wrapper ${isMenuOpen ? "active" : ""}`}>
            <nav className="navbar">
              <button>qeydiyyat/giriş</button>
              <ul className="menu">
                <li>Sınaq</li>
                <li>Bloq</li>
                <li>Contact</li>

                <div class="select animated zoomIn">
                  <input type="radio" name="option" />
                  <i class="toggle icon icon-arrow-down"></i>
                  <i class="toggle icon icon-arrow-up"></i>
                  <span class="placeholder">Choose...</span>
                  <label class="option">
                    <input type="radio" name="option" />
                    <span class="title animated fadeIn">
                      <i class="icon icon-speedometer"></i>Speedometer
                    </span>
                  </label>
                  <label class="option">
                    <input type="radio" name="option" />
                    <span class="title animated fadeIn">
                      <i class="icon icon-fire"></i>Fire
                    </span>
                  </label>
                  <label class="option">
                    <input type="radio" name="option" />
                    <span class="title animated fadeIn">
                      <i class="icon icon-badge"></i>Badge
                    </span>
                  </label>
                </div>
              </ul>
            </nav>
          </div>
        </div> */}
      </header>
      <main>
        <section className="banner">
          <h1 className="banner__title">Онлайн-занятия по подготовке к ЕГЭ</h1>
          <h2>
            Поможем показать свой максимум на экзамене и набрать 85+ баллов
          </h2>
          <button>Lorem Ipsum</button>
        </section>
        <section className="lessons">
          <div className="lessons-description">
            <div>
              <h2>Lorem ipsum lorem,Lorem ipsum lorem</h2>
            </div>
            <h3>
              JavaRush — это онлайн-курс обучения программированию на Java,
              который на 80% состоит из практики/JavaRush — это онлайн-курс
              обучения программированию на Java, который на 80% состоит из
              практики/JavaRush — это онлайн-курс обучения программированию на
              Java, который на 80% состоит из практики
            </h3>
          </div>
          <div className="lessons-container">
            <div
              className="lessons-container__block"
              style={{
                background:
                  colorTheme === "dark"
                    ? "linear-gradient(to bottom, rgb(11, 71, 223, 80%), rgb(24, 34, 34, 0%))"
                    : "#FFB606",
                color: colorTheme === "dark" ? "white" : "black",
              }}
            >
              <h4>Riyaziyyat</h4>
              <img src={lessonIcon} alt="icon" />
            </div>

            <div
              className="lessons-container__block"
              style={{
                background:
                  colorTheme === "dark"
                    ? "linear-gradient(to bottom, rgb(0, 137, 14, 80%), rgb(29, 11, 11, 0%))"
                    : "#FED6F4",
                color: colorTheme === "dark" ? "white" : "black",
              }}
            >
              <h4>Azərbaycan dili</h4>
              <img src={lessonIcon} alt="icon" />
            </div>

            <div
              className="lessons-container__block"
              style={{
                background:
                  colorTheme === "dark"
                    ? "linear-gradient(to bottom, rgb(57, 2, 45, 80%), rgb(139, 11, 11, 0%))"
                    : "#E3FF4F",
                color: colorTheme === "dark" ? "white" : "black",
              }}
            >
              <h4>Xarici dil</h4>
              <img src={lessonIcon} alt="icon" />
            </div>

            <div
              className="lessons-container__block"
              style={{
                background:
                  colorTheme === "dark"
                    ? "linear-gradient(to bottom, rgb(26, 190, 161, 80%), rgb(8, 6, 20, 0%))"
                    : "#1D8AFE",
                color: colorTheme === "dark" ? "white" : "black",
              }}
            >
              <h4>Fizika</h4>
              <img src={lessonIcon} alt="icon" />
            </div>

            <div
              className="lessons-container__block"
              style={{
                background:
                  colorTheme === "dark"
                    ? "linear-gradient(to bottom, rgb(72, 0, 165, 80%), rgb(12, 19, 13, 0%))"
                    : "#FFB606",
                color: colorTheme === "dark" ? "white" : "black",
              }}
            >
              <h4>Kimya</h4>
              <img src={lessonIcon} alt="icon" />
            </div>
          </div>
        </section>
        <section className="about">
          <h2> Почему выбирают MAXIMUM Education</h2>
          <div className="about-container">
            <div className="container__block">
              <img src={aboutIcon} alt="icon" />
              <h3>Гарантия поступления</h3>
              <h4>
                Мы берем на себя юридическую ответственность за поступление
                ученика на бюджет
              </h4>
            </div>
            <div className="container__block">
              <img src={aboutIcon} alt="icon" />
              <h3>Государственная поддержка</h3>
              <h4>
                Оплатить обучение можно материнским капиталом, а еще вы сможете
                вернуть до 13% от стоимости курсов через налоговый вычет
              </h4>
            </div>
            <div className="container__block">
              <img src={aboutIcon} alt="icon" />
              <h3>Образовательная лицензия №040223</h3>
              <h4>
                Наши образовательные программы проверены и утверждены
                государственными органами
              </h4>
            </div>
            <div className="container__block">
              <img src={aboutIcon} alt="icon" />
              <h3>Гарантия возврата</h3>
              <h4>
                Мы вернем деньги, если в течение двух недель ученик передумал
                заниматься с нами
              </h4>
            </div>
          </div>
        </section>
        <section className="trial">
          <div className="trial-header">
            <h2>
              <span>/</span>
              Sınaq
            </h2>
            <div>
              <h2 className="trial-header__all">bütün sınaqlar</h2>
              <img src={bloqBtn} alt="btn" />
            </div>
          </div>
          <h3>
            JavaRush — это онлайн-курс обучения программированию на Java,
            который на 80% состоит из практики/JavaRush — это онлайн-курс
            обучения программированию на Java, который на 80% состоит из
            практики/JavaRush — это онлайн-курс обучения программированию на
            Java, который на 80% состоит из практики
          </h3>
          <div className="trial-container">
            <div className="trial-container__block">
              <div style={{ backgroundColor: "#7240FC" }}>
                <div>
                  <img src={sinaqIcon} />
                  <h4>Qrup Sinaq</h4>
                </div>
              </div>
            </div>
            <div className="trial-container__block">
              <div style={{ backgroundColor: "#E3FF4F" }}>
                <div>
                  <img src={sinaqIcon} />
                  <h4>Qrup(sinif) sinaq</h4>
                </div>
              </div>
            </div>
            <div className="trial-container__block">
              <div style={{ backgroundColor: "#FE5CD5" }}>
                <div>
                  <img src={sinaqIcon} />
                  <h4>Fənn Sinaq</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bloq">
          <div className="bloq-header">
            <h2>
              <span>/</span>
              Bloq
            </h2>
            <div>
              <h2 className="bloq-header__all">bütün işlər</h2>
              <img src={bloqBtn} alt="btn" />
            </div>
          </div>
          <div className="bloq-container">
            <div className="bloq-container__block">
              <div className="bloqImg">
                <img src={bloqImg1} />
              </div>
              <h3>Top 10 marketinq agentlikləri</h3>
              <div className="bloq__type">Marketing</div>
              <h4 className="bloq-type__desc">
                Trenders Team olaraq müxtəlif ölkələrdən 10 ən yaxşımarketinq
                agentlikləri araşdırdıq və sizinlə bölüşürük. Onların marketinq
                sahəsində olan uğurlarını bizimlə öyrən.
              </h4>
              <div className="bloq__data">
                <img src={bloqDataIcon} alt="icon" />
                <h4>May 16, 2023</h4>
              </div>
            </div>
            <div className="bloq-container__block">
              <div className="bloqImg">
                <img src={bloqImg2} />
              </div>
              <h3>Radio marketinq</h3>
              <div className="bloq__type">Marketing</div>
              <h4 className="bloq-type__desc">
                Radio reklam kontentinin yazılması, uyğun kanalların seçilməsi
                və büdcənin optimallaşdırılması üçün Trenders Team-in radio
                marketinqi xidmətindən faydalanın
              </h4>
              <div className="bloq__data">
                <img src={bloqDataIcon} alt="icon" />
                <h4>May 16, 2023</h4>
              </div>
            </div>
            <div className="bloq-container__block">
              <div className="bloqImg">
                <img src={bloqImg3} />
              </div>
              <h3>Tiktok xidməti ilə brendinizi tanıdın</h3>
              <div className="bloq__type">Trend</div>
              <h4 className="bloq-type__desc">
                Tiktok xidmətimiz haqqında məlumat ətraflı məlumat alın. Tiktok
                xidmətimizlə brendinizi tanımayan qalmasın
              </h4>
              <div className="bloq__data">
                <img src={bloqDataIcon} alt="icon" />
                <h4>May 16, 2023</h4>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-container">
          <div className="footer-container__block">
            <h3>Обучение</h3>
            <h4>Курсы программирования</h4>
            <h4>Курс Java</h4>
            <h4>Помощь по задачам</h4>
            <h4>Подписки</h4>
            <h4>Задача-игры</h4>
          </div>
          <div className="footer-container__block">
            <h3>Сообщество</h3>
            <h4>Пользваотели</h4>
            <h4>Статьи</h4>
            <h4>Форум</h4>
            <h4>Чат</h4>
            <h4>История успеха</h4>
            <h4>Активности</h4>
          </div>
          <div className="footer-container__block">
            <h3>Компания</h3>
            <h4>О нас</h4>
            <h4>Курс Java</h4>
            <h4>Контакты</h4>
            <h4>Отзывы</h4>
            <h4>FAQ</h4>
            <h4>Поддержка</h4>
          </div>
          <div className="footer-container__block">
            <img src={logo} alt="logo" />
            <h4 className="footer-about">
              JavaRush — это интерактивный онлайн-курс по изучению Java-
              программирования c нуля. Он содержит 1200 практических задач с
              проверкой решения в один клик, необходимый минимум теории по
              основам Java и мотивирующие фишки, которые помогут пройти курс до
              конца: игры, опросы,интересные проекты и статьи об эффективном
              обучении и карьере Java‑девелопера.
            </h4>
          </div>
        </div>
        {/* <div className='footer__lang'>
          <h4>Язык Интерфейса</h4>
          <select>
            <option>Руссикй</option>
            <option>Азербайджанский</option>
          </select>
        </div> */}
      </footer>
    </>
  );
}

export default Home;

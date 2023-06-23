import "../styles/adaptive/media.scss";
import "../styles/App.scss";
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
import span from "../img/span.svg";
import vector from "../img/vector.svg";
import feedback from "../img/feedback.png";

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
      </header>
      <main>
        <section className="banner">
          <div className="banner__wrapper">
            <h1 className="banner__title">
              Доступные онлайн занятия для успешной подготовки к TQDK!
            </h1>
            <h2>
              Достижение 500+ баллов: сделаем это вместе с нашими онлайн
              курсами!
            </h2>
            <button>Lorem Ipsum</button>
          </div>
          <div className="banner__about">
            <div className="banner-about__wrapper">
              <h4>01</h4>
              <h3>
                Пройдите регистрацию, выбрав подходящую группу для получения
                детальной статистики.
              </h3>
            </div>
            <div className="banner-about__wrapper">
              <h4>02</h4>
              <h3>
                Выберите предмет, который вас интересует, и начните
                интерактивное обучение.
              </h3>
            </div>
            <div className="banner-about__wrapper">
              <h4>03</h4>
              <h3>
                Проверьте свои знания, проходя пробные экзамены, чтобы оценить
                свои результаты
              </h3>
            </div>
            <div className="banner-about__wrapper">
              <h4>04</h4>
              <h3>
                Наслаждайтесь приятным и простым интерфейсом для легкого
                обучения и отличных результатов.
              </h3>
            </div>
          </div>
        </section>

        <section className="lessons">
          <div className="lessons-description">
            <div>
              <h2>Выбери предмет. Начни свою подготовку!</h2>
            </div>
            <h3>
              В данном разделе представлен список доступных предметов, для
              подготовки к которым мы предлагаем материалы. Выберите
              интересующую вас область и приступайте к подготовке. Наши курсы
              предоставляют полезный интерактивный контент, руководства и
              практические задания, которые помогут вам успешно освоить
              выбранную область. Готовьтесь к экзаменам в удобном темпе и
              изучайте дисципоины, наиболее полезные именно для вас. Сделайте
              выбор и начните свой путь к успеху уже сегодня!
            </h3>
          </div>
          <div className="lessons-container">
            <div
              className="lessons-container__block"
              style={{
                background: "var(--color-background__Riyaziyyat)",
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
                    : "linear-gradient(to bottom, rgb(255,242,224,1), rgb(0, 102, 22, 0%))",
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
                    : "linear-gradient(to bottom, rgb(228,251,255,100%), rgb(0, 102, 22, 0%))",
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
                    : "linear-gradient(to bottom, rgb(242,255,189,100%), rgb(0, 102, 22, 0%))",
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
                    : "linear-gradient(to bottom, rgb(255,217,154,100%), rgb(0, 102, 22, 0%))",
                color: colorTheme === "dark" ? "white" : "black",
              }}
            >
              <h4>Kimya</h4>
              <img src={lessonIcon} alt="icon" />
            </div>
          </div>
        </section>
        <section className="underBanner">
          <div className="underBanner__wrapper">
            <div>
              <div>
                <img src={span} />
                <h3>Индивидуальное обучение</h3>
              </div>

              <h4>
                Материалы, специально разработанные для самостоятельной
                подготовки
              </h4>
            </div>
            <div>
              <div>
                <img src={span} />
                <h3>Разнообразие предметов и материалов</h3>
              </div>

              <h4>
                Широкий спектр предметов с помощью различного контента, включая
                практические задания
              </h4>
            </div>
            <div>
              <div>
                <img src={span} />
                <h3>Реалистичные пробные экзамены</h3>
              </div>

              <h4>
                Пробные экзамены с использованием реалистичных тестовых
                ситуаций.
              </h4>
            </div>
          </div>
        </section>
        <section className="about">
          <h2> Почему Examify?</h2>
          <div className="about-container">
            <div className="about-container__left">
              <div className="container__block">
                <img src={aboutIcon} alt="icon" />
                <h3>Широкий спектр материалов для подготовки</h3>
                <h4>
                  ММы предлагаем обширную коллекцию учебных материалов,
                  охватывающих все темы начиная с 8 по 11 класс.
                </h4>
              </div>
              <div className="container__block">
                <img src={aboutIcon} alt="icon" />
                <h3>Практические пробные экзамены</h3>
                <h4>
                  Мы предлагаем возможность пройти практические пробные экзамены
                  по каждому предмету, независимо от класса или группы, чтобы
                  помочь ученикам оценить свои знания и подготовку к официальным
                  экзаменам.
                </h4>
              </div>
            </div>
            <div className="about-container__right">
              <div className="container__block">
                <img src={aboutIcon} alt="icon" />
                <h3>Интерактивный подход к обучению</h3>
                <h4>
                  Мы используем интерактивные методы обучения, чтобы сделать
                  изучение материала увлекательным и интересным для учеников
                </h4>
              </div>
              <div className="container__block">
                <img src={aboutIcon} alt="icon" />
                <h3>Индивидуальная подготовка по предметам</h3>
                <h4>
                  Мы гордимся возможностью предоставлять индивидуальную
                  подготовку для каждого отдельного предмета, чтобы ученики
                  могли сосредоточиться на изучении конкретных областей и
                  достичь максимальных результатов.
                </h4>
              </div>
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
          <div className="trial__container">
            <div className="container__left">
              <h3>Проверь свои знания с пробными экзаменами.</h3>
              <h4>
                Предоставляем вам возможность оценить ваш текущий уровень знаний
                и подготовиться к предстоящим экзаменам. Используйте
                разнообразные пробные задания, которые помогут вам успешно
                пройти проверку и достичь высоких результатов. Наша коллекция
                тестов предлагает различные варианты, позволяя вам прокачать
                свои навыки и уверенно выступить на экзамене. Мы стремимся
                предоставить вам лучшую подготовку, чтобы вы достигли ваших
                целей в области образования.
              </h4>
            </div>
            <div className="container__right">
              <div
                className="container__right-block"
                style={{
                  background: colorTheme === "dark" ? "white" : "#feff99",
                  color: colorTheme === "dark" ? "white" : "black",
                }}
              >
                <div className="container__blockimg">
                  <div style={{ backgroundColor: "#7240FC" }}>
                    <div>
                      <img src={sinaqIcon} />
                      <h4>Qrup Sinaq</h4>
                    </div>
                  </div>
                </div>
                <div className="container__wrapper">
                  <div>
                    <h3>
                      Пробник
                      <p>По группам</p>
                    </h3>
                    <button>
                      выбрать пробник <img src={vector} />
                    </button>
                  </div>
                  <h4>
                    Пройдите пробный экзамен с учетом группировки по темам,
                    чтобы обеспечить максимальную эффективность и
                    удобство.Будьте уверены в своей подготовке с нашим пробным
                    экзаменом.
                  </h4>
                </div>
              </div>
              <div
                className="container__right-block"
                style={{
                  background: colorTheme === "dark" ? "white" : "#e5cfff",
                  color: colorTheme === "dark" ? "white" : "black",
                }}
              >
                <div className="container__blockimg">
                  <div style={{ backgroundColor: "#7240FC" }}>
                    <div>
                      <img src={sinaqIcon} />
                      <h4>Qrup Sinaq</h4>
                    </div>
                  </div>
                </div>
                <div className="container__wrapper">
                  <div>
                    <h3>
                      Пробник
                      <p>По классам</p>
                    </h3>
                    <button>
                      выбрать пробник <img src={vector} />
                    </button>
                  </div>
                  <h4>
                    Пробник, адаптированный под пройденные темы по классам.
                    Подтвердите свой прогресс и подготовьтесь к успешной сдаче
                    официальных экзаменов.
                  </h4>
                </div>
              </div>
              <div
                className="container__right-block"
                style={{
                  background: colorTheme === "dark" ? "white" : "#c5fa5d",
                  color: colorTheme === "dark" ? "white" : "black",
                }}
              >
                <div className="container__blockimg">
                  <div style={{ backgroundColor: "#7240FC" }}>
                    <div>
                      <img src={sinaqIcon} />
                      <h4>Qrup Sinaq</h4>
                    </div>
                  </div>
                </div>
                <div className="container__wrapper">
                  <div>
                    <h3>
                      Пробник
                      <p>По предметам</p>
                    </h3>
                    <button>
                      выбрать пробник <img src={vector} />
                    </button>
                  </div>
                  <h4>
                    Специально разработанный пробный экзамен для каждого
                    учебного предмета для оценки своих навыков и подготовки в
                    конкретных областях.
                  </h4>
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
        <section className="feedback">
          <div className="feedback__wrapper">
            <h2>
              Получайте лайфхаки, статьи, видео и чек-листы по обучению на почту
            </h2>
            <form>
              <div>
                <input type="text" placeholder="Имя" />
                <input type="text" placeholder="Имя" />
              </div>
              <button type="submit">Получить письмо</button>
            </form>
          </div>
          <div className="feedback__img">
            <img src={feedback} alt="img" />
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

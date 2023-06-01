import './Normalize.scss'
import './App.scss';
import logo from './img/logo.svg';
import theme from './img/theme-changer.svg';
import themeLine from './img/theme-line.svg'
import lessonIcon from './img/lesson-icon.svg'
import image from './img/image.png'
import rightContainerimg from './img/right-containerİmg.png'
import sinaqIcon from './img/sinaqIcon.svg'

import bloqBtn from './img/bloqBtn.svg'
import bloqImg1 from './img/bloq_image1.png'
import bloqImg2 from './img/bloq_image2.png'
import bloqImg3 from './img/bloq_image3.png'
import bloqDataIcon from './img/bloqDataIcon.svg'

import aboutIcon from './img/aboutIcon.svg'
function App() {
  return (
    <div className="App">
      <header>
           <div className='first-row'>
            <div>
            <img src={logo} alt='logo'/>
            <div className='header-nav'>
              <h2>Sinaq</h2>
              <h2>Bloq</h2>
              <h2>Contact</h2>
            </div>
            <div className='header-right'>
              <img src={theme} alt='theme' className='theme'/>
              <div className='header-right__lang'>
                <p>AZ</p>
                <img src={themeLine}/>
                <p>RU</p>
              </div>
            </div>
            <button>qeydiyyat/giriş</button>
            </div>
           </div>
           <div className='second-row'>
              <h4>Riyaziyyat</h4>
              <h4>Xarici dil</h4>
              <h4>Azərbaycan dili</h4>
              <h4>Fizika</h4>
              <h4>Kimya</h4>
           </div>
      </header>
      <main>
        <section className='banner'>
          <h1>Онлайн-занятия по подготовке к ЕГЭ</h1>
          <p>Поможем показать свой максимум на экзамене и набрать 85+ баллов</p>
          <button>Lorem Ipsum</button>
        </section>
        <section className='lessons'>
          <div className='lessons-description'>
          <div>
            <h1>Lorem ipsum lorem,</h1>
            <h1>Lorem ipsum lorem</h1>
          </div>
          <p>JavaRush — это онлайн-курс обучения программированию на Java, который на 80% состоит из практики/JavaRush — это онлайн-курс обучения программированию на Java, который на 80% состоит из практики/JavaRush — это онлайн-курс обучения программированию на Java, который на 80% состоит из практики</p>
          </div>
          <div className='lessons-container'>
            <div className='lessons-container__block'>
              <p>Riyaziyyat</p>
              <img src={lessonIcon} alt='icon'/>
            </div>

            <div className='lessons-container__block' style={{backgroundColor:"#1D8AFE"}}>
              <p style={{color:"#ffff"}}>Azərbaycan dili</p>
              <img src={lessonIcon} alt='icon'/>
            </div>

            <div className='lessons-container__block' style={{backgroundColor:"#FED6F4"}}>
              <p>Xarici dil</p>
              <img src={lessonIcon} alt='icon'/>
            </div>

            <div className='lessons-container__block' style={{backgroundColor:"#E3FF4F"}}>
              <p>Fizika</p>
              <img src={lessonIcon} alt='icon'/>
            </div>

            <div className='lessons-container__block'>
              <p>Kimya</p>
              <img src={lessonIcon} alt='icon'/>
            </div>
          </div>
        </section>
        <section className='about'>
        <h1> Почему выбирают MAXIMUM Education</h1>
          <div className='about-container'>
        
              <div className='container__block'>
                <img src={aboutIcon} alt='icon'/>
                <h4>Гарантия поступления</h4>
                <p>Мы берем на себя юридическую ответственность за
                 поступление ученика на бюджет
                 </p>
              </div>
              <div className='container__block'>
                <img src={aboutIcon} alt='icon'/>
                <h4>Государственная поддержка</h4>
                <p>Оплатить обучение можно материнским капиталом, а еще вы
                  сможете вернуть до 13% от стоимости курсов через налоговый вычет
                 </p>
              </div>
              <div className='container__block'>
                <img src={aboutIcon} alt='icon'/>
                <h4>Образовательная лицензия №040223</h4>
                <p>Наши образовательные программы проверены и утверждены
                  государственными органами
                 </p>
              </div>
              <div className='container__block'>
                <img src={aboutIcon} alt='icon'/>
                <h4>Гарантия возврата</h4>
                <p>Мы вернем деньги, если в течение двух недель ученик
                  передумал заниматься с нами
                 </p>
              </div>
          </div>
        </section>
        <section className='trial'>
          <h4>JavaRush — это онлайн-курс обучения программированию на Java,
               который на 80% состоит из практики/JavaRush — это онлайн-курс обучения программированию на Java,
               который на 80% состоит из практики/JavaRush — это онлайн-курс обучения программированию на Java,
               который на 80% состоит из практики
           </h4>
           <div className='trial-container'>
            <div className='trial-container__block' >
              <div style={{backgroundColor:"#7240FC"}}>
                <div>
                <img src={sinaqIcon}/>
                <h2>Qrup Sinaq</h2>
                </div>
              </div>
            </div>
            <div className='trial-container__block'>
              <div style={{backgroundColor:"#E3FF4F"}}>
                <div>
                <img src={sinaqIcon}/>
                <h2>Qrup(sinif) sinaq</h2>
                </div>
              </div>
            </div>
            <div className='trial-container__block'>
              <div style={{backgroundColor:"#FE5CD5"}}>
                <div>
                <img src={sinaqIcon}/>
                <h2>Fənn Sinaq</h2>
                </div>
              </div>
            </div>
           </div>
        </section>
        <section className='bloq'>
            <div className='bloq-header'>
            <h1>
              <span>/</span>
              Bloq
            </h1>
            <div>
            <h4>bütün işlər</h4>
            <img src={bloqBtn} alt='btn'/>
            </div>
            </div>
            <div className='bloq-container'>
              <div className='bloq-contaier__bloq'>
                 <div className='bloqImg'>
                    <img src={bloqImg1}/>
                  </div>
                <h4>Top 10 marketinq agentlikləri</h4>
                <div className='bloq__type'>Marketing</div>
                <p>Trenders Team olaraq müxtəlif ölkələrdən 10 ən yaxşımarketinq agentlikləri araşdırdıq və sizinlə bölüşürük. Onların marketinq sahəsində olan uğurlarını bizimlə öyrən.</p>
                <div className='bloq__data'>
                  <img src={bloqDataIcon} alt='icon'/>
                  <h4>May 16, 2023</h4>
                </div>
              </div>
              <div className='bloq-contaier__bloq'>
                <div className='bloqImg'>
                <img src={bloqImg2}/>
                </div>
                <h4>Radio marketinq</h4>
                <div  className='bloq__type'>Marketing</div>
                <p>Radio reklam kontentinin yazılması, uyğun kanalların seçilməsi və büdcənin optimallaşdırılması üçün Trenders Team-in radio marketinqi xidmətindən faydalanın</p>
                <div className='bloq__data'>
                  <img src={bloqDataIcon} alt='icon'/>
                  <h4>May 16, 2023</h4>
                </div>
              </div>
              <div className='bloq-contaier__bloq'>
                <div className='bloqImg'>
                <img src={bloqImg3}/>
                </div>
                <h4>Tiktok xidməti ilə brendinizi tanıdın</h4>
                <div  className='bloq__type'>Trend</div>
                <p>Tiktok xidmətimiz haqqında məlumat ətraflı məlumat alın. Tiktok xidmətimizlə brendinizi tanımayan qalmasın</p>
                <div className='bloq__data'>
                  <img src={bloqDataIcon} alt='icon'/>
                  <h4>May 16, 2023</h4>
                </div>
              </div>
            </div>
         
        </section>
      </main>
      <footer>
        <div className='footer-contanier'>
          <div className='footer-container__block'>
            <h1>Обучение</h1>
            <h4>Курсы программирования</h4>
            <h4>Курс Java</h4>
            <h4>Помощь по задачам</h4>
            <h4>Подписки</h4>
            <h4>Задача-игры</h4>
          </div>
          <div className='footer-container__block'>
            <h1>Сообщество</h1>
            <h4>Пользваотели</h4>
            <h4>Статьи</h4>
            <h4>Форум</h4>
            <h4>Чат</h4>
            <h4>История успеха</h4>
             <h4>Активности</h4>
          </div>
          <div className='footer-container__block'>
            <h1>Компания</h1>
            <h4>О нас</h4>
            <h4>Курс Java</h4>
            <h4>Контакты</h4>
            <h4>Отзывы</h4>
            <h4>FAQ</h4>
            <h4>Поддержка</h4>
          </div>
          <div className='footer-container__block'>
             <img src={logo} alt='logo'/>
             <p>JavaRush — это интерактивный онлайн-курс по изучению Java- программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы,интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.</p>
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
    </div>
  );
}

export default App;

import './Normalize.scss'
import './App.scss';
import logo from './img/logo.svg';
import theme from './img/theme-changer.svg';
import themeLine from './img/theme-line.svg'
import lessonIcon from './img/lesson-icon.svg'
import image from './img/image.png'
import rightContainerimg from './img/right-containerİmg.png'
import sinaqIcon from './img/sinaqIcon.svg'
function App() {
  return (
    <div className="App">
      <header>
           <div className='first-row'>
            <div>
            <img src={logo} alt='logo'/>
            <div className='header-nav'>
              <h2>Sənaq</h2>
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
              <h4>ı qrup</h4>
              <h4>ıı qrup</h4>
              <h4>ııı qrup</h4>
              <h4>ıv qrup</h4>
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
            <h1 style={{color:"#4CAF50"}}>Lorem ipsum lorem,</h1>
            <h1 style={{color:"#009EE4"}}>Lorem ipsum lorem</h1>
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
            <div className='lessons-container__block'>
              <p>Coğrafiya</p>
              <img src={lessonIcon} alt='icon'/>
            </div>
            <div className='lessons-container__block' style={{backgroundColor:"#E3FF4F"}}>
              <p>Azərbaycan tarixi</p>
              <img src={lessonIcon} alt='icon'/>
            </div>
            <div className='lessons-container__block' style={{backgroundColor:"#1D8AFE"}}>
              <p style={{color:"#ffff"}}>Biologiya</p>
              <img src={lessonIcon} alt='icon'/>
            </div>
            <div className='lessons-container__block'>
              <p>Tarix</p>
              <img src={lessonIcon} alt='icon'/>
            </div>
            <div className='lessons-container__block' style={{backgroundColor:"#E3FF4F"}}>
              <p>Ədəbiyyat</p>
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
          <div className='about-container__left'>
            <div className='container-left__block'>
              <img src={image} alt='image'/>
              <h4> Онлайн-занятия 2 раза в неделю</h4>
              <p>Лекции и семинары проводятся в удобное время</p>
            </div>
            <div className='container-left__block'>
              <img src={image} alt='image'/>
              <h4> Преподаватели-эксперты ЕГЭ</h4>
              <p>Каждый преподаватель прошел строгий отбор</p>
            </div>
            <div className='container-left__block'>
              <img src={image} alt='image'/>
              <h4>Мини-группы до 15 человек</h4>
              <p>Индивидуальный подход к каждому ученику</p>
            </div>
            <div className='container-left__block'>
              <img src={image} alt='image'/>
              <h4> Продуманная программа</h4>
              <p>Составлена экспертами ЕГЭ соответствует его структуре</p>
            </div>
            <div className='container-left__block'>
              <img src={image} alt='image'/>
              <h4>Домашние задания</h4>
              <p>Быстро проверяем и подробно разбираем ошибки</p>
            </div>
            <div className='container-left__block'>
              <img src={image} alt='image'/>
              <h4>Поддержка кураторов</h4>
              <p>Каждый месяц ученики пишут пробный ЕГЭ и ОГЭ</p>
            </div>
            <div className='container-left__block'>
              <img src={image} alt='image'/>
              <h4>Поддержка при поступлении</h4>
              <p>Поможем выбрать вузы и сопроводим на всех этапах</p>
            </div>
            <div className='container-left__block'>
              <img src={image} alt='image'/>
              <h4>Подбор групп по уровню</h4>
              <p>Вы сможете учиться в оптимальном ритме</p>
            </div>
            <div className='container-left__block'>
              <img src={image} alt='image'/>
              <h4> Онлайн-занятия 2 раза в неделю</h4>
              <p>Лекции и семинары проводятся в удобное время</p>
            </div>
          </div>
          <div className='about-container__right'>
            <div>
            <h1>12 000</h1>
            <p>Выпускников подготовились к ЕГЭ и ОГЭ в нашей школе</p>
            </div>
            <div>
            <h1>80%</h1>
            <p>наших учеников сдали ЕГЭ на 80+ баллов</p>
            </div>
            <h4>А самое главное-подготовка с нами чистое удовольствие!</h4>
            <img src={rightContainerimg} alt='image'/>
          
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
      </main>
    </div>
  );
}

export default App;

import styles from '@/styles/Home.module.css';
import { Img, Main, Description, Coaches, Title } from './Home.styled';
import { Breakpoint } from 'react-socks';
import Typed from 'react-typed';
import SliderComponent from '../slider/Slider.js';
const titleStyle = {
  marginTop: '50p',
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
};

const Coach = ({ coachData: { photo, alt, id, name, description } }) => {
  return (
    <div class={styles.card}>
      <div class={styles.inner}>
        <div class={styles.front}>
          <img src={photo} alt={alt} width="300" height="200" />
          <Breakpoint small down>
            <h2>{name}</h2>
            <p>{description}</p>
          </Breakpoint>
        </div>
        <div class={styles.back}>
          <h1>{name}</h1>
          <p style={{ padding: '10px', textAlign: 'left', lineHeight: '28px' }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Home = ({ coachData }) => {
  return (
    <>
      <Main>
        <Typed
          style={titleStyle}
          strings={['Спортклуб ВІКТОРІЯ']}
          typeSpeed={100}
          showCursor={false}
        />
        <SliderComponent />
        <Description>
          Спортивний клуб «Вікторія» — це чудове місце для активного відпочинку,
          а також нових знайомств і прекрасного спілкування. У нашому клубі ви
          гарантовано отримаєте гарний настрій і заряд бадьорості, який
          необхідний для досягнення успіху в житті! У нашому клубі продумано
          зонування і розташування тренажерів відповідно до концепції
          тренувального процесу. Це дозволяє виключити можливість одночасної
          концентрації великої кількості людей в одній зоні клубу, щоб
          тренувальний процес приносив задоволення і був комфортним й приємним
          абсолютно для кожного. Основний принцип нашої роботи — надання послуг
          кращої якості при збереженні помірних цін.
        </Description>
        <section>
          <Title>Наші тренери</Title>
          <Coaches>
            {coachData.map(coach => {
              return <Coach key={coach.id} coachData={coach} />;
            })}
          </Coaches>
        </section>
      </Main>
    </>
  );
};

export default Home;

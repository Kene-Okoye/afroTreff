import HeroSection from '@/components/hero/HeroSection';

import homeStyles from '@/pages/home/Home.module.css';
import heroImageHome from '@/assets/images/hero_image_home.webp';

const Home = () => {
  return (
    <>
      <div className={homeStyles['home--hero-section-wrapper']}>
        <HeroSection
          h1Text="AfroTreff 13.0"
          pText="July 14, 2023"
          linkText="Register"
          backGroundImage={heroImageHome}
        />
      </div>
      <section>
        <h2>Our mission</h2>
        <p>
          Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad
          putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos
          erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere
          facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium
          mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli
          legere efficiantur et tollit aliquip debitis mei. No deserunt mediocritatem mel. Lorem
          ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent
          delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant
          dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis
          accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium
        </p>
      </section>
    </>
  );
};

export default Home;

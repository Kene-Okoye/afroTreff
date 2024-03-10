import HeroSection from '@/components/hero/HeroSection';

import homeStyles from '@/pages/home/Home.module.css';
import heroImageHome from '@/assets/images/hero_image_home.webp';
import TeaserBoxes from '@/pages/home/TeaserBoxes';
import { useEffect, useState } from 'react';

import sanityClient from '@/client';

const Home = () => {
  // const [allPostsData, setAllPosts] = useState<DynamicDataType[]>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = await sanityClient.fetch(`
  //       *[_type == "homePage" && language == 'de']{
  //         title,
  //         heroSectionHome,
  //         CTA,
  //         language,
  //         "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
  //           title,
  //           heroSectionHome,
  //           CTA,
  //           language
  //         },
  //       }
  //       `);
  //       setAllPosts(data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log({ isLoading: isLoading, allPostsData: allPostsData });

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

      {/* <section>
        <h1>SANITY TRIAL</h1>
        {allPostsData &&
          allPostsData.map((data) => (
            <div key={data.slug}>
              <h2>{data.title}</h2>
              <img src={data.mainImage.asset.url} alt="" />
            </div>
          ))}
      </section> */}

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

      <section>
        <TeaserBoxes />
      </section>
    </>
  );
};

export default Home;

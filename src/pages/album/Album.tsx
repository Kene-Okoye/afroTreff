import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import { albumDataType } from '@/pages/album/types/albumTypes';
import albumData from '@/pages/album/albumData.json';

import albumStyles from '@/pages/album/Album.module.css';

import heroImageAlbum from '@/assets/images/blog_image_5.webp';

const Album = () => {
  return (
    <>
      <HeroSection
        h1Text="albums"
        pText="Discover our past events"
        backGroundImage={heroImageAlbum}
      />
      <section>
        <HeadingTopSmallVariant h2SmallerVariant="AfroTreff 2024" h2BiggerVariant="photo album" />

        <p className={albumStyles['album__paragraph-text']}>
          See a few teasers from our last meet-ups.{' '}
          <LinkOpenInNewWindow
            href="https://www.instagram.com/afrotreff/?hl=en"
            text="Follow the AfroTreff page on Instagram to explore more"
          />
        </p>

        <div className={albumStyles['album__grid']}>
          {albumData.map(({ id, month, albumBackgroundImage, photoCollection }: albumDataType) => (
            <Fragment key={id}>
              <Link
                to={`photo-collection-from-${month}`}
                state={{ month: month, photoCollection: photoCollection }}
                className={albumStyles['album__link']}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${albumBackgroundImage})`,
                }}
              >
                <span className={albumStyles['album__link-text']}>{month}</span>
              </Link>
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default Album;

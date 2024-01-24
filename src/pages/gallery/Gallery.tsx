import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import GalleryImageModalDialog from '@/pages/gallery/GalleryImageModalDialog';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import galleryStyles from '@/pages/gallery/Gallery.module.css';

import galleryImage1 from '@/assets/images/blog_image_1.webp';
import galleryImage2 from '@/assets/images/blog_image_2.webp';
import galleryImage3 from '@/assets/images/blog_image_3.webp';
import galleryImage4 from '@/assets/images/blog_image_4.webp';
import galleryImage5 from '@/assets/images/blog_image_5.webp';
import galleryImage6 from '@/assets/images/hero_image_home.webp';
import heroImageGallery from '@/assets/images/blog_image_5.webp';
import { Fragment } from 'react';

const galleryContent = [
  { id: 1, imageSrc: galleryImage1, alt: 'Chima and a lady smiling and having a nice chat' },
  { id: 2, imageSrc: galleryImage2, alt: 'Five attendees posing for a nice shot' },
  {
    id: 3,
    imageSrc: galleryImage3,
    alt: 'The host of the last event talking with a mic in her right hand',
  },
  {
    id: 4,
    imageSrc: galleryImage4,
    alt: 'A capture of various participants seated and looking towrds the host talking',
  },
  {
    id: 5,
    imageSrc: galleryImage5,
    alt: 'Three female participants seated, with two having their hands raised.',
  },
  { id: 6, imageSrc: galleryImage6, alt: 'View from top of the entire room' },
  { id: 7, imageSrc: galleryImage1, alt: 'Chima and a lady smiling and having a nice chat' },
  { id: 8, imageSrc: galleryImage2, alt: 'Five attendees posing for a nice shot' },
];
const Gallery = () => {
  return (
    <>
      <HeroSection
        h1Text="Gallery"
        pText="Discover our past events"
        backGroundImage={heroImageGallery}
      />
      <section>
        <HeadingTopSmallVariant h1SmallerVariant="AfroTreff 2023" h1BiggerVariant="Photo Gallery" />
        <p className={galleryStyles['gallery__paragraph-text']}>
          See a few teasers from the last events.{' '}
          <LinkOpenInNewWindow
            href="https://www.instagram.com/afrotreff/?hl=en"
            text="Follow the AfroTreff page on Instagram to explore more"
          />
        </p>
        <div className={galleryStyles['gallery__grid']}>
          {galleryContent.map(({ id, imageSrc, alt }) => (
            <Fragment key={id}>
              <GalleryImageModalDialog imageSrc={imageSrc} imageAlt={alt} />
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;

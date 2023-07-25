import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import galleryStyles from '@/pages/gallery/Gallery.module.css';

import gallerImage1 from '@/assets/images/blog_image_1.webp';
import gallerImage2 from '@/assets/images/blog_image_2.webp';
import gallerImage3 from '@/assets/images/blog_image_3.webp';
import gallerImage4 from '@/assets/images/blog_image_4.webp';
import gallerImage5 from '@/assets/images/blog_image_5.webp';
import heroImageGallery from '@/assets/images/blog_image_5.webp';

const galleryContent = [
  { id: 1, imageSrc: gallerImage1, alt: '' },
  { id: 2, imageSrc: gallerImage2, alt: '' },
  { id: 3, imageSrc: gallerImage3, alt: '' },
  { id: 4, imageSrc: gallerImage4, alt: '' },
  { id: 5, imageSrc: gallerImage5, alt: '' },
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
        <div className={galleryStyles['gallery--container']}>
          {galleryContent.map(({ id, imageSrc, alt }) => (
            <div key={id} className={galleryStyles['gallery--image-wrapper']}>
              <img src={imageSrc} alt={alt} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;

import { Fragment, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import GalleryImageModalDialog from '@/pages/album/GalleryImageModalDialog';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';

import { useSkipNavLinkContext } from '@/contexts/skipNavLinkContext/useSkipLinkContext';

import { photoCollectionType } from '@/pages/album/types/albumTypes';

import photoGalleryStyles from '@/pages/album/photoGallery/PhotoGallery.module.css';

import heroImageGallery from '@/assets/images/blog_image_5.webp';

const PhotoGallery = () => {
  const [month, setMonth] = useState<string>('');
  const [photoCollection, setPhotoCollection] = useState<photoCollectionType[]>([]);

  const skipNavLinkContext = useSkipNavLinkContext();
  const skipNavClicked = skipNavLinkContext?.skipNavClicked;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state || !location.state.month || !location.state.photoCollection) {
      if (!skipNavClicked) {
        navigate('/', { replace: true });
      }
    } else {
      setMonth(location.state.month); // Get the individuall month
      setPhotoCollection(location.state.photoCollection); // Get the individual photo collection for the selected album
    }
  }, [location, location.pathname, location.state, navigate, skipNavClicked]);

  return (
    <section className={photoGalleryStyles['photo-gallery__container']}>
      <div
        className={photoGalleryStyles['photo-gallery__hero-section']}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${heroImageGallery})`,
        }}
      ></div>
      <div className={photoGalleryStyles['photo-gallery__images-container']}>
        <div className={photoGalleryStyles['photo-gallery__images-wrapper']}>
          <div className={photoGalleryStyles['photo-gallery__images-heading-wrapper']}>
            <HeadingTopSmallVariant h1SmallerVariant="photo shots from" h1BiggerVariant={month} />
          </div>

          <div className={photoGalleryStyles['photo-gallery__grid']}>
            {photoCollection &&
              photoCollection.map(({ id, imageSrc, alt }) => (
                <Fragment key={id}>
                  <GalleryImageModalDialog imageSrc={`/${imageSrc}`} imageAlt={alt} />
                </Fragment>
              ))}
          </div>

          <p className={photoGalleryStyles['photo-gallery__text']}>
            You can explore more photos of the last meet-up on{' '}
            <LinkOpenInNewWindow
              href="https://www.instagram.com/afrotreff/?hl=en"
              text="Instagram"
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;

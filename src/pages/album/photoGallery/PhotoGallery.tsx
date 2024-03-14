import { Fragment, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PhotoGalleryDataType } from '@/pages/album/types/albumTypes';

import GalleryImageModalDialog from '@/pages/album/GalleryImageModalDialog';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import PageLoading from '@/pages/pageLoading/PageLoading';

import useFetchData from '@/hooks/useFetchData';

import photoGalleryStyles from '@/pages/album/photoGallery/PhotoGallery.module.css';

const PhotoGallery = () => {
  const topElementRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const params = useParams();
  const { t } = useTranslation();

  const slug = params.meetUpMonth?.split('__')[1];

  const [data, isLoading] = useFetchData<PhotoGalleryDataType>(
    `*[slug.current == "${slug}"]{
      language, 
      month,
      year,
        "images": photos[]{
          imageDescription_alt,
          "url": asset->url,
      },
      previewBackgroundImage{
        'url': asset->url
      },
    }`,
    [],
  );

  useEffect(() => {
    if (!data) {
      navigate('../', { replace: true });
    }
  }, [data, navigate]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading || data.length === 0) {
    return <PageLoading />;
  }

  return (
    <>
      {data &&
        data.map(({ month, year, images, previewBackgroundImage }) => (
          <Fragment key={month}>
            <section className={photoGalleryStyles['photo-gallery__container']}>
              <div
                className={photoGalleryStyles['photo-gallery__hero-section']}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                    url(${previewBackgroundImage.url})`,
                }}
              ></div>
              <div className={photoGalleryStyles['photo-gallery__images-container']}>
                <div className={photoGalleryStyles['photo-gallery__images-wrapper']}>
                  <div
                    ref={topElementRef}
                    className={photoGalleryStyles['photo-gallery__images-heading-wrapper']}
                  >
                    <HeadingTopSmallVariant
                      h1SmallerVariant={`${t('photo_shots_from')}`}
                      h1BiggerVariant={`${month}, ${year}`}
                    />
                  </div>

                  <div className={photoGalleryStyles['photo-gallery__grid']}>
                    {images &&
                      images.map(({ url, imageDescription_alt }) => (
                        <Fragment
                          key={`${url}-${
                            Math.random().toString(36).substring(2, 15) +
                            Math.random().toString(36).substring(2, 15)
                          }`}
                        >
                          <GalleryImageModalDialog imageSrc={url} imageAlt={imageDescription_alt} />
                        </Fragment>
                      ))}
                  </div>

                  <p className={photoGalleryStyles['photo-gallery__text']}>
                    {t('explore_more_photos')}{' '}
                    <LinkOpenInNewWindow
                      href="https://www.instagram.com/afrotreff/?hl=en"
                      text="Instagram"
                    />
                  </p>
                </div>
                <button
                  type="button"
                  className={photoGalleryStyles['photo-gallery__back-to-top']}
                  onClick={handleScrollToTop}
                >
                  <span className={photoGalleryStyles['photo-gallery__back-to-top-arrow']}></span>
                  <span className={photoGalleryStyles['visually-hidden']}>{t('back_to_top')}</span>
                </button>
              </div>
            </section>
          </Fragment>
        ))}
    </>
  );
};

export default PhotoGallery;

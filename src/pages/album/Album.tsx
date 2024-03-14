import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PortableText } from '@portabletext/react';

import { LanguageType } from '@/routes/types/languageType';
import { queryAlbumType } from './types/albumTypes';

import { components } from '@/components/portableTextCustomComponent/PortableTextCustomComponent';
import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import PageLoading from '../pageLoading/PageLoading';
import albumStyles from '@/pages/album/Album.module.css';

import photoGalleryDefault from '@/assets/images/photo-gallery_default.webp';

import useFetchData from '@/hooks/useFetchData';

const LANGUAGES: { [key: string]: string } = {
  en: 'english',
  de: 'german',
};

const Album = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  const [data, isLoading] = useFetchData<queryAlbumType>(
    `*[_type == "albumsPage_${currentLanguage}" && language == '${LANGUAGES[currentLanguage]}']{
      language,
      heroSection_albumsPage{
        ...,
        "imageUrl": backgroundImage.asset->url
      },
      albumsSectionheading,
      bodyText,
      albums[]-> {
        month,
        slug,
        previewBackgroundImage{
          'url': asset->url
        },
        "images": photos[]{
          imageDescription_alt,
          "url": asset->url,
        }
    }  
  }`,
    [],
  );

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {data &&
        data.map(({ albumsSectionheading, heroSection_albumsPage, bodyText, albums }) => (
          <Fragment key={heroSection_albumsPage.headingText}>
            <HeroSection
              h1Text={heroSection_albumsPage.headingText}
              pText={heroSection_albumsPage.smallText}
              backGroundImage={heroSection_albumsPage.imageUrl}
            />
            <section>
              <HeadingTopSmallVariant
                h2SmallerVariant={albumsSectionheading.headingSmallerVariant}
                h2BiggerVariant={albumsSectionheading.headingLargerVariant}
              />

              <PortableText value={bodyText} components={components} />

              <div className={albumStyles['album__grid']}>
                {albums &&
                  albums.map(({ month, slug, previewBackgroundImage }) => (
                    <Fragment key={slug.current}>
                      <Link
                        to={`${t('photo-collection-from')}__${slug.current}`}
                        className={albumStyles['album__link']}
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                            url(${previewBackgroundImage.url || photoGalleryDefault})`,
                        }}
                      >
                        <span className={albumStyles['album__link-text']}>{month}</span>
                      </Link>
                    </Fragment>
                  ))}
              </div>
            </section>
          </Fragment>
        ))}
    </>
  );
};

export default Album;

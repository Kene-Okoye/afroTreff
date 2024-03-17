import { ChangeEvent, Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageType } from '@/routes/types/languageType';

import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import BlogCard from '@/pages/blog/BlogCard';
import PageLoading from '../pageLoading/PageLoading';

import blogStyles from '@/pages/blog/Blog.module.css';

import useFetchData from '@/hooks/useFetchData';
import { queryPostType } from '@/pages/blog/types/blogTypes';

import { formatDate } from '@/utils/formatDate';

const blogCategories = ['all', 'news', 'story', 'interviews', 'lifestyle'];

const LANGUAGES: { [key: string]: string } = {
  en: 'english',
  de: 'german',
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  const { i18n, t } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  const [data, isLoading] = useFetchData<queryPostType>(
    `*[_type == "blogPage_${currentLanguage}" && language == '${LANGUAGES[currentLanguage]}']{
      language,
      heroSection_Blog{
        ...,
        "imageUrl": backgroundImage.asset->url
      },
      postSectionheading,
      "post": *[_type == 'post' && language == '${LANGUAGES[currentLanguage]}' ${
      selectedCategory && `&& "${selectedCategory}" in categories[]`
    }] | order(publishedAt desc) {
        title,
        author->{
          name,
          slug
        },
        slug,
        mainImage{
          'url': asset->url
        },
        categories,
        publishedAt,
        briefIntro,
        body,
        _id
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
        data.map(({ heroSection_Blog, postSectionheading, post }) => (
          <Fragment key={`${heroSection_Blog.smallText}-${Date.now()}-${Math.random()}`}>
            <HeroSection
              h1Text={heroSection_Blog.headingText}
              pText={heroSection_Blog.smallText}
              backGroundImage={heroSection_Blog.imageUrl}
            />
            <section className={blogStyles['blog__main-section-container']}>
              <HeadingTopSmallVariant
                h2SmallerVariant={postSectionheading.headingSmallerVariant}
                h2BiggerVariant={postSectionheading.headingLargerVariant}
              />

              <fieldset className={blogStyles['blog__filter-category-button-fieldset']}>
                <legend className={blogStyles['visually-hidden']}>
                  {t('filter_blog_category')}
                </legend>
                {blogCategories.map((category) => (
                  <Fragment key={`${category}-${Date.now()}-${Math.random()}`}>
                    <div className={blogStyles['blog__filter-category-button-wrapper']}>
                      <input
                        className={blogStyles['blog__filter-category-input']}
                        id={category}
                        type="radio"
                        name="category"
                        value={category === 'all' ? '' : category}
                        defaultChecked={category === selectedCategory}
                        onChange={handleCategoryChange}
                      />
                      <label
                        className={blogStyles['blog__filter-category-label']}
                        htmlFor={category}
                      >
                        {t(category)}
                      </label>
                    </div>
                  </Fragment>
                ))}
              </fieldset>

              <div className={blogStyles['blog-container']}>
                {post &&
                  post.map(
                    ({ categories, title, briefIntro, slug, mainImage, _id, publishedAt }) => (
                      <Fragment key={`${_id}-${Date.now()}-${Math.random()}`}>
                        <BlogCard
                          heading={title}
                          category={t(`${categories[0]}`)}
                          datePublished={formatDate(
                            publishedAt,
                            currentLanguage === 'de' ? 'de-DE' : 'en-US',
                          )}
                          textContent={briefIntro}
                          imageSrc={mainImage.url}
                          imageAlt={''}
                          buttonText={t('find_out_more')}
                          path={slug.current}
                        />
                      </Fragment>
                    ),
                  )}
              </div>

              {post.length === 0 && (
                <div className={blogStyles['blog__no-posts-available']}>
                  {t('category_not_available')}
                </div>
              )}
            </section>
          </Fragment>
        ))}
    </>
  );
};

export default Blog;

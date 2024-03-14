import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageType } from '@/routes/types/languageType';

import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import BlogCard from '@/pages/blog/BlogCard';
import PageLoading from '../pageLoading/PageLoading';

import blogStyles from '@/pages/blog/Blog.module.css';

import useFetchData from '@/hooks/useFetchData';
import { queryPostType } from '@/pages/blog/types/blogTypes';

const blogCategories = ['all', 'news', 'story', 'interviews', 'biography'];

const LANGUAGES: { [key: string]: string } = {
  en: 'english',
  de: 'german',
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  // const [blogContent, setBlogContent] = useState<initialBlogContentType[]>(initialBlogContent);

  // const handleCategoryChange = (category: string) => {
  //   setSelectedCategory(category);
  // };

  // // React to changes in selectedCategory and update filteredBlogContent accordingly
  // useEffect(() => {
  //   if (selectedCategory) {
  //     setBlogContent(initialBlogContent.filter((item) => item.category === selectedCategory));
  //   } else {
  //     setBlogContent(initialBlogContent);
  //   }
  // }, [selectedCategory]);

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
      post[]-> {
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
      }  
    }`,
    [],
  );

  if (isLoading) {
    return <PageLoading />;
  }

  console.log({ DATA: data });

  return (
    <>
      {data &&
        data.map(({ heroSection_Blog, postSectionheading, post }) => (
          <Fragment key={heroSection_Blog.smallText}>
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
                  <>
                    <div
                      key={category}
                      className={blogStyles['blog__filter-category-button-wrapper']}
                    >
                      <input
                        className={blogStyles['blog__filter-category-input']}
                        id={category}
                        type="radio"
                        name="category"
                        value={category}
                        defaultChecked={category === 'all'}
                        // onChange={handleLanguageChange}
                      />
                      <label
                        className={blogStyles['blog__filter-category-label']}
                        htmlFor={category}
                      >
                        {t(category)}
                      </label>
                    </div>
                  </>
                ))}
              </fieldset>

              <div className={blogStyles['blog-container']}>
                {post &&
                  post.map(({ categories, title, briefIntro, slug, mainImage }) => (
                    <Fragment key={slug.current}>
                      <BlogCard
                        key={slug.current}
                        heading={title}
                        category={t(`${categories[0]}`)}
                        textContent={briefIntro}
                        imageSrc={mainImage.url}
                        imageAlt={''}
                        buttonText={'Find out more'}
                        path={slug.current}
                      />
                    </Fragment>
                  ))}
              </div>
            </section>
          </Fragment>
        ))}
    </>
  );
};

export default Blog;

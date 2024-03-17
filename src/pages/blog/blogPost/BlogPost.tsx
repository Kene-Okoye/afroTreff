import { Fragment, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PortableText } from '@portabletext/react';

import { PostType } from '@/pages/blog/types/blogTypes';
import { LanguageType } from '@/routes/types/languageType';

import PageLoading from '@/pages/pageLoading/PageLoading';
import { components } from '@/components/portableTextCustomComponent/PortableTextCustomComponent';

import blogPostStyles from '@/pages/blog/blogPost/BlogPost.module.css';

import useFetchData from '@/hooks/useFetchData';
import { formatDate } from '@/utils/formatDate';

const BlogPost = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { i18n, t } = useTranslation();

  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  const slug = params.blogId;

  const [data, isLoading] = useFetchData<PostType>(
    `*[slug.current == "${slug}"]{
      language, 
      month,
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
    }`,
    [],
  );

  useEffect(() => {
    if (!data) {
      navigate('../', { replace: true });
    }
  }, [data, navigate]);

  if (isLoading || data.length === 0) {
    return <PageLoading />;
  }

  return (
    <section className={blogPostStyles['blog-post__container']}>
      {data &&
        data.map(({ slug, title, body, mainImage, author, categories, publishedAt }) => (
          <Fragment key={slug.current}>
            <div
              className={blogPostStyles['blog-post__background']}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                  url(${mainImage.url})`,
              }}
            ></div>
            <div className={blogPostStyles['blog-post__article-container']}>
              <article className={blogPostStyles['blog-post__article']}>
                <h1 className={blogPostStyles['blog-post__article-heading']}>{title}</h1>

                <p className={blogPostStyles['blog-post__article-meta-data-author']}>
                  {t('by')} {author.name} -{' '}
                  {formatDate(publishedAt, currentLanguage === 'de' ? 'de-DE' : 'en-US')} {t('in')}{' '}
                  {t('category')}, {t(categories)}
                </p>

                <PortableText value={body} components={components} />
              </article>
            </div>
          </Fragment>
        ))}
    </section>
  );
};

export default BlogPost;

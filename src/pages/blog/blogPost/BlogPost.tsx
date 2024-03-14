import { Fragment, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';

import { PostType } from '@/pages/blog/types/blogTypes';

import PageLoading from '@/pages/pageLoading/PageLoading';
import { components } from '@/components/portableTextCustomComponent/PortableTextCustomComponent';

import blogPostStyles from '@/pages/blog/blogPost/BlogPost.module.css';

import useFetchData from '@/hooks/useFetchData';

const BlogPost = () => {
  const navigate = useNavigate();
  const params = useParams();

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
        data.map(({ slug, title, body, mainImage }) => (
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

                <PortableText value={body} components={components} />
              </article>
            </div>
          </Fragment>
        ))}
    </section>
  );
};

export default BlogPost;

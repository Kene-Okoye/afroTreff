import blogPostStyles from '@/pages/blog/blogPost/BlogPost.module.css';

import heroImageRegister from '@/assets/images/blog_image_5.webp';

const BlogPost = () => {
  return (
    <section className={blogPostStyles['blog-post__container']}>
      <div
        className={blogPostStyles['blog-post__background']}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${heroImageRegister})`,
        }}
      ></div>
      <div className={blogPostStyles['blog-post__article-container']}>
        <article className={blogPostStyles['blog-post__article']}>
          <h1 className={blogPostStyles['blog-post__article-heading']}>
            Celebrating AfroTreff First Anniversary
          </h1>
          <p className={blogPostStyles['blog-post__article-content']}>
            Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix
            ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae
            hendrerit. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae
            legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute
            copiosae hendrerit. Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an
            brute copiosae hendrerit.
          </p>
          <p className={blogPostStyles['blog-post__article-content']}>
            Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix
            ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae
            hendrerit. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae
            legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute
            copiosae hendrerit. Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an
            brute copiosae hendrerit.
          </p>
        </article>
      </div>
    </section>
  );
};

export default BlogPost;

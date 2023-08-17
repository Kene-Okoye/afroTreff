import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import BlogCard from '@/pages/blog/BlogCard';

import blogStyles from '@/pages/blog/Blog.module.css';
import blogImage1 from '@/assets/images/blog_image_1.webp';
import blogImage2 from '@/assets/images/blog_image_2.webp';
import blogImage3 from '@/assets/images/blog_image_3.webp';
import blogImage4 from '@/assets/images/blog_image_4.webp';
import blogImage5 from '@/assets/images/blog_image_5.webp';
import heroImageBlog from '@/assets/images/blog_image_3.webp';

const blogContent = [
  {
    id: 1,
    heading: 'Celebrating AfroTreff"s First Anniversary',
    category: 'story',
    textContent:
      'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit.',
    imageSrc: blogImage1,
    imageAlt: 'picture of some person',
    buttonText: 'read more',
  },
  {
    id: 2,
    heading: 'Cologne Carnival',
    category: 'story',
    textContent:
      'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit.',
    imageSrc: blogImage2,
    imageAlt: 'picture of some person',
    buttonText: 'read more',
  },
  {
    id: 3,
    heading: 'Christopher Street Day',
    category: 'news',
    textContent:
      'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit.',
    imageSrc: blogImage3,
    imageAlt: 'picture of some person',
    buttonText: 'read more',
  },
  {
    id: 4,
    heading: 'Celebrating The Icons In Our Community',
    category: 'news',
    textContent:
      'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit.',
    imageSrc: blogImage4,
    imageAlt: 'picture of some person',
    buttonText: 'read more',
  },
  {
    id: 5,
    heading: 'Celebrating The Icons In Our Community',
    category: 'story',
    textContent:
      'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit.',
    imageSrc: blogImage5,
    imageAlt: 'picture of some person',
    buttonText: 'read more',
  },
];

const Blog = () => {
  return (
    <>
      <HeroSection
        h1Text="BLOG"
        pText="Discover the latest news and stories"
        backGroundImage={heroImageBlog}
      />
      <section>
        <HeadingTopSmallVariant h1SmallerVariant="latest" h1BiggerVariant="posts" />

        <div className={blogStyles['blog-container']}>
          {blogContent.map(
            ({ id, heading, category, textContent, buttonText, imageSrc, imageAlt }) => (
              <BlogCard
                key={id}
                heading={heading}
                category={category}
                textContent={textContent}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                buttonText={buttonText}
                path={id.toString()}
              />
            ),
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;

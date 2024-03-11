import { useEffect, useState } from 'react';

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

const initialBlogContent = [
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

type initialBlogContentType = {
  id: number;
  heading: string;
  category: string;
  textContent: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
};

const blogCategories = ['all', 'news', 'story', 'interviews', 'biography'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [blogContent, setBlogContent] = useState<initialBlogContentType[]>(initialBlogContent);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // React to changes in selectedCategory and update filteredBlogContent accordingly
  useEffect(() => {
    if (selectedCategory) {
      setBlogContent(initialBlogContent.filter((item) => item.category === selectedCategory));
    } else {
      setBlogContent(initialBlogContent);
    }
  }, [selectedCategory]);

  return (
    <>
      <HeroSection
        h1Text="BLOG"
        pText="Discover the latest news and stories"
        backGroundImage={heroImageBlog}
      />
      <section className={blogStyles['blog__main-section-container']}>
        <HeadingTopSmallVariant h2SmallerVariant="latest" h2BiggerVariant="posts" />

        <fieldset className={blogStyles['blog__filter-category-button-fieldset']}>
          <legend className={blogStyles['visually-hidden']}>
            Filter the blog contents by categrory
          </legend>
          {/* Language - ENGLISH */}
          {blogCategories.map((category) => (
            <>
              <div className={blogStyles['blog__filter-category-button-wrapper']}>
                <input
                  className={blogStyles['blog__filter-category-input']}
                  key={category}
                  id={category}
                  type="radio"
                  name="category"
                  value={category}
                  defaultChecked={category === 'all'}
                  // onChange={handleLanguageChange}
                />
                <label className={blogStyles['blog__filter-category-label']} htmlFor={category}>
                  {category}
                </label>
              </div>
            </>
          ))}
        </fieldset>

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
                path={heading}
                // path={id.toString()}
              />
            ),
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;

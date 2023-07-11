import CardBlog from '@/components/cardBlog/CardBlog';
import blogStyles from '@/components/blog/Blog.module.css';
import blogImage1 from '@/assets/images/blog_image_1.webp';
import blogImage2 from '@/assets/images/blog_image_2.webp';
import blogImage3 from '@/assets/images/blog_image_3.webp';
import blogImage4 from '@/assets/images/blog_image_4.webp';
import blogImage5 from '@/assets/images/blog_image_5.webp';

const blogContent = [
  {
    id: 1,
    heading: 'Celebrating AfroTreff"s First Anniversary',
    category: 'news',
    textContent:
      'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit.',
    imageSrc: blogImage5,
    imageAlt: 'picture of some person',
    buttonText: 'read more',
  },
  {
    id: 2,
    heading: 'Cologne Carnival',
    category: 'news',
    textContent:
      'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit.',
    imageSrc: blogImage5,
    imageAlt: 'picture of some person',
    buttonText: 'read more',
  },
  {
    id: 3,
    heading: 'Christopher Street Day',
    category: 'story',
    textContent:
      'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit.',
    imageSrc: blogImage5,
    imageAlt: 'picture of some person',
    buttonText: 'read more',
  },
  {
    id: 4,
    heading: 'Celebrating The Icons In Our Community',
    category: 'story',
    textContent:
      'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit.',
    imageSrc: blogImage5,
    imageAlt: 'picture of some person',
    buttonText: 'read more',
  },
  {
    id: 5,
    heading: 'Celebrating The Icons In Our Community',
    category: 'news',
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
      <section>
        <div className={blogStyles['blog-container']}>
          {blogContent.map(
            ({ id, heading, category, textContent, buttonText, imageSrc, imageAlt }) => (
              <CardBlog
                key={id}
                heading={heading}
                category={category}
                textContent={textContent}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                buttonText={buttonText}
              />
            ),
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;

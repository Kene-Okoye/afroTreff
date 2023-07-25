import blogCardStyles from '@/pages/blog/BlogCard.module.css';
import LinkButton from '@/components/linkButton/LinkButton';

type BlogCardProps = {
  heading: string;
  category: string;
  textContent: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText: string;
  href: string;
};

const BlogCard = ({
  heading,
  category,
  textContent,
  imageSrc,
  imageAlt,
  buttonText,
  href,
}: BlogCardProps) => {
  return (
    <>
      <div className={blogCardStyles['blog-item']}>
        <div className={blogCardStyles['blog-item--image-wrapper']}>
          {/* //TODO: Reintergrate after pics with the perfect dimension are ontained from Francis */}
          <img src={imageSrc} alt={imageAlt} className={blogCardStyles['blog-item--image']} />
        </div>
        <div
          className={`${blogCardStyles['blog-item--text-wrapper']} ${
            category === 'news' && blogCardStyles['blog-item--text-wrapper-news']
          }`}
        >
          <div className={blogCardStyles['blog-item--header-category-wrapper']}>
            <h2 className={blogCardStyles['blog-item--heading']}>{heading}</h2>
            <p
              className={`${blogCardStyles['blog-item--category']} ${
                category === 'news' && blogCardStyles['blog-item--category-news']
              }`}
            >
              {category}
            </p>
          </div>
          <div
            className={`${blogCardStyles['blog-item--text-button-wrapper']} ${
              category === 'story' && blogCardStyles['blog-item--text-button-wrapper-story']
            }`}
          >
            <p className={blogCardStyles['blog-item--text']}>{textContent}</p>
            <LinkButton linkText={buttonText} href={href} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;

import blogCardStyles from '@/pages/blog/BlogCard.module.css';
import LinkButton from '@/components/linkButton/LinkButton';

type BlogCardProps = {
  heading: string;
  category: string;
  datePublished?: string;
  textContent: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText: string;
  href?: string;
  path?: string;
};

const BlogCard = ({
  heading,
  category,
  datePublished,
  textContent,
  imageSrc,
  imageAlt,
  buttonText,
  href,
  path,
}: BlogCardProps) => {
  return (
    <>
      <div className={blogCardStyles['blog-item']} aria-live="polite" aria-atomic="true">
        <div className={blogCardStyles['blog-item--image-wrapper']}>
          {/* //TODO: Reintergrate after pics with the perfect dimension are ontained from Francis */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className={blogCardStyles['blog-item--image']}
            aria-hidden="true"
          />
        </div>
        <div
          className={`${blogCardStyles['blog-item--text-wrapper']} ${
            (category === 'News' || category === 'Nachrichten' || category === 'Lifestyle') &&
            blogCardStyles['blog-item--text-wrapper-news']
          }`}
        >
          <div className={blogCardStyles['blog-item--header-category-wrapper']}>
            <h2 className={blogCardStyles['blog-item--heading']}>{heading}</h2>
            <p
              className={`${blogCardStyles['blog-item--category']} ${
                (category === 'News' || category === 'Nachrichten' || category === 'Lifestyle') &&
                blogCardStyles['blog-item--category-news']
              }`}
            >
              {category} - {datePublished}
            </p>
          </div>
          <div
            className={`${blogCardStyles['blog-item--text-button-wrapper']} ${
              (category === 'Story' || category === 'Geschichte' || category === 'Interviews') &&
              blogCardStyles['blog-item--text-button-wrapper-story']
            }`}
          >
            <p className={blogCardStyles['blog-item--text']}>{textContent}</p>
            <LinkButton linkText={buttonText} href={href} path={path} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;

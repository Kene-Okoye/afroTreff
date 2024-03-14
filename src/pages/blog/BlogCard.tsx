import blogCardStyles from '@/pages/blog/BlogCard.module.css';
import LinkButton from '@/components/linkButton/LinkButton';

type BlogCardProps = {
  heading: string;
  category: string;
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
  textContent,
  imageSrc,
  imageAlt,
  buttonText,
  href,
  path,
}: BlogCardProps) => {
  return (
    <>
      <div className={blogCardStyles['blog-item']}>
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
            (category === 'News' ||
              category === 'Nachrichten' ||
              category === 'Biography' ||
              category === 'Biographie') &&
            blogCardStyles['blog-item--text-wrapper-news']
          }`}
        >
          <div className={blogCardStyles['blog-item--header-category-wrapper']}>
            <h2 className={blogCardStyles['blog-item--heading']}>{heading}</h2>
            <p
              className={`${blogCardStyles['blog-item--category']} ${
                (category === 'News' ||
                  category === 'Nachrichten' ||
                  category === 'biography' ||
                  category === 'Biographie') &&
                blogCardStyles['blog-item--category-news']
              }`}
            >
              {category}
            </p>
          </div>
          <div
            className={`${blogCardStyles['blog-item--text-button-wrapper']} ${
              (category === 'Story' ||
                category === 'Geschichte' ||
                category === 'Interviews' ||
                category === 'Interviews') &&
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

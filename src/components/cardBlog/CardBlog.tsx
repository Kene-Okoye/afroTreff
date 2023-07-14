import cardBlogStyles from '@/components/cardBlog/CardBlog.module.css';
import LinkButton from '@/components/linkButton/LinkButton';

type CardBlogProps = {
  heading: string;
  category: string;
  textContent: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText: string;
  href: string;
};

const CardBlog = ({
  heading,
  category,
  textContent,
  imageSrc,
  imageAlt,
  buttonText,
  href,
}: CardBlogProps) => {
  return (
    <>
      <div className={cardBlogStyles['blog-item']}>
        <div className={cardBlogStyles['blog-item--image-wrapper']}>
          {/* //TODO: Reintergrate after pics with the perfect dimension are ontained from Francis */}
          <img src={imageSrc} alt={imageAlt} className={cardBlogStyles['blog-item--image']} />
        </div>
        <div
          className={`${cardBlogStyles['blog-item--text-wrapper']} ${
            category === 'news' && cardBlogStyles['blog-item--text-wrapper-news']
          }`}
        >
          <div className={cardBlogStyles['blog-item--header-category-wrapper']}>
            <h2 className={cardBlogStyles['blog-item--heading']}>{heading}</h2>
            <p
              className={`${cardBlogStyles['blog-item--category']} ${
                category === 'news' && cardBlogStyles['blog-item--category-news']
              }`}
            >
              {category}
            </p>
          </div>
          <div
            className={`${cardBlogStyles['blog-item--text-button-wrapper']} ${
              category === 'story' && cardBlogStyles['blog-item--text-button-wrapper-story']
            }`}
          >
            <p className={cardBlogStyles['blog-item--text']}>{textContent}</p>
            <LinkButton linkText={buttonText} href={href} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBlog;

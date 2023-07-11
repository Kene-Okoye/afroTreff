import cardBlogStyles from '@/components/cardBlog/CardBlog.module.css';
import Button from '@/components/button/Button';

type CardBlogProps = {
  heading: string;
  category: string;
  textContent: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText: string;
};

const CardBlog = ({
  heading,
  category,
  textContent,
  imageSrc,
  imageAlt,
  buttonText,
}: CardBlogProps) => {
  return (
    <>
      <div className={cardBlogStyles['blog-item']}>
        <div className={cardBlogStyles['blog-item-image-wrapper']}>
          {/* //TODO: Reintergrate after pics with the perfect dimension are ontained from Francis */}
          <img src={imageSrc} alt={imageAlt} className={cardBlogStyles['blog-item-image']} />
        </div>
        <div className={cardBlogStyles['blog-item-text-wrapper']}>
          <div className={cardBlogStyles['blog-item-header-category-wrapper']}>
            <h2 className={cardBlogStyles['blog-item-heading']}>{heading}</h2>
            <p className={cardBlogStyles['blog-item-category']}>{category}</p>
          </div>
          <div className={cardBlogStyles['blog-item-text-button-wrapper']}>
            <p className={cardBlogStyles['blog-item-text']}>{textContent}</p>
            <Button text={buttonText} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBlog;

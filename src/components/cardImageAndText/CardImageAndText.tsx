import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';

import cardImageAndTextStyles from '@/components/cardImageAndText/CardImageAndText.module.css';
import { components } from '@/components/portableTextCustomComponent/PortableTextCustomComponent';

type CardImageAndTextProps = {
  header?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  imageSrc: string;
  imageAlt: string;
  portableTextContent?: PortableTextBlock;
};

const CardImageAndText = ({
  header,
  text1,
  text2,
  text3,
  imageSrc,
  imageAlt,
  portableTextContent,
}: CardImageAndTextProps) => {
  return (
    <>
      <div className={cardImageAndTextStyles['image-text-container']}>
        <div className={cardImageAndTextStyles['text-wrapper']}>
          {header && <h3>{header}</h3>}
          {text1 && <p>{text1}</p>}
          {portableTextContent && (
            <PortableText value={portableTextContent} components={components} />
          )}

          {text2 && <p>{text2}</p>}
          {text3 && <p>{text3}</p>}
        </div>
        <div className={cardImageAndTextStyles['image-wrapper']}>
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </>
  );
};

export default CardImageAndText;

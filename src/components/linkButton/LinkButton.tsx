import { Link } from 'react-router-dom';

import linkButtonStyles from '@/components/linkButton/LinkButton.module.css';

type LinkButtonProps = {
  linkText: string;
  href?: string;
  path?: string;
};

const LinkButton = ({ linkText, href, path }: LinkButtonProps) => {
  return (
    <>
      {href && (
        <a href={href} className={linkButtonStyles['link-button']}>
          {linkText}
        </a>
      )}

      {path && (
        <Link to={path} className={linkButtonStyles['link-button']}>
          {linkText}
        </Link>
      )}
    </>
  );
};

export default LinkButton;

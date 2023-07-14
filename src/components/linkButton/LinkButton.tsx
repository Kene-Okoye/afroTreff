import linkButtonStyles from '@/components/linkButton/LinkButton.module.css';

type LinkButtonProps = {
  linkText: string;
  href: string;
};

const LinkButton = ({ linkText, href }: LinkButtonProps) => {
  return (
    <>
      <a href={href} className={linkButtonStyles['link-button']}>
        {linkText}
      </a>
    </>
  );
};

export default LinkButton;

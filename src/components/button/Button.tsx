import buttonStyles from '@/components/button/Button.module.css';

type buttonProps = {
  text: string;
};

const Button = ({ text }: buttonProps) => {
  return (
    <>
      <button type="button" className={buttonStyles['button']}>
        {text}
      </button>
    </>
  );
};

export default Button;

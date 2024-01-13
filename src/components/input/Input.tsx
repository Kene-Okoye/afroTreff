import { ComponentPropsWithRef, forwardRef } from 'react';

import inputStyles from '@/components/input/Input.module.css';

interface InputProps extends ComponentPropsWithRef<'input'> {
  name: string;
  label: string;
  errorMessage: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { name, label, errorMessage, ...rest }: InputProps,
  ref,
) {
  return (
    <>
      <div className={inputStyles['input__conatiner']}>
        <label className={inputStyles['input__label']} htmlFor={name}>
          {label}
        </label>
        <input className={inputStyles['input__input-field']} ref={ref} id={name} {...rest} />
        <span className={inputStyles['input__error-message']}>{errorMessage}</span>
      </div>
    </>
  );
});

export default Input;

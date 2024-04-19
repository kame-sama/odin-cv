import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const classes = {
  primary: 'button button-primary',
  secondary: 'button button-secondary',
  outline: 'button button-outline',
};

function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button className={classes[variant]} {...props}>
      {children}
    </button>
  );
}

export default Button;

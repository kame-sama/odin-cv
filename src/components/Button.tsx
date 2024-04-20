import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'delete';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const classes = {
  primary: 'button button-primary',
  secondary: 'button button-secondary',
  outline: 'button button-outline',
  delete: 'button button-delete',
};

function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button className={classes[variant]} {...props}>
      {children}
    </button>
  );
}

export default Button;

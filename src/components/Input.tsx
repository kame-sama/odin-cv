import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <div className="form-field">
      <label className="label" htmlFor={props.id}>
        {label}
      </label>
      <input className="input" {...props} />
    </div>
  );
}

export default Input;

import { InputHTMLAttributes } from 'react';

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function InputFile({ label, ...props }: InputFileProps) {
  return (
    <div className="form-field">
      <input className="visually-hidden" type="file" {...props} />
      <label className="button" htmlFor={props.id}>
        {label}
      </label>
    </div>
  );
}

export default InputFile;

import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <div className="form-field">
      <label className="label" htmlFor={props.id}>
        {label}
      </label>
      <textarea className="text-area" {...props}></textarea>
    </div>
  );
}

export default TextArea;

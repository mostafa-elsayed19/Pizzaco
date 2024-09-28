import { ChangeEvent } from "react";

function Input({
  id,
  type,
  placeholder,
  className,
  name,
  required,
  defaultValue,
  onChange,
  value,
}: {
  id?: string;
  type: string;
  placeholder: string;
  className?: string;
  name?: string;
  required?: boolean;
  defaultValue?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      className={`input ${className}`}
      placeholder={placeholder}
      name={name}
      required={required}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
}

export default Input;

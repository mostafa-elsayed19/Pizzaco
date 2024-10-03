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
  disabled,
  checked,
}: {
  id?: string;
  type: string;
  placeholder?: string;
  className?: string;
  name?: string;
  required?: boolean;
  defaultValue?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
}) {
  if (type === "checkbox")
    return (
      <input
        type={type}
        id={id}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        className={className}
      />
    );

  if (defaultValue)
    return (
      <input
        id={id}
        type={type}
        defaultValue={defaultValue}
        className={`input ${className}`}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
        required={required}
        onChange={onChange}
      />
    );

  return (
    <input
      id={id}
      type={type}
      value={value}
      className={`input ${className}`}
      disabled={disabled}
      placeholder={placeholder}
      name={name}
      required={required}
      onChange={onChange}
    />
  );
}

export default Input;

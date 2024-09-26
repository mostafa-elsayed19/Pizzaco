function Input({
  id,
  type,
  placeholder,
  className,
  name,
  required,
  defaultValue,
}: {
  id?: string;
  type: string;
  placeholder: string;
  className?: string;
  name: string;
  required?: boolean;
  defaultValue?: string | number;
}) {
  return (
    <input
      id={id}
      type={type}
      className={`input ${className}`}
      placeholder={placeholder}
      name={name}
      required={required}
      defaultValue={defaultValue}
    />
  );
}

export default Input;

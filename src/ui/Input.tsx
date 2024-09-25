function Input({
  type,
  placeholder,
  className,
}: {
  type: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <input
      type={type}
      className={`input ${className}`}
      placeholder={placeholder}
    />
  );
}

export default Input;

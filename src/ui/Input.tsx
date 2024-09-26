function Input({
  type,
  placeholder,
  className,
  caretColor = false,
}: {
  type: string;
  placeholder: string;
  className?: string;
  caretColor: boolean;
}) {
  return (
    <input
      type={type}
      className={`input ${className} ${caretColor && "caret-accent-color"}`}
      placeholder={placeholder}
    />
  );
}

export default Input;

import { ReactNode } from "react";

function Container({
  children,
  display,
  padding = "py-4",
  textSize = "text-lg",
  className,
}: {
  children: ReactNode;
  display?: string;
  padding?: string;
  textSize?: string;
  className?: string;
}) {
  return (
    <div
      className={`container mx-auto px-6 xl:px-0 ${display || ""} ${padding} ${textSize} ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;

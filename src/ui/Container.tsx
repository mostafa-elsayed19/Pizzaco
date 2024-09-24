import { ReactNode } from "react";

function Container({
  children,
  display,
  padding = "py-4",
  textSize = "text-lg",
}: {
  children: ReactNode;
  display?: string;
  padding?: string;
  textSize?: string;
}) {
  return (
    <div
      className={`container mx-auto px-6 xl:px-0 ${display || ""} ${padding} ${textSize}`}
    >
      {children}
    </div>
  );
}

export default Container;

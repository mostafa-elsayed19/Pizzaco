import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonType = "primary" | "small" | "round" | "secondary" | "link";

const base =
  "rounded-full text-sm font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed ";

const secondaryBtn =
  "border-2 border-stone-300 px-4 py-2.5 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 sm:px-6 sm:py-3.5 ";

const mainBtn =
  "bg-accent-color text-white hover:bg-main-color focus:bg-accent-color focus:ring-accent-color dark:bg-main-color dark:hover:bg-accent-color dark:hover:text-slate-800 dark:focus:text-slate-800 ";

function Button({
  type,
  className,
  children,
  to,
  onClick,
  disabled,
}: {
  type: ButtonType;
  className?: string;
  to?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  disabled?: boolean;
}) {
  const styles = {
    primary: base + mainBtn + "px-4 py-3 sm:px-6 sm:py-4 " + className,
    small: base + mainBtn + "px-4 py-2 md:px-5 md:py-2.5 text-xs " + className,
    round:
      base + mainBtn + "px-1.5 py-0.5 md:px-2.5 md:py-1 text-sm " + className,
    secondary: base + secondaryBtn,
    link: "text-xs text-text-color hover:underline uppercase " + className,
  };

  if (to)
    return (
      <Link to={to} className={`${styles[type]}`}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} disabled={disabled} className={`${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;

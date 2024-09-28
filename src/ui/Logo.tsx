import { Link } from "react-router-dom";

function Logo({
  link = true,
  height = "h-16",
}: {
  link?: boolean;
  height?: string;
}) {
  if (!link) return <img src="/logo.png" className={`${height}`} alt="" />;
  return (
    <Link to="/">
      <img src="/logo.png" className={`${height}`} alt="" />
    </Link>
  );
}

export default Logo;

import { Link } from "react-router-dom";

function Logo({ height = "h-16" }) {
  return (
    <Link to="/">
      <img src="logo.png" className={`${height}`} alt="" />
    </Link>
  );
}

export default Logo;

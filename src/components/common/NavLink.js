import { Typography } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";

let navLinkStyle = {
  color: "white",
  fontWeight: "bold",
  letterSpacing: "3px",
};

const NavLink = ({ path, children }) => {
  return (
    <li>
      <Link className="link" smooth to={path}>
        <Typography style={navLinkStyle} variant="body1">
          {children}
        </Typography>
      </Link>
    </li>
  );
};

export default NavLink;

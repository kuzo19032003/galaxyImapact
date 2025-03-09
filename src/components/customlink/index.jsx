import { Link } from "react-router-dom";

function CustomLink({ children, to,classNameCustomLink }) {
  return <Link to={to} className={classNameCustomLink}>
            {children}
          </Link>;
}
export default CustomLink;  
import { Link } from "react-router-dom";

function CustomLink({ children, to,classNameCustomLink }) {
  return <Link to={to} className="hover:text-blue-500">
            {children}
          </Link>;
}
export default CustomLink;  
import { LoginForm } from "../../../components/form/form";
import Navbar from "../../../components/navbar/";

function Header()
{
    return (
        <div className="md:mb-2 " >
          <Navbar />
          <LoginForm />
        </div>
    )
}
export default Header;
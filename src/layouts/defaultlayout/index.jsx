import Sidebar from "./sidebar/sidebar";
import Header from "./header/header";
import Footer from "./footer/footer";


function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
        <div>
            {children}
            <Sidebar />
        </div>
      <Footer />
    </div>
  );
}
export {DefaultLayout} ;   
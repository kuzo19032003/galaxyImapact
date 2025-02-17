
import Header from "./header/header";
import Footer from "./footer/footer";


function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
        <div>
            {children}
        </div>
      <Footer />
    </div>
  );
}
export {DefaultLayout} ;   

import Header from "./header/header";
import Footer from "./footer/footer";


function DefaultLayout({ children }) {

  
  return (
    <div>
      <Header />
        <div className="content min-h-[100vh]">
            {children}
        </div>
      <Footer />
    </div>
  );
}
export {DefaultLayout} ;   
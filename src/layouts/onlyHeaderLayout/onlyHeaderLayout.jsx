import Header from "./header/header";
function OnlyHeaderLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
export {OnlyHeaderLayout} ;
import Input from "../input";
import Button from "../button";
import { useState,useRef,useEffect } from "react";

function SearchBox() {
  const [handlerBtnSearch, sethandlerBtnSearch] = useState(false);
  const searchRef = useRef(null);
  
  const showSearch = () => {
    sethandlerBtnSearch(!handlerBtnSearch);
  }

  const handlerClickOutside = ( ) =>{
    if(searchRef.current && !searchRef.current.contains(event.target)){
      sethandlerBtnSearch(false);
    }
  }
  useEffect(() =>{
      document.addEventListener("mousedown",handlerClickOutside);
    return ()=>{
      document.removeEventListener("mousedown",handlerClickOutside);
    }
  },[])
  return (
      <div ref={searchRef}>
        <Button className="bg-red-200" onclick={showSearch}>
            {
                !handlerBtnSearch 
                ? "Tìm kiếm" : 
                " "
            }
        </Button>
        <Input  className={ handlerBtnSearch ? "inline border-1 rounded-lg px-2 py-1" : "hidden"} 
            placeholder="Tìm kiếm phim..." 
            Type="text"
        />
      </div>
  );
}
export default SearchBox;
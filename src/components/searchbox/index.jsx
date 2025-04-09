import Input from "../input";
import Button from "../button";
import { useState,useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {search} from "../../assets/images/images"
function SearchBox() {
  const [handlerBtnSearch, sethandlerBtnSearch] = useState(false);

  const [txtSearch,setTxtSearch] = useState("")

  const searchRef = useRef(null);
  
  const nav = useNavigate()

  const showSearch = () => {
    sethandlerBtnSearch(!handlerBtnSearch);
  }

  const handlerClickOutside = ( ) =>{
    if(searchRef.current && !searchRef.current.contains(event.target)){
      sethandlerBtnSearch(false);
    }
  }

  const handleSearch = (e) => {
      if(e.key === "Enter" && txtSearch.trim() !== ""){
          nav(`/search?title=${encodeURIComponent(txtSearch.trim())}`)
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
        <Button onclick={showSearch}>
            {
                !handlerBtnSearch 
                ? <img src={search} alt="" />: 
                " "
            }
        </Button>
        <div  className={ handlerBtnSearch ? "inline px-2 py-1 " : "hidden"}>
          <input           
              className="border-1 rounded-lg p-1 mx-5"   
              placeholder="Tìm kiếm..." 
              type="text"
              onChange={(e) => setTxtSearch(e.target.value)}
              onKeyDown={handleSearch}
          />
        </div>
      </div>
  );
}
export default SearchBox;
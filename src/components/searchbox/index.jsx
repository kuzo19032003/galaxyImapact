import Input from "../input";
import Button from "../button";
import { useState,useRef,useEffect } from "react";
import {search} from "../../assets/images/images"
function SearchBox() {
  const [handlerBtnSearch, sethandlerBtnSearch] = useState(false);
  const [listFilm,setListFilm] = useState([])
  const [txtSearch,setTxtSearch] = useState("")

  const searchRef = useRef(null);
  
  const showSearch = () => {
    sethandlerBtnSearch(!handlerBtnSearch);
  }

  const handlerClickOutside = ( ) =>{
    if(searchRef.current && !searchRef.current.contains(event.target)){
      sethandlerBtnSearch(false);
    }
  }

  const handleSearch = () => {
    console.log(txtSearch);
      
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
        <div  className={ handlerBtnSearch ? "inline px-2 py-1" : "hidden"}>
          <Input           
              className="border-1 rounded-lg p-1 mx-5"   
              placeholder="Tìm kiếm..." 
              Type="text"
              onChange={(e) => setTxtSearch(e.target.value)}
          />
          <Button 
                className="rounded-xl bg-blue-400 p-2 text-white " 
                onclick={() => handleSearch()}
          >
              Tìm kiếm
          </Button>
        </div>
      </div>
  );
}
export default SearchBox;
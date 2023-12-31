import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const {query} = useParams()
   const [search , setSearch] = useState(query || "")

   const navigate = useNavigate();
   const searchHandler = ()=>{
    if(event.key === "Enter" && search.length > 0){
      navigate(`/${search} /${1}`)
    }
   }
  return (
    <>
      <div
        id="searchBox"
        className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4
          border border-[#dfe1e5] rounded-3xl hover:shadow-c hover:border-0 
          focus-within:shadow-c focus-within:border-0"
      >
        <AiOutlineSearch size={18} color="9aa0a6" />
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyUp={searchHandler}
          value={search}
          autoFocus
          className="grow outline-none text-black/[0.87]"
        />
        <div className="flex items-center gap-3">
            {search && (
                <IoMdClose size={18} color="#70757a" className="cursor-pointer " onClick={()=>{setSearch("")}}/>
            )}
            <img src={MicIcon} className="h-6 w-6 cursor-pointer" />
            <img src={ImageIcon}  className="h-6 w-6 cursor-pointer"/>

        </div>
      </div>
    </>
  );
};

export default SearchInput;

import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {

  const { setImgSearch } = useContext(Context);
  const [menuu, setMenuu] = useState("All");
  useEffect(
    ()=>{
         setImgSearch(false)
    }, []
  )
  const handler = (menuItem) => {
    let typeImg = menuItem === "Images";
    setMenuu(menuItem.name);
    setImgSearch(typeImg ? true : false);
  };
  return (
    <>
      <div
        className="flex p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] md:block
        flex-col items-center sticky top-0 bg-white"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center grow">
            <Link to="/">
            <img src={Logo} className="hidden md:block w-[92px] mr-10" />
            
            </Link>
            <SearchInput />
          </div>
          <div className="hidden md:block">
            <ProfileIcon />
          </div>
        </div>
        <div className="flex ml-[-12px] mt-3">
          {menu.map((v, i) => {
            return (
              <span
                key={i}
                className={`flex items-center p-3 cursor-pointer text-[#5f6368] relative ${
                  menuu === v.name ? "text-[#1a73e8]" : ""
                }
                            `}
                onClick={() => handler(v)}
              >
                <span className="hidden md:block mr-2">{v.icon}</span>
                <span className="text-sm">{v.name}</span>
                {menuu === v.name && (
                  <span className="absolute h-[3px] w-[calc(100%-20px)] bottom-0 left-[10px] bg-[#1a73e8]" />
                )}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchResultHeader;

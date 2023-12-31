import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";

const SearchResult = () => {
    return (
        <>
           <div className="flex flex-col min-h-[80vh]">
            <SearchResultHeader/>
           </div>
           <main className="flex">

           </main>
           <Footer/>
        </>
    );
};

export default SearchResult;

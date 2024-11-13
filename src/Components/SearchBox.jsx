// import React from 'react'

import { MdKeyboardVoice, MdOutlineSearch } from "react-icons/md"
import { SiGooglelens } from "react-icons/si"
import { useState, useEffect } from "react";

const SearchBox = () => {
    const [searchText, setSearchText] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);


    useEffect(() => {
        const storedSearchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
        setSearchHistory(storedSearchHistory);
    }, []);

    
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };


    const handleSearchClick = () => {
        if (searchText && !searchHistory.includes(searchText)) {
            const updatedSearchHistory = [searchText, ... searchHistory];
            setSearchHistory(updatedSearchHistory);
            localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));
        }
    };


return (
    <>

        <div className="relative -mt-1 rounded-md w-full sm:w-1/2 mx-auto px-4 sm:px-0">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
            <span className="absolute left-3 text-black sm:text-sm"><MdOutlineSearch className="w-6 h-6"/></span>
            </div>
            <input type="text" value={searchText} onChange={handleSearchChange} className="block w-full h-12 rounded-full border-0 py-1.5 pl-10 pr-20 text-black ring-1 ring-inset ring-black sm:text-sm/6 hover:shadow-md" 
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSearchClick();
                }
            }} />
            
            <div className="absolute inset-y-0 right-0 flex items-center mr-7">
                <a href="#"><MdKeyboardVoice className="mx-2 w-6 h-6"/></a>
                <a href="#"><SiGooglelens className="w-5 h-5"/> </a>           
            </div>

            {searchText && (
            <ul className="absolute top-full left-0 right-0 bg-white shadow-lg max-h-60 overflow-y-auto">
            {searchHistory
                .filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))
                .map((item, index) => (
                <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => setSearchText(item)}
                >
                    {item}
                </li>
                ))}
            </ul>
            )}
        </div>
    
    
    </>
)
}

export default SearchBox
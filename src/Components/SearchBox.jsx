// import React from 'react'

import { MdKeyboardVoice, MdOutlineSearch } from "react-icons/md"
import { SiGooglelens } from "react-icons/si"

const SearchBox = () => {
return (
    <>

        <div className="relative -mt-1 rounded-md w-1/2 mx-auto">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-black sm:text-sm"><MdOutlineSearch className="w-6 h-6"/></span>
            </div>
            <input type="text" className="block w-full h-12 rounded-full border-0 py-1.5 pl-10 pr-20 text-black ring-1 ring-inset ring-black sm:text-sm/6 hover:shadow-md" />
            <div className="absolute inset-y-0 right-0 flex items-center mr-7">
                <a href="#"><MdKeyboardVoice className="mx-1 w-6 h-6"/></a>
                <a href="#"><SiGooglelens className="w-5 h-5"/> </a>           
            </div>
        </div>
    
    
    </>
)
}

export default SearchBox
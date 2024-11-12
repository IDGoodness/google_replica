// import React from 'react'
import { ImLab } from "react-icons/im";
import { MdApps } from "react-icons/md";

const Navbar = () => {
return (
    <>
        <nav className="bg-black">
            <div className="ml-32 max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-end">
                    <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a href="#" className="px-5 py-2 text-sm font-medium text-white">Gmail</a>
                        <a href="#" className="px-5 py-2 text-sm font-medium text-white">Images</a>
                        <a href="#" className="px-5 text-white"><ImLab className="h-6 w-6" /></a>
                        <a href="#" className="px-7"><MdApps className="text-white h-6 w-6"/></a>
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" />
                    </div>
                </div>
            </div>
        </nav>
    </>
)
}

export default Navbar
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { MdRestaurantMenu } from "react-icons/md";
import logo from "../../assets/react.svg"

const Header = () => {
  return (
    <div className="min-h-16 h-16 flex items-center justify-between py-2 px-8 bg-[#1a1a1a]">
        <div className="flex space-x-2 items-center">
            < MdRestaurantMenu size={40} className="text-[#f5f5f5]" />
            <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
        </div>

        <div className="flex items-center gap-4 bg-[#1f1f1f] px-5 py-2 rounded-[20px] w-[500px]">
            <FaSearch className="text-[#f5f5f5]" />
            <input type="text" placeholder="Search" className="bg-[#1f1f1f] outline-none text-[#f5f5f5] px-2 py-1 rounded-md" />
        </div>

        <div className="flex items-center space-x-2">
            <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
                <FaBell className="text-[#f5f5f5] text-2xl" />
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
                <FaUserCircle className="text-[#f5f5f5] text-2xl" />
                <div className="flex flex-col">
                    <h1 className="text-md text-[#f5f5f5] font-semibold">Mandar Waghe</h1>     
                    <p className="text-xs text-[#ababab] font-medium">Admin</p>       
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;

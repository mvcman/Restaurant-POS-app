import React from 'react'
import BackButton from "../components/shared/BackButton";
import MenuContainer from "../components/menu/MenuContainer";
import { MdRestaurantMenu } from "react-icons/md";

import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa6";
import Bill from "../components/menu/Bill";

const MenuItem = ({ name, quantity, price }) => {
    return (
        <div className="flex flex-col bg-[#1f1f1f] gap-2 p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-[#ababab] font-semibold tracking-wide text-md">{name}</h1>
                <p className="text-[#ababab] font-semibold">X {quantity}</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <RiDeleteBin2Fill className="text-[#ababab] cursor-pointer" size={20} />
                    <FaNotesMedical className="text-[#ababab] cursor-pointer" size={20} />
                </div>
                <p className="text-[#f5f5f5] text-md font-bold">₹ {price}</p>
            </div>
        </div>
    )
}

const Menu = () => {
  return (
    <section className="w-full h-auto flex gap-4 p-4 overflow-y-auto pb-20">
        <div className="flex-[3] bg-[#1a1a1a] flex flex-col space-y-4 p-4 rounded-md">
            <div className="flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">Menu</h1>
                </div>
                <div className="flex items-center justify-around gap-4">
                    <MdRestaurantMenu className="text-[#f5f5f5] text-2xl" size={30} />
                    <div className="flex flex-col">
                        <h1 className="text-md text-[#f5f5f5] font-semibold">Customer Name</h1>     
                        <p className="text-xs text-[#ababab] font-medium">Table No. 2</p>       
                    </div>
                </div>
            </div>
            <MenuContainer />
        </div>
        <div className="flex-[1] bg-[#1a1a1a] flex flex-col space-y-4 p-4 rounded-md">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h1 className="text-md font-semibold text-[#f5f5f5] tracking wide">Customer Name</h1>
                    <p className="text-xs text-[#ababab] font-medium mt-1">#101/Dine in</p>
                    <p className="text-xs text-[#ababab] font-medium mt-1">January 19,2025 05:35 PM</p>
                </div>
                <button className="bg-[#f6b100] p-2 text-xl font-bold rounded-md">MW</button>
            </div>
            <hr className="border-[#2a2a2a] border-t-2 my-2" />
            <div className="flex flex-col gap-2">
                <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">OrderDetails</h1>
                <MenuItem name="Chicken Tikka" price={123} quantity={2} />
                <MenuItem name="Chicken Tikka" price={123} quantity={2} />
                <MenuItem name="Chicken Tikka" price={123} quantity={2} />
                <Bill />
            </div>
        </div>
    </section>
  )
}

export default Menu;
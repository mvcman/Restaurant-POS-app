import React from 'react'
import BackButton from "../components/shared/BackButton";
import MenuContainer from "../components/menu/MenuContainer";
import { MdRestaurantMenu } from "react-icons/md";

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
        <div className="flex-[1] bg-[#1a1a1a] flex flex-col space-y-4 p-4 rounded-md"></div>
    </section>
  )
}

export default Menu;
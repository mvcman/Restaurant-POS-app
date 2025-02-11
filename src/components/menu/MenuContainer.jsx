import React, { useState } from 'react';
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";

const MenuContainer = () => {
    const [selected, setSelected] = useState(menus[0]);
  return (
    <div className="flex flex-col w-full">
        <div className="grid grid-cols-4 gap-4">
            {
                menus.map((menu) => {
                    return (
                        <div key={menu.id} className="p-4 flex flex-col gap-4 cursor-pointer rounded-md shadow" style={{ backgroundColor: menu.bgColor }} onClick={() => setSelected(menu)}>
                            <div className="flex items-center justify-between">
                                <h1 className="flex gap-2 items-center text-[#f5f5f5] font-semibold text-lg"><span className="">{menu.icon}</span> 
                                {menu.name}</h1>
                                { selected.id === menu.id && <GrRadialSelected size={20} className="text-white"/>}
                            </div>
                            <p className="text-[#ababab] text-sm">{menu.items.length} Items</p>
                        </div>
                    )
                })
            }
        </div>
        <hr className="border-t-2 my-4 border-[#2a2a2a]" />
        <div className="grid grid-cols-4 gap-4">
            {
                selected.items.map((item) => {
                    return (
                        <div key={item.id} className="p-4 flex flex-col gap-4 cursor-pointer rounded-md shadow bg-[#2d2d2d] hover:bg-[#3a3a3a]">
                            <div className="flex items-center justify-between">
                                <h1 className="flex gap-2 items-center text-[#f5f5f5] font-semibold text-md">
                                {item.name}</h1>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[#f5f5f5] text-xl font-bold">₹ {item.price}</p>
                                <div className="flex items-center justify-between rounded-md gap-2 bg-[#1f1f1f]">
                                    <button 
                                     className="text-yellow-500 text-2xl cursor-pointer p-1 px-2 flex items-center justify-center">&minus;</button>
                                    <span className="text-white bg-[#2d2d2d] flex p-1 px-2">0</span>
                                    <button className="text-yellow-500 text-2xl cursor-pointer p-1 px-2 flex items-center justify-center">&#43;</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MenuContainer
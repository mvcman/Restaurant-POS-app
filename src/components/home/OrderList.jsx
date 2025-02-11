import React from 'react';
import { FaCheckDouble } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const OrderList = () => {
  return (
    <div className="flex items-center gap-6 px-2  py-1">
        <button className="bg-[#f6B100] p-1 text-lg font-bold rounded-md">AM</button>
        <div className="flex items-center justify-between w-full">
            <div className="flex flex-col -gap-2">
                <h1 className="text-[#f5f5f5] text-base font-semibold tracking-wide">Mandar Waghe</h1>
                <p className="text-[#ababab] text-sm">8 Items </p>
            </div>
            <div className="">
                <h1 className="text-[#f6b100] font-semibold border border-[#f6b100] rounded-lg p-2 text-xs">Table No. 3</h1>
            </div>
            <div className="flex flex-col gap-1 items-start">
                <h1 class="text-green-600 text-sm"><FaCheckDouble className="inline mr-1" size={12}/> Ready</h1>
                <p className="text-[#ababab] text-xs"><FaCircle className="inline text-green-500 mr-2" size={10}/> Ready to serve</p>
            </div>
        </div>
    </div>
  )
}

export default OrderList
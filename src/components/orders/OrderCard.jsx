import React from 'react'
import { FaCheckDouble } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div class="w-full p-4 bg-[#262626] rounded-md flex flex-col gap-4 shadow-lg">
      <div className="flex items-center gap-4">
        <button className="bg-[#f6B100] p-2 text-lg font-bold rounded-md">AM</button>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col -gap-1">
              <h1 className="text-[#f5f5f5] text-base font-semibold tracking-wide">Mandar Waghe</h1>
              <p className="text-[#ababab] text-sm">#101/Dine in</p>
          </div>
          <div className="flex flex-col gap-1 items-end">
              <h1 class="bg-[#2e4a40] text-green-600 rounded-sm px-2 py-1 text-xs"><FaCheckDouble className="inline mr-1" size={12}/> Ready</h1>
              <p className="text-[#ababab] text-xs"><FaCircle className="inline text-green-500 mr-2" size={10}/> Ready to serve</p>
          </div>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between ">
        <p className="text-[#ababab] text-base font-semibold">January 18, 2025 06:02 PM</p>
        <p className="text-[#ababab] text-base font-semibold">4 Items</p>
      </div>
      <hr className="w-full my-1 border-t border-gray-500" />
      <div className="flex items-end justify-between ">
        <p className="text-[#f5f5f5] text-lg font-semibold">Total</p>
        <p className="text-[#f5f5f5] text-lg font-semibold">R 1000</p>
      </div>
    </div>
  )
}

export default OrderCard
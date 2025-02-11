import React from 'react';
import { FaSearch } from 'react-icons/fa';
import OrderList from "./OrderList";

const RecentOrders = () => {
  return (
    <div class="p-4 flex flex-col space-y-2 bg-[#1f1f1f] rounded-md w-full h-full">
        <div className="flex items-center justify-between">
            <h1 className="text-lg text-[#f5f5f5] font-semibold tracking-wide">Recent Orders</h1>
            <a href="" className="text-blue-500 font-semibold text-sm">View all</a>
        </div>
        <div className="flex items-center gap-4 bg-[#1a1a1a] px-5 py-2 rounded-md w-full my-2">
            <FaSearch className="text-[#f5f5f5]" />
            <input type="text" placeholder="Search" className="bg-[#1a1a1a] outline-none text-[#f5f5f5] px-2 py-1 rounded-md" />
        </div>
        <div className="flex flex-col gap-2 h-[360px] overflow-y-auto">
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
        </div>
    </div>
  )
}

export default RecentOrders
import React, { useState } from 'react'
import OrderCard from '../components/orders/OrderCard';
import BackButton from '../components/shared/BackButton';

const Orders = () => {
    const [status, setStatus] = useState("all");
  return (
    <section className="w-full h-auto flex flex-col gap-4 p-4 overflow-y-auto pb-20">
        <div className="flex items-center justify-between">
            <div class="flex items-center gap-4">
                <BackButton />
                <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">Orders</h1>
            </div>
            <div className="flex items-center justify-around gap-4">
                <button onClick={() => setStatus("all")} className={`text-base ${ status == "all" ? "bg-[#f6b100] text-white" : "bg-[#383838] text-[#ababab]"} rounded-lg font-semibold px-2 py-1`}>All</button>
                <button onClick={() => setStatus("in progress")} className={`text-base ${ status == "in progress" ? "bg-[#f6b100] text-white" : "bg-[#383838] text-[#ababab]"} rounded-lg font-semibold px-2 py-1`}>In Progress</button>
                <button onClick={() => setStatus("ready")} className={`text-base ${ status == "ready" ? "bg-[#f6b100] text-white" : "bg-[#383838] text-[#ababab]"} rounded-lg font-semibold px-2 py-1`}>Ready</button>
                <button onClick={() => setStatus("completed")} className={`text-base ${ status == "completed" ? "bg-[#f6b100] text-white" : "bg-[#383838] text-[#ababab]"} rounded-lg font-semibold px-2 py-1`}>Completed</button>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
        </div>
    </section>
  )
}

export default Orders;

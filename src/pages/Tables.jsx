import React, { useState } from 'react'
import TableCard from '../components/tables/TableCard';
import BackButton from '../components/shared/BackButton';
import { tables } from '../constants';

const Tables = () => {
    const [status, setStatus] = useState("all");
  return (
    <section className="w-full h-auto flex flex-col gap-4 p-4 overflow-y-auto pb-20">
        <div className="flex items-center justify-between">
            <div class="flex items-center gap-4">
                <BackButton />
                <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">Tables</h1>
            </div>
            <div className="flex items-center justify-around gap-4">
                <button onClick={() => setStatus("all")} className={`text-base ${ status == "all" ? "bg-[#f6b100] text-white" : "bg-[#383838] text-[#ababab]"} rounded-lg font-semibold px-2 py-1`}>All</button>
                <button onClick={() => setStatus("booked")} className={`text-base ${ status == "booked" ? "bg-[#f6b100] text-white" : "bg-[#383838] text-[#ababab]"} rounded-lg font-semibold px-2 py-1`}>Booked</button>
    
            </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
            {
                tables.map((table) => {
                    return <TableCard id={table.id} key={table.id} name={table.name} status={table.status} initials={table.initial}/>
                })
            } 
        </div>
    </section>
  )
}

export default Tables;

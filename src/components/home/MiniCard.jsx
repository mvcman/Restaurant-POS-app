import React from 'react'

const MiniCard = ({ title, icon, number, footerNum }) => {
  return (
    <div className="p-4 rounded-md bg-[#1f1f1f] w-[50%]">
        <div className="flex items-start justify-between">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">{title}</h1>
            <button className={`${title === "Total Earnings" ? "bg-[#02ca3a] p-2 text-white rounded-sm" : "bg-[#f6B100] p-2 text-white rounded-sm" }`}>{icon}</button>
        </div>
        <div className="mt-4 flex flex-col space-y-2">
            <h1 className="text-[#f5f5f5] text-4xl font-bold">{number}</h1>
            <h1 className="text-[#f5f5f5]"><span className="text-[#02ca3a]">{footerNum}%</span> than yesterday</h1>
        </div>
    </div>
  )
}

export default MiniCard
import React from 'react'

const Bill = () => {
  return (
    <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
            <p className="text-xs text-[#ababab] font-medium">Items (4)</p>
            <h1 className="text-md text-[#f5f5f5] font-bold">240</h1>
        </div>
        <div className="flex items-center justify-between">
            <p className="text-xs text-[#ababab] font-medium">Tax (5.25%)</p>
            <h1 className="text-md text-[#f5f5f5] font-bold">24</h1>
        </div>
        <div className="flex items-center justify-between">
            <p className="text-xs text-[#ababab] font-bold">Total</p>
            <h1 className="text-md text-[#f5f5f5] font-bold">264</h1>
        </div>
        <div className="flex items-center gap-2 mt-2">
            <button className="w-full bg-[#1f1f1f] px-4 py-2 rounded-md text-[#ababab] font-semibold">
                Cash
            </button>
            <button className="w-full bg-[#1f1f1f] px-4 py-2 rounded-md text-[#ababab] font-semibold">
                Online
            </button>
        </div>
        <div className="flex items-center gap-2 mt-2">
            <button className="w-full bg-[#025cca] px-4 py-2 rounded-md text-[#f5f5f5] font-semibold">
                Print Receipt
            </button>
            <button className="w-full bg-[#f6b100] px-4 py-2 rounded-md text-[#1f1f1f] font-semibold">
                Place Order
            </button>
        </div>
    </div>
  )
}

export default Bill
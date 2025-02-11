import React from 'react';
import { popularDishes } from "../../constants";

const PopularDishes = () => {
  return (
    <div class="w-full h-full overflow-y-auto p-4 flex flex-col space-y-2">
        <div className="flex items-center justify-between">
            <h1 className="text-lg text-[#f5f5f5] font-semibold tracking-wide">Popular Dishes</h1>
            <a href="" className="text-blue-500 font-semibold text-sm">View all</a>
        </div>
        <div className="flex flex-col space-y-2">
            {
                popularDishes.map((dish) => {
                    return (
                        <div key={dish.id} className="flex items-center gap-4 bg-[#1f1f1f] rounded-md px-4 py-2">
                            <h1 className="text-[#f5f5f5] font-bold text-xl">{dish.id < 10 ? `0${dish.id}` : dish.id }</h1>
                            <img src={dish.image} alt={dish.name} className="w-[40px] h-[40px] rounded-md" />
                            <div>
                                <h1 className="text-[#f5f5f5] font-semibold text-sm tracking-wide">{dish.name}</h1>
                                <p className="text-[#f5f5f5] font-semibold text-sm"><span className="text-[#ababab]">Orders: </span>{dish.numberOfOrders}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PopularDishes
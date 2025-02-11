import React from 'react'
import { getRandomBG } from "../../utils";
import { useNavigate } from "react-router-dom";

const TableCard = ({ key, name, status, initials }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (status === "Booked") return;
    navigate("/menu");
  }
    return (
    <div onClick={handleClick} key={key} class="w-full p-4 bg-[#262626] rounded-md flex flex-col gap-4 shadow-lg">
      <div className="flex items-end justify-between ">
        <p className="text-[#f5f5f5] text-lg font-semibold">{name}</p>
        <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "bg-yellow-400 text-yellow-700 opacity-75" } px-2 py-1 text-xs rounded-sm`}>{status}</p>
      </div>
      <div className="flex items-center justify-center p-2">
        <h1 className={`${getRandomBG()} text-white rounded-full p-6 text-xl font-bold`}>{initials}</h1>
      </div>
    </div>
  )
}

export default TableCard
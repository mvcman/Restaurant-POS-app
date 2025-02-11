import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom"; 
import Modal from "./Modal";

const BottomNav = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [guestCount, setGuestCount] = useState(0);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const closeAndNavigate = () => {
      setOpen(false);
      navigate("/tables");
    }

    const increment = () => {
      if(guestCount >= 6) return;
      setGuestCount((prev) => prev + 1);
    }

    const decrement = () => {
      if(guestCount <= 0) return;
      setGuestCount((prev) => prev - 1);
    }
  return (
    <>
    <div className="w-full h-16 fixed bottom-0 left-0 right-0 flex items-center justify-around bg-[#262626]">
        <button onClick={() => navigate("/")} className="text-[#f5f5f5] bg-[#343434] w-[200px] rounded-full p-2 flex items-center justify-center"><FaHome className="inline mr-4" size={20} /> Home</button>
        <button onClick={() => navigate("/orders")} className="text-[#f5f5f5] bg-[#343434] w-[200px] rounded-full p-2 flex items-center justify-center"><MdOutlineReorder className="inline mr-4" size={20} /> Orders </button>
        <button onClick={() => navigate("/tables")} className="text-[#f5f5f5] bg-[#343434] w-[200px] rounded-full p-2 flex items-center justify-center"><MdTableBar className="inline mr-4" size={20} /> Table</button>
        <button onClick={() => navigate("/orders")} className="text-[#f5f5f5] bg-[#343434] w-[200px] rounded-full p-2 flex items-center justify-center"><CiCircleMore className="inline mr-4" size={20} /> More</button>

        <button onClick={openModal} className="absolute bottom-6 bg-[#f6B100] text-[#f5f5f5] rounded-full p-3">
            <BiSolidDish size={30} />
        </button>
    </div>
    <Modal isOpen={open} onClose={closeModal} title="Create Order">
      <div className="">
        <label className="block text-[#ababab] mb-2 text-sm font-medium">Customer Name</label>
        <div className="flex items-center rounded-lg py-2 px-4 bg-[#1f1f1f]">
          <input type="text" name="" placeholder="Enter customer name" id="" className="bg-transparent flex-1 text-white focus:outline-none" />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-[#ababab] mb-2 text-sm font-medium">Mobile No.</label>
        <div className="flex items-center rounded-lg py-2 px-4 bg-[#1f1f1f]">
          <input type="text" name="" placeholder="Enter customer number" id="" className="bg-transparent flex-1 text-white focus:outline-none" />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-[#ababab] mb-2 text-sm font-medium">Guest</label>
        <div className="flex items-center justify-between rounded-lg py-2 px-4 bg-[#1f1f1f]">
          <button onClick={decrement} className="text-yellow-500 text-2xl">&minus;</button>
          <span className="text-white">{guestCount} person</span>
          <button onClick={increment} className="text-yellow-500 text-2xl">&#43;</button>
        </div>
      </div>
      <button onClick={() => closeAndNavigate()} className="w-full bg-[#f6b100] text-[#f5f5f5] rounded-lg py-2 mt-4 hover:text-yellow-700">Create Order</button>
    </Modal>
    </>
  )
}

export default BottomNav;
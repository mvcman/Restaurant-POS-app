import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();
  return (
    <button className="p-2 rounded-full bg-[#f6b100]" onClick={() => navigate(-1)}><IoMdArrowBack size={20} className="text-[#f5f5f5]" /></button>
  )
}

export default BackButton
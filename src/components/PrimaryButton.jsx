import React from "react";

export default function PrimaryButton({children, onClick, disabled}){
  return (
    <button onClick={onClick} disabled={disabled} className={
      `inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-shadow duration-200 
      ${disabled ? 'bg-gray-600 text-gray-200' : 'bg-gradient-to-r from-[#C62828] to-[#44E1C4] text-white shadow-lg'}`
    }>
      {children}
    </button>
  )
}

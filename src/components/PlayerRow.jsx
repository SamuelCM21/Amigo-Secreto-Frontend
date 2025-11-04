import React from "react";
import { motion } from "framer-motion";

export default function PlayerRow({ index, nombre, telefono, onChange, onRemove }){
  return (
    <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} exit={{opacity:0}} layout className="flex gap-3 items-center">
      <input value={nombre} onChange={e=>onChange(index,'nombre', e.target.value)} placeholder="Nombre" className="flex-1 p-2 rounded bg-[#071829] border border-gray-700" />
      <input value={telefono} onChange={e=>onChange(index,'telefono', e.target.value)} placeholder="+506..." className="w-44 p-2 rounded bg-[#071829] border border-gray-700" />
      <button onClick={()=>onRemove(index)} className="px-3 py-2 rounded bg-[#C62828] text-white">Eliminar</button>
    </motion.div>
  )
}

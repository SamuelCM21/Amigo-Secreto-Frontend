import React, { useState } from "react";
import Header from "../components/Header";
import PlayerRow from "../components/PlayerRow";
import PrimaryButton from "../components/PrimaryButton";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function CreateGame(){
  const [participants, setParticipants] = useState([{nombre:'', telefono:''},{nombre:'', telefono:''}]);
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

  const add = ()=> setParticipants([...participants, {nombre:'', telefono:''}]);
  const remove = (i)=> setParticipants(participants.filter((_,idx)=>idx!==i));
  const onChange = (i, field, value)=> {
    const copy = [...participants]; copy[i][field]=value; setParticipants(copy);
  }

  const createGame = async ()=>{
    setLoading(true); setLinks([]);
    try{
      const res = await axios.post("http://localhost:3000/api/game/create", { participantes: participants });
      setLinks(res.data.links);
    }catch(err){
      alert(err.response?.data?.error || err.message);
    }finally{ setLoading(false); }
  }

  const copy = async (text)=> {
    await navigator.clipboard.writeText(text);
    alert("Copiado al portapapeles");
  }

  return (
    <div className="container">
      <Header />
      <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} className="bg-[#071829] rounded-2xl p-6 shadow-xl border border-gray-800">
        <div className="flex gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-3" style={{color:'#fff'}}>Participantes</h2>
            <div className="space-y-3">
              <AnimatePresence>
                {participants.map((p,i)=>(
                  <PlayerRow key={i} index={i} nombre={p.nombre} telefono={p.telefono} onChange={onChange} onRemove={remove} />
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-4 flex gap-3">
              <PrimaryButton onClick={add}>+ Agregar</PrimaryButton>
              <PrimaryButton onClick={createGame} disabled={loading}>{loading ? 'Generando...' : 'Generar enlaces'}</PrimaryButton>
            </div>
          </div>

          <div className="w-96">
            <div className="bg-white rounded-xl p-4 text-center shadow-inner" style={{color:'#071129'}}>
              <h3 className="font-semibold">Instrucciones</h3>
              <p className="text-sm mt-2">Completa los nombres y teléfonos. Luego haz clic en "Generar enlaces". Abre cada enlace para enviar el mensaje por WhatsApp.</p>
            </div>

            {links.length>0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2" style={{color:'#fff'}}>Enlaces</h3>
                <div className="space-y-2">
                  {links.map((l,idx)=>(
                    <div key={idx} className="bg-[#021224] p-3 rounded-lg flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div><strong className="text-white">{l.nombre}</strong><div className="text-sm text-gray-300">{l.telefono}</div></div>
                        <div className="flex gap-2">
                          <a href={l.waLink} target="_blank" rel="noreferrer" className="text-sm underline">Abrir</a>
                          <button onClick={()=>copy(l.waLink)} className="px-2 py-1 rounded bg-[#C62828] text-white text-sm">Copiar</button>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">Link de revelación:</div>
                      <input readOnly value={l.revealLink} className="p-2 rounded bg-[#071829] text-sm border border-gray-700" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

import React from "react";

export default function Header(){ 
  return (
    <header className="w-full flex items-center justify-center mb-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold" style={{color:'#fff'}}>🎁 <span style={{color:'#C62828'}}>Amigo</span> <span style={{color:'#44E1C4'}}>Secreto</span></h1>
        <p className="text-sm text-gray-300 mt-1">Sorteo rápido y elegante — copia o abre cada link para enviar por WhatsApp</p>
      </div>
    </header>
  )
}

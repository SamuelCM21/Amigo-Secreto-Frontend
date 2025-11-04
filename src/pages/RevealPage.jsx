import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

export default function RevealPage(){
  const { id } = useParams();
  const [params] = useSearchParams();
  const [amigo, setAmigo] = useState(null);

  useEffect(()=>{
    const fetcher = async ()=>{
      try{
        const res = await axios.get(`http://localhost:3000/api/game/reveal/${id}?token=${params.get('token')}`);
        setAmigo(res.data.amigo);
      }catch(err){
        setAmigo(null);
      }
    }
    fetcher();
  }, [id, params]);

  return (
    <div className="container">
      <Header />
      <div className="bg-[#071829] rounded-2xl p-8 shadow-xl border border-gray-800 text-center">
        <h2 className="text-2xl font-semibold mb-4" style={{color:'#fff'}}>🎁 Tu amigo secreto es</h2>
        {amigo ? <div className="text-3xl font-bold" style={{color:'#44E1C4'}}>{amigo}</div> : <div className="text-gray-400">Token inválido o expirado</div>}
      </div>
    </div>
  )
}

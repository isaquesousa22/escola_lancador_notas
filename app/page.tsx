"use client";
import { url } from "inspector";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function Home() {
   const navegacao = useRouter();
  return (
  <div>
    <main>
        <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{backgroundImage:   "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/imagens/fundo.jpg')"}}>

          <div className="card w-96 bg-base-100 shadow-sm justify-items-center">
            <div className="card-body">
              <h1 className="font-bold text-5xl mb-4">Quem você é</h1> 
              </div>

              <div className="flex flex-col w-full">    
              <button 
              onClick={() => navegacao.push("/prof_login")}
              className="btn btn-primary mb-2 bg-[#13389c] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#001e80] transition duration-500 hover:scale-105">
                Professor</button>

             <button 
             onClick={() => navegacao.push("/aluno_login")}
             className="btn btn-secondary bg-[#13389c] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#001e80] transition duration-500 hover:scale-105">Aluno</button>
             </div>
        
           </div>
        </div>
    </main>
    <footer>

    </footer>
  </div>
  );
}

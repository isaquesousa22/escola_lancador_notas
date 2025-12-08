"use client";
import { url } from "inspector";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Professor() {
   const navegacao = useRouter();
  return (
  <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{backgroundImage:   "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/imagens/fundo.jpg')"}}>

      <header className="p-5 bg-[#fdf3e6]">
  <nav className="flex justify-between items-center">
    <div className="flex gap-5">
      <a className="text-[#8ea579] font-bold">EcoSolutions</a>

      <a className="text-[#8ea579]" href="#servico">Services</a>
      <a className="text-[#8ea579]" href="#why-recycle">Why Recycle</a>
      <a className="text-[#8ea579]" href="#sobre-nos">About Us</a>

      
    </div>

    <div className="flex gap-4">

     
     
      
        <>
          <button
            onClick={() => navegacao.push("/perfil")}
            className="bg-green-600 p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-green-700 transition duration-500 hover:scale-105"
          >
            Perfil
          </button>

          <button
            onClick={() => navegacao.push("/")}
            className="bg-red-600 p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-red-700 transition duration-500 hover:scale-105"
          >
            Sair
          </button>
        </>
    </div>
  </nav>
</header>
    <main>
    <div className="flex flex-col items-center justify-center gap-6">

        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
             </figure>
        <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
        </div>
        </div>
         </div>

        </div>
       
    </main>

  </div>
  );
}
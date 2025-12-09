"use client";

import { useRouter } from "next/navigation";

export default function Professor() {
  const navegacao = useRouter();

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/imagens/fundo.jpg')",
      }}
    >
      
      <header className="p-5 bg-[#fdf3e6] shadow-md">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex gap-5">
            <a className="text-[#8ea579] font-bold">Bem vindo</a>

           
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navegacao.push("/perfil")}
              className=" p-3 rounded-lg font-bold text-white bg-[#13389c] hover:bg-[#001e80]/90 transition duration-300 hover:scale-105"
            >
              Perfil
            </button>

            <button
              onClick={() => navegacao.push("/")}
              className="bg-red-600 p-3 rounded-lg font-bold text-white hover:bg-red-700 transition duration-300 hover:scale-105"
            >
              Sair
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="card bg-white w-80 shadow-lg  rounded-xl overflow-hidden">
            <figure>
              <img
                src="/imagens/boletim.jpg"
                alt="Imagem"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-lg text-black font-bold">Notas no sistema</h2>

              <p className="text-sm text-gray-700">
                .
              </p>

              <div className="card-actions justify-end mt-4">
              <button
               onClick={() => navegacao.push("#")}
              className="w-60 ml-8 mb-2 bg-[#13389c] hover:bg-[#001e80]/90 text-white text-lg py-3 rounded-md"
            >
              Lançar Notas
            </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

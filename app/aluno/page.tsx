"use client";

import { useRouter } from "next/navigation";
import { User, LogOut, BookOpen, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

export default function Professor() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/imagens/fundo.jpg')",
      }}
    >
      
      <header className="bg-white/90 backdrop-blur shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-[#13389c] flex items-center gap-2">
            <BookOpen size={22} />
            Área do Professor
          </h1>

          <div className="flex gap-3">
            <button
              onClick={() => router.push("/perfil")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#13389c] text-white hover:bg-[#001e80] transition"
            >
              <User size={18} /> Perfil
            </button>

            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              <LogOut size={18} /> Sair
            </button>
          </div>
        </nav>
      </header>

    
      <main className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
        
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <img
              src="/imagens/boletim.jpg"
              alt="Notas"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <ClipboardList size={20} />
                Boletim
              </h2>

              <p className="text-gray-600 text-sm mt-2">
                Acompanhe suas notas por aqui.
              </p>

              <button
                onClick={() => router.push("/prof/notas")}
                className="mt-5 w-full py-3 rounded-lg bg-[#13389c] text-white font-semibold hover:bg-[#001e80] transition"
              >
                Ver Boletim
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

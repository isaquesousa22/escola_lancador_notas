"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const navegacao = useRouter();

  return (
    <div>
      <main>
        <div
          className="h-screen bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/imagens/fundo.jpg')",
          }}
        >
          <div className="card w-96 bg-base-100 shadow-sm justify-items-center p-6">
            <div className="flex flex-col w-full gap-3">

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navegacao.push("/prof_login")}
                className="btn btn-primary bg-[#13389c] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#001e80]"
              >
                Professor
              </motion.button>

              
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navegacao.push("/aluno_login")}
                className="btn btn-secondary bg-[#13389c] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#001e80]"
              >
                Aluno
              </motion.button>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";

export default function LoginProfessor() {
  const navegacao = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/login/aluno", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
});


      const text = await res.text();

       let data;
         try {
        data = JSON.parse(text);
        } catch (error) {
       data = text;
       }

    if (!res.ok) {
      alert(data);
      return;
    }

    login(data);

    
    navegacao.push("/prof");
  }

  return (
    <main>
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/imagens/fundo.jpg')",
        }}
      >
        <div className="min-h-78 flex items-center justify-center bg-white rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="w-96 p-6">
            <h2 className="text-2xl text-center text-black mb-6 font-bold">
              Login do Aluno
            </h2>

             <fieldset className="fieldset mb-4 text-black">
              <legend className="fieldset-legend">Nome</legend>
              <input
                name="nome"
                type="text"
                className="input input-bordered w-full"
                placeholder="Seu nome"
                required
                value={formData.nome}
                onChange={handleChange}
              />
            </fieldset>

           
            <fieldset className="fieldset mb-4 text-black">
              <legend className="fieldset-legend">Email</legend>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Seu email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </fieldset>

           
            <fieldset className="fieldset mb-6 text-black">
              <legend className="fieldset-legend">Senha</legend>
              <input
                name="senha"
                type="password"
                className="input input-bordered w-full"
                placeholder="Senha"
                required
                value={formData.senha}
                onChange={handleChange}
              />
            </fieldset>

            <div className="flex justify-between">

              <button
              type="submit"
              className="w-full bg-[#13389c] hover:bg-[#001e80]/90 transition text-white text-lg py-3 rounded-md disabled:opacity-60"
            >
              Entrar
            </button>
            </div>
            <div className="flex flex-col gap-3 mt-6">
            <button
              type="button"
              onClick={() => navegacao.push("/cadastrar_aluno")}
              className="w-full border border-[#13389c] text-[#13389c] hover:bg-[#13389c]/10 py-3 rounded-md"
            >
              Cadastrar-se
            </button>

            <button
              type="button"
              onClick={() => navegacao.push("/")}
              className="w-full text-gray-500 hover:text-gray-700 py-2"
            >
              Cancelar
            </button>
          </div>
          </form>
        </div>
      </div>
    </main>
  );
}

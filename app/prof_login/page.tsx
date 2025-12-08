"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";

export default function LoginProfessor() {
  const navegacao = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  // Atualiza o estado conforme o usuário digita
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

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
        <div className="min-h-78 flex items-center justify-center bg-red-950 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="w-96 p-6">
            <h2 className="text-2xl text-center text-white mb-6 font-bold">
              Login
            </h2>

            {/* EMAIL */}
            <fieldset className="fieldset mb-4">
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

            {/* SENHA */}
            <fieldset className="fieldset mb-6">
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
                type="button"
                onClick={() => navegacao.push("/")}
                className="btn btn-neutral"
              >
                Cancelar
              </button>

              <button className="btn btn-primary" type="submit">
                Entrar
              </button>
            </div>

            <button
              type="button"
              onClick={() => navegacao.push("/cadastrar")}
              className="btn btn-neutral mt-4 w-full"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

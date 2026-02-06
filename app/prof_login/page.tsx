"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";

interface LoginFormData {
  nome: string;
  email: string;
  senha: string;
}

export default function LoginProfessor() {
  const router = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState<LoginFormData>({
    nome: "",
    email: "",
    senha: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3001/login/professor",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const text = await response.text();
      const data = text ? JSON.parse(text) : null;

      if (!response.ok) {
        alert(data?.message || "Erro ao realizar login.");
        return;
      }

      login(data);
      router.push("/prof");
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Não foi possível conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/imagens/fundo.jpg')",
      }}
    >
      <div className="bg-white rounded-xl shadow-xl w-[420px] p-8">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Login do Professor
          </h2>

          <fieldset className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              name="nome"
              type="text"
              className="input input-bordered w-full text-blue-950"
              placeholder="Digite seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full text-blue-950"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              name="senha"
              type="password"
              className="input input-bordered w-full text-blue-950"
              placeholder="Digite sua senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </fieldset>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#13389c] hover:bg-[#001e80]/90 transition text-white text-lg py-3 rounded-md disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <div className="flex flex-col gap-3 mt-6">
            <button
              type="button"
              onClick={() => router.push("/cadastrar_professor")}
              className="w-full border border-[#13389c] text-[#13389c] hover:bg-[#13389c]/10 py-3 rounded-md"
            >
              Cadastrar-se
            </button>

            <button
              type="button"
              onClick={() => router.push("/")}
              className="w-full text-gray-500 hover:text-gray-700 py-2"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
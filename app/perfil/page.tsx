"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Perfil() {
  const { user } = useAuth();
  const navegacao = useRouter();

  const [form, setForm] = useState({
    id: 0,
    nome: "",
    telefone: "",
    endereco: "",
    descricao: ""
  });

  useEffect(() => {
    if (!user) {
      navegacao.push("/prof_login");
      navegacao.push("cadastro_prof");
    } else {
      setForm({
        id: user.id, // ← ESSENCIAL
        nome: user.nome ?? "",
        telefone: user.telefone ?? "",
        endereco: user.endereco ?? "",
        descricao: user.descricao ?? ""
      });
    }
  }, [user]);

  function handleChange(campo: string, valor: string) {
    setForm({ ...form, [campo]: valor });
  }

  async function salvar() {
    const res = await fetch("http://localhost:3001/editar_usuario", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (!res.ok) {
      const erro = await res.text();
      alert("Erro ao salvar: " + erro);
      return;
    }

    alert("Dados atualizados!");
  }

  return (
    <main className="p-10 max-w-lg mx-auto">
      <header className="">
        <nav>
          <div>
            <button
              onClick={() => navegacao.push("/prof")}
              className="bg-purple-600 text-white px-6 py-2 mt-4 ml-4 rounded-xl hover:bg-purple-700 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <ArrowLeft size={20} />
            </button>
          </div>
        </nav>
      </header>

      <h1 className="text-3xl font-bold mb-6">Meu Perfil</h1>

      <div className="space-y-4">
        <p>Nome</p>
        <input
          className="border p-2 w-full"
          value={form.nome}
          onChange={e => handleChange("nome", e.target.value)}
        />

        <p>Telefone</p>
        <input
          className="border p-2 w-full"
          value={form.telefone}
          onChange={e => handleChange("telefone", e.target.value)}
        />

        <p>Endereço</p>
        <input
          className="border p-2 w-full"
          value={form.endereco}
          onChange={e => handleChange("endereco", e.target.value)}
        />

        <p>Descrição</p>
        <textarea
          className="border p-2 w-full"
          value={form.descricao}
          onChange={e => handleChange("descricao", e.target.value)}
        />

        <button
          className="bg-green-600 text-white p-2 rounded w-full"
          onClick={salvar}
        >
          Salvar Alterações
        </button>
      </div>
    </main>
  );
}
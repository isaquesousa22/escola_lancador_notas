"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, Mail, MapPin, Phone, Store, Lock } from "lucide-react";
import { useState } from "react";

export default function Professor() {
  const nav = useRouter();

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    endereco: "",
    email: "",
    senha: "",
    materia: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cadastrar professor:", formData);

    await fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    alert("Professor cadastrado com sucesso!");
    nav.push("/prof");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main>
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/imagens/fundo.jpg')",
        }}
      >
        <div className="min-h-78 p-8 bg-white rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl">
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-black">
                  <Store className="w-4 h-4" />
                  Nome
                </p>
                <input
                  id="nome"
                  type="text"
                  placeholder="Ex: Professor João da Silva"
                  value={formData.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  required
                  className="w-full border border-gray-400 rounded-md p-1"
                />
              </div>

              <div className="space-y-2">
                <p className="flex items-center gap-2 text-black">
                  <Phone className="w-4 h-4" />
                  Telefone
                </p>
                <input
                  id="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.telefone}
                  onChange={(e) => handleChange("telefone", e.target.value)}
                  required
                  className="w-full border border-gray-400 rounded-md p-1"
                />
              </div>
            </div>

            {/* Endereço */}
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-black">
                <MapPin className="w-4 h-4" />
                Endereço completo
              </p>
              <input
                id="endereco"
                type="text"
                placeholder="Rua, número, bairro"
                value={formData.endereco}
                onChange={(e) => handleChange("endereco", e.target.value)}
                required
                className="w-full border border-gray-400 rounded-md p-1"
              />
            </div>

            {/* Email + Senha */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-black">
                  <Mail className="w-4 h-4" />
                  Email
                </p>
                <input
                  id="email"
                  type="email"
                  placeholder="professor@escola.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="w-full border border-gray-400 rounded-md p-1"
                />
              </div>

              <div className="space-y-2">
                <p className="flex items-center gap-2 text-black">
                  <Lock className="w-4 h-4" />
                  Senha
                </p>
                <input
                  id="senha"
                  type="password"
                  placeholder="*******"
                  value={formData.senha}
                  onChange={(e) => handleChange("senha", e.target.value)}
                  required
                  className="w-full border border-gray-400 rounded-md p-1"
                />
              </div>
            </div>

      
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-black">
                <Clock className="w-4 h-4" />
                Matéria que leciona
              </p>
              <input
                id="materia"
                type="text"
                placeholder="Matemática, História, etc..."
                value={formData.materia}
                onChange={(e) => handleChange("materia", e.target.value)}
                required
                className="w-full border border-gray-400 rounded-md p-1"
              />
            </div>

           
            <button
              type="submit"
              className="w-full bg-[#13389c] hover:bg-[#001e80]/90 text-white text-lg py-3 rounded-md"
            >
              Cadastrar Professor
            </button>

             <button
               onClick={() => nav.push("/")}
              className="w-full bg-[#13389c] hover:bg-[#001e80]/90 text-white text-lg py-3 rounded-md"
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());



app.post("/register/professor", async (req, res) => {
  const { nome, telefone, endereco, email, senha, materia } = req.body;

  try {
    const hash = await bcrypt.hash(senha, 10);

    const sql =
      "INSERT INTO professor (nome, telefone, endereco, email, senha, materia) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql, [nome, telefone, endereco, email, hash, materia], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Erro ao cadastrar professor.");
      }
      res.send("Professor cadastrado com sucesso!");
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro interno.");
  }
});


app.post("/register/aluno", async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const hash = await bcrypt.hash(senha, 10);

    const sql = "INSERT INTO alunos (nome, email, senha) VALUES (?, ?, ?)";

    db.query(sql, [nome, email, hash], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Erro ao cadastrar aluno.");
      }
      res.send("Aluno cadastrado com sucesso!");
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro interno.");
  }
});



app.post("/login/professor", async (req, res) => {
  const { email, senha } = req.body;

  const sql = "SELECT * FROM professor WHERE nome = ? AND email = ?";

  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).send("Erro no servidor.");

    if (results.length === 0)
      return res.status(400).send("Professor não encontrado.");

    const user = results[0];

    const senhaCorreta = await bcrypt.compare(senha, user.senha);

    if (!senhaCorreta) return res.status(401).send("Senha incorreta.");

    res.json({
      message: `Bem-vindo, ${user.nome}!`,
      id: user.id,
      nome: user.nome,
      email: user.email,
      telefone: user.telefone,
      endereco: user.endereco,
      materia: user.materia
    });
  });
});



app.post("/login/aluno", async (req, res) => {
  const { email, senha } = req.body;

  const sql = "SELECT * FROM alunos WHERE nome = ? AND email = ?";


  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).send("Erro no servidor.");

    if (results.length === 0)
      return res.status(400).send("Aluno não encontrado.");

    const user = results[0];

    const senhaCorreta = await bcrypt.compare(senha, user.senha);

    if (!senhaCorreta) return res.status(401).send("Senha incorreta.");

    res.json({
      message: `Bem-vindo, ${user.nome}!`,
      id: user.id,
      nome: user.nome,
      email: user.email
    });
  });
});

app.listen(3001, () =>
  console.log("🚀 Servidor rodando em http://localhost:3001")
);

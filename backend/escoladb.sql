create database escola;
use escola;

CREATE TABLE professor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco TEXT NOT NULL, 
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL ,
    materia VARCHAR(100) NOT NULL
   
);

CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL, 
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL 
  
);
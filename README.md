<h1 style="align-items: center">SKY CONTACTS</h1>

<div style="align-items: center">
  
![NodeJS](https://img.shields.io/badge/node.js-C3ECBC?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/express-FF007F.svg?style=for-the-badge&logo=express&logoColor=white) ![Typescript](https://img.shields.io/badge/TypeScript-A3CEEF?style=for-the-badge&logo=typescript&logoColor=fff) 	![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) 

</div>

<h2>Índice</h2>

1. [ Sobre ](#sobre)
2. [ Tecnologias](#techs)
3. [ Instalação ](#install)

<a name="sobre"></a>

## 1. Sobre
Esta é uma API de lista de contatos construída com NodeJS. Ela oferece funcionalidades avançadas de CRUD para criação de usuário e criação de n contatos vinculados ao mesmo. 

A API possui autenticação de usuário e permite que os usuários gerenciem criando, atualizando e excluindo seus contatos, tendo todos eles listados na página inicial. 

Esse projeto foi criado em 2023 durante o curso de desenvolvimento web full-stack da Kenzie Academy porém refatorado e atualizado em 2024 como um projeto pessoal.

<a name="techs"></a>

## 2. Tecnologias

- <a name="node" href="https://nodejs.org/docs/latest/api/" target="_blank">NodeJS</a>
- <a name="express" href="https://expressjs.com/pt-br/" target="_blank">Express</a>
- <a name="postgres" href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>


<a name="install"></a>

## 3. Instalação e uso

### 3.1 Pré-Requisitos:
  <h4>1º Passo</h4>
  <h5>Antes de começar, certifique-se de ter instalado o Node.js em sua máquina.</h3>
  <p>Faça um clone deste repositório</p>

  <h4>2º passo</h4>
  Variáveis de ambiente:
    Crie um arquivo .env e complete com suas informações conforme esta no .env.example.

  <h4>3º Passo - Configurando o Backend</h4>
  - Rode os seguintes comandos: 
  
  ```bash
  #instala todas as dependências necessárias
  $ npm install
    
  # migrate
  $ npm run typeorm migration:run -- -d src/data-source.ts
 
  # development
  $ npm run dev
  ```
  <h4>4º Passo - Testando o Backend</h4>
  1. Na raiz do projeto há um arquivo chamado "workspace_insomnia" que pode ser importado no insomnia para serem efetuados testes de rota.


  <h4>5º Passo - Testando o Front-End</h4>
  1. Abra um novo terminal e rode o seguinte comando para alterar para a pasta do front-end:

  ```bash
  $ cd front
  ``` 
  2.Configure o Front-End:

  ```bash
  #instala todas as dependências necessárias
  $ npm install
     
  # development
  $ npm run dev
  ```

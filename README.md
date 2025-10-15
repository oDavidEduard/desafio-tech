<h1 align="center">🧢 SeuBone Tech Challenge: Sistema de Gerenciamento de Recortes</h1>

<p align="center">
  <em>Um sistema web completo para gerenciar recortes de produtos, permitindo a visualização dinâmica de camadas que, combinadas, formam uma imagem final.</em>
</p>

<p align="center">
  <a href="https://github.com/oDavidEduard/desafio-tech"><img src="https://img.shields.io/github/stars/oDavidEduard/desafio-tech?style=for-the-badge" alt="Stars"></a>
  <a href="https://github.com/oDavidEduard/desafio-tech"><img src="https://img.shields.io/github/forks/oDavidEduard/desafio-tech?style=for-the-badge" alt="Forks"></a>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma">
</p>

---

## 📚 Sobre o Projeto

Este projeto foi desenvolvido como um **desafio técnico** para uma vaga de **estágio em desenvolvimento web**.  
O objetivo era criar uma aplicação completa (**Frontend + Backend**) para gerenciar "recortes" de imagens de um produto (ex: abas, copas de um boné).

O sistema permite **cadastrar, editar, excluir e visualizar recortes**, que são **combinados em tempo real** para formar o modelo final, respeitando a **ordem de camadas (z-index)**.

---

## ✨ Funcionalidades Principais

- **Autenticação Segura**  
- Sistema de registro e login com **senhas criptografadas** e **JWT (JSON Web Tokens)**.

- **Gerenciamento Completo (CRUD)**  
- **Criar:** Cadastrar novos recortes com upload de imagem para a nuvem.  
- **Ler:** Listar todas as peças cadastradas em um dashboard.  
- **Atualizar:** Editar informações de uma peça existente.  
- **Deletar:** Excluir uma peça e a imagem associada na nuvem.

- **Armazenamento na Nuvem**  
- Integração com **Cloudinary** para upload e gerenciamento de imagens.

- **Rotas Protegidas**  
- Acesso ao painel e funcionalidades apenas para usuários autenticados.

- **Ferramenta de Visualização**  
- Interface interativa que **sobrepõe camadas (z-index)** para formar o produto final em tempo real.

- **Interface Reativa e Moderna**  
- Construída com **React + Vite**, garantindo navegação fluida e responsiva.

---

## 🛠️ Tecnologias Utilizadas

### 🔙 Backend (API)

- **Node.js** + **Express.js**
- **Prisma ORM**
- **PostgreSQL**
- **JWT (JSON Web Token)**
- **Bcrypt.js**
- **Cloudinary**
- **Multer**
- **CORS**

### 🔜 Frontend (Cliente)

- **React** + **Vite**
- **React Router DOM**
- **Styled Components**
- **Axios**

---

## 🚀 Como Executar o Projeto

### 🧩 Pré-requisitos
Certifique-se de ter instalado:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

---

### 1. Clonar o Repositório

```bash
git clone https://github.com/oDavidEduard/desafio-tech.git
cd desafio-tech
```

---

### 2. Configurar o Backend

```bash
cd desafio-tech-backend
npm install
```

- Crie um arquivo .env na raiz do backend com o seguinte conteúdo:

```bash
# Configuração do Banco de Dados PostgreSQL
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/desafio_tech?schema=public"

# Chave secreta para assinar os tokens JWT
JWT_SECRET="SUA_CHAVE_SECRETA"

# Credenciais do Cloudinary
CLOUDINARY_CLOUD_NAME="SEU_CLOUD_NAME"
CLOUDINARY_API_KEY="SUA_API_KEY"
CLOUDINARY_API_SECRET="SEU_API_SECRET"
```

- Rode as migrations do Prisma para criar as tabelas:

```bash
npx prisma migrate dev
```

- Inicie o servidor backend:

```bash
npm run dev
```

🟢 O servidor estará disponível em: http://localhost:3001

---

### 3. Configurar o Frontend

```bash
cd ../desafio-tech-frontend
npm install
npm run dev
```

🟢 A aplicação React estará rodando em: http://localhost:5173

---

### 🎬 Preview do Projeto

- Login e Cadastro

![GIF](./desafio-tech-frontend/src/assets/gif/Register.gif)

- Dashboard e Visualizer
![GIF2](./desafio-tech-frontend/src/assets/gif/GIF%20Dashboard%20e%20Visualizer.gif)

### 👨‍💻 Autor

Feito por David Nunes 🚀

📧 Email: davideduard227@gmail.com

🐙 GitHub: @oDavidEduard
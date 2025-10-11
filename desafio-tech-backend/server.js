require("dotenv").config();

const express = require("express");

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/authMiddleware");
const prisma = new PrismaClient();

const app = express();

app.use(express.json());

const PORT = 3001;

app.post("/register", async (req, res) => {
    try {
        
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email e senha são obrigatorios." });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: hashPassword,
            },
        });

        const userResposta = { id: newUser.id, email: newUser.email };
        res.status(201).json(userResposta);

    } catch (error) {
        
        if (error.code == "P2002") {
            return res.status(409).json({ message: "Esse email já está em uso." });
        }

        console.error(error);
        res.status(500).json({ message: "Erro ao registrar usuario." });

    }
});

app.post("/login", async (req, res) => {
    try {
        
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { email: email },

        });

        if (!user) {
            return res.status(401).json({ message: "Senha ou email invalidos" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Senha ou email invalidos" });
        }

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ token: token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro fatal." });
    }
});

app.get("/", (req, res) => {
    res.send("API Funcionando");
});

app.post("/recortes", authMiddleware, async (req, res) => {
    try {
        
        const novoRecorte = await prisma.recorte.create({
            data: req.body,
        });

        res.status(201).json(novoRecorte);

    } catch (error) {
        
        console.error(error);
        res.status(400).json({ message: "Erro ao criar recorte", error: error.message })

    }
});

app.get("/recortes", async (req, res) => {
    try {
        
        const todosRecortes = await prisma.recorte.findMany({
            orderBy: {
                ordem_exibicao: "asc",
            },
        });

        res.status(200).json(todosRecortes);

    } catch (error) {
        
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar recortes." });
    }
});

app.put("/recortes/:id", authMiddleware, async(req, res) => {
    try {
        
        const recorteId = req.params.id;

        const novosDados = req.body;

        const recorteAtualizado = await prisma.recorte.update({
            where: {
                id: recorteId,
            },
            
            data: novosDados,
        });

        res.status(200).json(recorteAtualizado);

    } catch (error) {
        
        console.error(error);
        res.status(404).json({ message: "Recorte não encontrado ou erro ao atualizar" })
    }
});

app.delete("/recortes/:id", authMiddleware, async (req, res) => {
    try {
        
        const recorteId = req.params.id;

        await prisma.recorte.delete({
            where: {
                id: recorteId,
            },
        });

        res.status(204).send();

    } catch (error) {
        
        console.error(error);
        res.status(404).json({ message: "Recorte não encontrado ou erro ao deletar" })
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
const express = require("express");

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
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

app.get("/", (req, res) => {
    res.send("API Funcionando");
});

app.post("/recortes", async (req, res) => {
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

app.put("/recortes/:id", async(req, res) => {
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

app.delete("/recortes/:id", async (req, res) => {
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
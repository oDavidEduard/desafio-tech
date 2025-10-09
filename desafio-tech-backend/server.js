const express = require("express");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();

app.use(express.json());

const PORT = 3001;

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

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
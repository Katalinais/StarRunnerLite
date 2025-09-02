const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Ruta hacia la carpeta `src/data`
const DATA_DIR = path.join(__dirname, "src", "data");
const SCORES_FILE = path.join(DATA_DIR, "scores.json");

// Asegurar que la carpeta `src/data` exista
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Asegurar que el archivo `scores.json` exista
if (!fs.existsSync(SCORES_FILE)) {
    fs.writeFileSync(SCORES_FILE, JSON.stringify([], null, 2));
}

app.use(express.json());

// Servir archivos estáticos (HTML, JS, CSS, módulos de src/)
app.use(express.static(__dirname));
app.use("/src", express.static(path.join(__dirname, "src")));

// Página principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Obtener puntajes
app.get("/scores", (req, res) => {
    const scores = JSON.parse(fs.readFileSync(SCORES_FILE));
    res.json(scores.slice(0, 10));
});

// Guardar puntaje
app.post("/scores", (req, res) => {
    const { name, score } = req.body;
    if (!name || typeof score !== "number") {
        return res.status(400).json({ error: "Datos inválidos" });
    }

    let scores = JSON.parse(fs.readFileSync(SCORES_FILE));
    scores.push({ name, score });
    scores.sort((a, b) => b.score - a.score);
    if (scores.length > 10) scores = scores.slice(0, 10);

    fs.writeFileSync(SCORES_FILE, JSON.stringify(scores, null, 2));
    res.json({ ok: true, scores });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

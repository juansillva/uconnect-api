console.log("BACKEND INICIANDO");

const express = require("express");
const cors = require("cors");
const path = require("path");

const turmaRoutes = require("./src/routes/turmasRoutes")
const alunoRoutes = require("./src/routes/alunoRoutes");
const professorRoutes = require("./src/routes/professorRoutes");
const postRoutes = require("./src/routes/postRoutes");

const app = express();

app.use("/uploads", express.static(path.join(__dirname, "./src/uploads")));

app.use(
  cors({
    origin: "*",
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.use("/acessoaluno", alunoRoutes);
app.use("/acessoprofessor", professorRoutes);
app.use("/posts", postRoutes);
app.use("/turmas", turmaRoutes);

app.listen(3001, "0.0.0.0", () => {
  console.log("SERVIDOR Rodando");
});

module.exports = app;

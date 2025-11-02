const prisma = require("../../prisma/prismaClient");

exports.buscarTurmas = async (req, res) => {
  try {
    const turmas = await prisma.turma.findMany({
      include: {
        posts: true,
        professores: {
          include: { professor: true },
        },
      },
    });

    return res.status(200).json(turmas);
  } catch (error) {
    console.error("Erro ao buscar turmas:", error);
    return res.status(500).json({ error: "Erro ao buscar turmas" });
  }
};

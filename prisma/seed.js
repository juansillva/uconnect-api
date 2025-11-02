const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const turmas = [
    { nome: "T13 - Criatividade na Ponta da Caneta", icon: "iconGloboMini.svg" },
    { nome: "T14 - Conexões Sustentáveis ", icon: "iconGloboMini.svg" },
    { nome: "T12 - Transforma Info", icon: "iconEcoBotsMini.svg" },
    { nome: "T11 - Transforma Info", icon: "iconEcoBotsMini.svg" },
  ];

  for (const t of turmas) {
    await prisma.turma.upsert({
      where: { nome: t.nome },
      update: {},
      create: t,
    });
    console.log('Turma inserida/atualizada:', t.nome);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
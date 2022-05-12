const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: {name: 'Woopa 4'},
        update: {},
        create: {
            name: 'Woopa 4',
            username: 'ajolonauta4',
            mission: 'java'
        },
    });

    const woopa5 = await prisma.explorer.upsert({
        where: {name: 'Woopa 5'},
        update: {},
        create: {
            name: 'Woopa 5',
            username: 'ajolonauta5',
            mission: 'java'
        },
    });

    const woopa6 = await prisma.explorer.upsert({
        where: {name: 'Woopa 6'},
        update: {},
        create: {
            name: 'Woopa 6',
            username: 'ajolonauta6',
            mission: 'java'
        },
    });

    console.log('Create 7 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }

  try {
    const explorer1 = await prisma.launchx.upsert( {
      where: {name: "Explorer 1"},
      update: {},
      create: {
        name: "Explorer 1",
        lang: "javascript",
        missionCommander: "Rodrigo",
      },
    });
  
    const explorer2 = await prisma.launchx.upsert( {
      where: {name: "Explorer 2"},
      update: {},
      create: {
        name: "Explorer 2",
        lang: "java",
        missionCommander: "Fernanda",
      },
    });
  
    const explorer3 = await prisma.launchx.upsert( {
      where: {name: "Explorer 3"},
      update: {},
      create: {
        name: "Explorer 3",
        lang: "elixir",
        missionCommander: "Carlo",
      },
    });
  
    console.log('Create 3 explorers of Launch X');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
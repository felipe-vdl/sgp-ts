// const { PrismaClient } = require('@prisma/client');
// const bcrypt = require('bcrypt');
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
  const staff = await prisma.user.upsert({
    where: { email: 'felipe.vidal@mesquita.rj.gov.br' },
    update: {},
    create: {
      email: 'felipe.vidal@mesquita.rj.gov.br',
      name: 'Felipe Vidal',
      password: await bcrypt.hash('admin', 10),
      role: 'STAFF',
      updatedAt: null
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect()
    process.exit(1);
  });
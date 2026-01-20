import { config } from "dotenv";
config({ path: ".env.local" });

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function makeAdmin() {
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email) {
    console.log("Usage: npx tsx prisma/make-admin.ts <email> [password]");
    console.log("");
    console.log("If user exists, they will be made admin.");
    console.log("If user doesn't exist and password is provided, they will be created as admin.");
    process.exit(1);
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    await prisma.user.update({
      where: { email },
      data: { isAdmin: true },
    });
    console.log(`User ${email} is now an admin!`);
  } else if (password) {
    const passwordHash = await bcrypt.hash(password, 12);
    await prisma.user.create({
      data: {
        email,
        name: "Admin",
        passwordHash,
        isAdmin: true,
      },
    });
    console.log(`Admin user created: ${email}`);
  } else {
    console.log(`User ${email} not found. Provide a password to create them.`);
    process.exit(1);
  }
}

makeAdmin()
  .catch((e) => {
    console.error("Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

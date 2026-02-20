/**
 * One-off script to update a user's password.
 * Run: npx tsx scripts/update-password.ts <username> <new-password>
 *
 * Example: npx tsx scripts/update-password.ts contessa_owner password123
 */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const BCRYPT_ROUNDS = 12;

async function main() {
    const username = process.argv[2]?.trim().toLowerCase();
    const newPassword = process.argv[3];

    if (!username || !newPassword) {
        console.error("Usage: npx tsx scripts/update-password.ts <username> <new-password>");
        console.error("Example: npx tsx scripts/update-password.ts contessa_owner password123");
        process.exit(1);
    }

    const user = await prisma.user.findUnique({
        where: { username },
    });

    if (!user) {
        console.error(`User not found: ${username}`);
        process.exit(1);
    }

    const hash = await bcrypt.hash(newPassword, BCRYPT_ROUNDS);
    await prisma.user.update({
        where: { username },
        data: { password: hash },
    });

    console.log(`✅ Password updated for user: ${username}`);
}

const prisma = new PrismaClient();

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());

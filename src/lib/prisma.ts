import { PrismaClient } from "@prisma/client";

// Support both Vercel's default DATABASE_URL and this app's POSTGRES_URL.
// Prisma schema reads POSTGRES_URL, so map DATABASE_URL -> POSTGRES_URL at runtime.
if (!process.env.POSTGRES_URL && process.env.DATABASE_URL) {
    process.env.POSTGRES_URL = process.env.DATABASE_URL;
}

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["query"] : [],
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

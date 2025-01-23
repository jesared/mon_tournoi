import { PrismaClient } from "@prisma/client";

// Utilisation de `globalThis` pour stocker l'instance de PrismaClient
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Création de l'instance de PrismaClient ou utilisation de l'instance existante
export const prisma = globalForPrisma.prisma || new PrismaClient();

// En développement, stocker l'instance de PrismaClient dans `globalThis` pour éviter de recréer l'instance
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

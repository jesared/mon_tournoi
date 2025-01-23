import authConfig from "@/app/lib/auth.config";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const options = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
};

// console.log("NextAuth options:", options);

export default options;

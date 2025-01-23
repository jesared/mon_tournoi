import authConfig from "@/app/lib/auth.config"; // Correction du chemin d'importation
import NextAuth from "next-auth";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };

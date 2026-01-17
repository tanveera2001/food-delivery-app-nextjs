import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { prisma } from "./connect";
import Google from "next-auth/providers/google";



export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            // clientId: process.env.GOOGLE_ID as string,
            // clientSecret: process.env.GOOGLE_SECRET as string,
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],

};

export const getAuthSession = () => getServerSession(authOptions);
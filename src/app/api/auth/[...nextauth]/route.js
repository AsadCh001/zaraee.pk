import { connectMongoDB } from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import { prismaAdmin } from "@/lib/prisma";

export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          },
          callbacks: {
            async signIn({ account, profile }) {
              if (account.provider === "google") {
                return profile.email_verified && profile.email.endsWith("@gmail.com")
              }
              return true // Do different verification for other providers that don't have `email_verified`
            },
          }
      }),

    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password, isSeller } = credentials;

      if(isSeller=== 'true')
      {  
        try {
          
          await connectMongoDB();

          console.log("Welcome Seller")
            const user = await prismaAdmin.sellers.findUnique({
              where: {
                email: email,
              },
            });

          if (!user) {
            console.log("User Not Exists")
            return null;
          }
          
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
      }
      catch (error) {
        console.log("Error: ", error);
      }
      finally {
        await prismaAdmin.$disconnect();
      }
    }

    else if(isSeller === 'false')
    {
      try{
        await connectMongoDB();
      console.log("Welcome Customer")
          const user = await prismaAdmin.customers.findUnique({
            where: {
              email: email,
            },
          });

          if (!user) {
            console.log("customer not found")
            return null;
          }
          console.log(user)
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
       } 
       catch (error) {
        console.log("Error: ", error);
      }
      finally {
        console.log("Disconnect")
        await prismaAdmin.$disconnect();
      }
    }
        
      },

    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

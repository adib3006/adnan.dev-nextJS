import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import { compare } from 'bcryptjs';
import { ObjectId } from "mongoose";

interface UserType {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        // Define the shape of the login credentials (email and password)
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        if (!credentials) {
          // If credentials are undefined, return null to indicate authentication failure.
          return null;
        }
        //Check if the user exists.
        await connect();

        try {
          const user: UserType | null = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return {
                id: user._id.toString(), // Assuming _id is the unique identifier for the user
                name: user.name,
                email: user.email,
                // Add any other required user properties here
              };
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});

export { handler as GET, handler as POST };

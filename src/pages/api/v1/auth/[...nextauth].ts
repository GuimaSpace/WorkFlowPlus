import { FirebaseUserValidate } from "@/services/validate";
import { UserInterface } from "@/models/";
import NextAuth, { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            authorize: async (credentials, req) => {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                }
                //Logica do login
                //Fing user por db
                try {
                    const userDataFromDb = await FirebaseUserValidate({ email, password }) as UserInterface;
                    return { id: "0" }
                } catch (err) {
                    throw new Error(`${JSON.stringify(err)}`);

                }
            }
        })
    ],
    pages: {
        signIn: "/AuthPages/login"
    },
    callbacks: {
        async session({ session, user, token }) {

            return session
        }
    }
}


export default NextAuth(authOptions)

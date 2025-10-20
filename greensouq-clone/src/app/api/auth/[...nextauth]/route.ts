import NextAuth from "next-auth";
import { authOptions } from "@/../lib/auth";

// 👇 Create the handler using authOptions
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
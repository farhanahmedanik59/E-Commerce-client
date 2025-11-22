import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // Call your Express API
        const res = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        console.log(res);
        if (!res.ok) return null; // login failed

        const user = await res.json();
        return user; // NextAuth will store this in session
      },
    }),
  ],

  session: { strategy: "jwt" }, // default, still works
  pages: { signIn: "/login" },
});

export { handler as GET, handler as POST };

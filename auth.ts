import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  handlers,
} = NextAuth({
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async session({ token, session }) {
      if (session.user) {
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.image as string;
        session.user.id = token.id as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.gender = token.gender as string;
        session.user.phone = token.phone as string;
        session.user.email = token.email as string;
        session.user.profilePic = token.profilePic as string;
        session.user.isActive = token.isActive as boolean;
        session.user.isStaff = token.isStaff as boolean;
        session.user.isVerified = token.isVerified as boolean;
        session.user.isSuperuser = token.isSuperuser as boolean;
        session.user.role = token.role as string;
        session.user.language = token.language as string;
        session.user.username = token.username as string;
        session.user.permissions = token.permissions as string[];
        session.user.token = token.token as string;
      }

      return session;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },

  session: { strategy: "jwt" },
  ...authConfig,
});

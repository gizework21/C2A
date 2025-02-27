import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  id: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  email: string;
  profilePic: string;
  language: string;
  isActive: boolean;
  isStaff: boolean;
  isVerified: boolean;
  isSuperuser: boolean;
  role: UserRole;
  gender: Gender;
  permissions: string[];
  isSuccess: boolean;
  token: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

import { User } from "@prisma/client";

export interface UserSession {
  name?: string | null | undefined;
  role?: string;
  email?: string;
}

export type UserInfo = Omit<User, "createdAt" | "updatedAt" | "password">;
export type Message = { message: string };
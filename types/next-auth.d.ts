import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      role?: string;
      username?: string;
      someExoticUserProperty?: string;
    } & DefaultSession["user"];
  }
}

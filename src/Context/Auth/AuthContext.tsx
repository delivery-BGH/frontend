/* eslint-disable @typescript-eslint/no-explicit-any */

import { User } from "@/types/User";
import { createContext } from "react";

export type AuthContextType = {
  user: User | null;
  singin: (credentials: {
    email: string;
    password: string;
  }) => Promise<boolean>;
  // singin: (credentials: { email: string, password: string }) => void;
  singout: () => void;
  error: any;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType>(null!);
AuthContext.displayName = "AuthContext";

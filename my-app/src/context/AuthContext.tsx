import {
  createContext,
  useContext,
  useState,
} from "react";

import type {
  ReactNode,
} from "react";

interface User {
  id: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (
    id: string,
    password: string
  ) => boolean;
  logout: () => void;
}

const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

interface Props {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: Props) {
  const [user, setUser] =
    useState<User | null>(
      JSON.parse(
        localStorage.getItem("user") ||
          "null"
      )
    );

  const login = (
    id: string,
    password: string
  ) => {
    if (
      id === "admin" &&
      password === "1234"
    ) {
      const userData = {
        id,
        name: "관리자",
      };

      setUser(userData);

      localStorage.setItem(
        "user",
        JSON.stringify(userData)
      );

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem(
      "user"
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "AuthProvider 안에서 사용해야 합니다."
    );
  }

  return context;
}
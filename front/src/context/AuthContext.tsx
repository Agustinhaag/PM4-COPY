"use client";
import React, { useContext, createContext, useEffect, useState } from "react";
import { ContextProps, UserSessionProps } from "@/helpers/types";
import Cookies from "js-cookie";
import { parse } from "jsonc-parser";


const AuthContext = createContext<ContextProps>({
  dataUser: null,
  setDataUser: () => {},
});

interface AuthProviderProps {
  children: React.ReactElement;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [dataUser, setDataUser] = useState<UserSessionProps | null>(null);

  useEffect(() => {
    if (dataUser) {
      Cookies.set("userData", JSON.stringify(dataUser), { expires: 3 });
    }
  }, [dataUser]);

  useEffect(() => {
    const data = parse(Cookies.get("userData")?.toString() || "{}");
    setDataUser(data);
  }, []);

  return (
    <AuthContext.Provider value={{ dataUser, setDataUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

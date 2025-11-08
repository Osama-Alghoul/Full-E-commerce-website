import { createContext, useContext } from "react";
import type { CartProviderProps as AuthProviderProps, AuthContextProps } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext({} as AuthContextProps);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useLocalStorage<{ username: string }>("user", {
    username: "",
  });

  function getUserData({ data }: { data: { username: string } }) {
    setUser(data);
  }

  const isLoggedIn = user.username !== "";

  function logout() {
    setUser({ username: "" });
  }

  return (
    <AuthContext.Provider
      value={{
        userData: user,
        getUserData,
        isLoggedIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

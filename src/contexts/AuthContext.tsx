import { useState, useEffect } from "react";
import { createContext, type ReactNode } from "react";

type AuthContext = {
  isLoading: boolean;
  session: null | UserAPIResponse;
  save: (data: UserAPIResponse) => void;
  remove: () => void;
};

const LOCAL_STORE_KET = "@refund";

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(null);
  const [isLoading, setIsLoading] = useState(true);

  function save(data: UserAPIResponse) {
    localStorage.setItem(`${LOCAL_STORE_KET}:user`, JSON.stringify(data.user));
    localStorage.setItem(`${LOCAL_STORE_KET}:token`, data.token);

    setSession(data);
  }

  function remove() {
    setSession(null);

    localStorage.removeItem(`${LOCAL_STORE_KET}:user`);
    localStorage.removeItem(`${LOCAL_STORE_KET}:token`);

    window.location.assign("/");
  }

  function loadUser() {
    const user = localStorage.getItem(`${LOCAL_STORE_KET}:user`);
    const token = localStorage.getItem(`${LOCAL_STORE_KET}:token`);

    if (token && user) {
      setSession({
        token,
        user: JSON.parse(user),
      });
    }

    setIsLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ session, save, isLoading, remove }}>
      {children}
    </AuthContext.Provider>
  );
}

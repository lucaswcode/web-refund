import { use } from "react"; // useContext

import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const context = use(AuthContext);

  return context;
}

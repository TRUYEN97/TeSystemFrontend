import { createContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

import { getAccessToken } from "../utils/token";

type ContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>; 
}

export const AuthContext = createContext<ContextType | undefined>(undefined);

const AuthProvider = ({children} : {children: ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(getAccessToken() ? true : false)
  }, [])

  return (
    <AuthContext.Provider
      value={{isLoggedIn, setIsLoggedIn}} 
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
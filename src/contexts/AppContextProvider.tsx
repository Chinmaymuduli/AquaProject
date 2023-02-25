import React, {createContext, ReactNode, useContext, useState} from 'react';

const AppContext = createContext<any>({});

type AppContextProviderProps = {
  children?: ReactNode;
};

export default ({children}: AppContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<unknown>(null);
  const [user, setUser] = useState<any>({});
  const [staffId, setStaffId] = useState<any>('');

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        staffId,
        setStaffId,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

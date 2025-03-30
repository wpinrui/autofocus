import React, { createContext, useContext, useState, ReactNode } from "react";

type AppState = {
  videoFile: File | null;
  setVideoFile: (file: File | null) => void;
};

const AppContext = createContext<AppState | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  return (
    <AppContext.Provider
      value={{
        videoFile: videoFile,
        setVideoFile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

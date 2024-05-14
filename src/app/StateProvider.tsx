/*
 code 
*/
"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

interface StateContextType {
  textInput: string;
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
  handleClear: () => void;
}

interface StateProviderProps {
  children: ReactNode;
}

export default function StateProvider({ children }: StateProviderProps) {
  const router = useRouter();
  const [textInput, setTextInput] = useState("");

  const handleClear = () => {
    console.log("Hi Trae");
  };

  return (
    <StateContext.Provider
      value={{
        textInput,
        setTextInput,
        handleClear,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

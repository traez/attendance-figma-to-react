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
  selectedPlan: 'monthly' | 'yearly';
  setSelectedPlan: React.Dispatch<React.SetStateAction<'monthly' | 'yearly'>>;
  handlePlanChange: (plan: 'monthly' | 'yearly') => void;
}

interface StateProviderProps {
  children: ReactNode;
}

export default function StateProvider({ children }: StateProviderProps) {
  const router = useRouter();
  const [textInput, setTextInput] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly'); 

  const handlePlanChange = (plan: 'monthly' | 'yearly') => {
    setSelectedPlan(plan);
  };

  const handleClear = () => {
    console.log("Hi Trae");
  };

  return (
    <StateContext.Provider
      value={{
        textInput,
        setTextInput,
        handleClear,
        selectedPlan,
        setSelectedPlan,
        handlePlanChange,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

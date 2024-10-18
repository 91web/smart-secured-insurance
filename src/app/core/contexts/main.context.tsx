"use client";
import { createContext, ReactNode, SyntheticEvent, useState } from "react";

// Define the interface for the context state
interface IMainContext {
  eleBar: number;
  showScrollBtn: boolean;
  showHeroScrollBtn: boolean;
  setEleBar: React.Dispatch<React.SetStateAction<number>>;
  setShowScrollBtn: React.Dispatch<React.SetStateAction<boolean>>;
  setShowHeroScrollBtn: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll: (event: SyntheticEvent) => void;
}

// Create the context with a default value of null
export const MainContext = createContext<IMainContext | null>(null);

// Define the props type for the provider
interface MainContextProviderProps {
  children: ReactNode;
}

// MainContextProvider component
export const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [eleBar, setEleBar] = useState(0);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [showHeroScrollBtn, setShowHeroScrollBtn] = useState(true);

  const handleScroll = (event: SyntheticEvent) => {
    const dist = event.currentTarget.scrollTop;
    if (dist > 0) {
      setShowScrollBtn(true);
    } else {
      setShowScrollBtn(false);
    }

    if (dist > 50) {
      setEleBar(4);
      setShowHeroScrollBtn(false);
    } else {
      setEleBar(0);
      setShowHeroScrollBtn(true);
    }
  };

  // Use const for the value since it is not reassigned
  const value: IMainContext = {
    eleBar,
    showScrollBtn,
    showHeroScrollBtn,
    setEleBar,
    handleScroll,
    setShowScrollBtn,
    setShowHeroScrollBtn,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

"use client";
import { createContext, SyntheticEvent, useState } from "react";

export const MainContext = createContext<any>(null);

export const MainContextProvider = ({ children }: any) => {
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

  let value = {
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

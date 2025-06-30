"use client";

import { createContext, useContext, useState } from "react";

type NavColorContextType = {
  isLightNav: boolean;
  setIsLightNav: (val: boolean) => void;
};

const NavColorContext = createContext<NavColorContextType | undefined>(
  undefined
);

export const NavColorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLightNav, setIsLightNav] = useState(true);
  return (
    <NavColorContext.Provider value={{ isLightNav, setIsLightNav }}>
      {children}
    </NavColorContext.Provider>
  );
};

export const useNavColor = () => {
  const ctx = useContext(NavColorContext);
  if (!ctx) throw new Error("useNavColor must be used within NavColorProvider");
  return ctx;
};

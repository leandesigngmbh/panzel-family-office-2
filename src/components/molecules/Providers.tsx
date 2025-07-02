"use client";

import { NavColorProvider } from "@/lib/contexts/NavColorContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <NavColorProvider>{children}</NavColorProvider>;
};

export default Providers;

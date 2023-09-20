import React, { FC, ReactNode } from "react";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="bg-background min-h-screen text-white">{children}</main>;
};

export default MainLayout;

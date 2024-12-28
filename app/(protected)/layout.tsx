import React from "react";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default ProtectedLayout;

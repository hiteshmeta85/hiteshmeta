import React from "react";
import { trpc } from "../utils/trpc";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { status } = trpc.auth.getSession.useQuery();

  if (status === 'loading') {
    return null;
  }

  return <>{children}</>;
};

export default AuthWrapper;

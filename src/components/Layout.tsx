import React, { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className={"container py-10"}>
      {children}
    </div>
  );
};

export default Layout;
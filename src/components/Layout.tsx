import React, { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className={"container"}>
      {children}
    </div>
  );
};

export default Layout;
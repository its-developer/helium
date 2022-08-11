import React from "react";
import Header from "../Components/Header";

const MainLayout = ({ children }: any) => {
  return (
    <div style={{ backgroundColor: "rgb(13, 13, 13)" }}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;

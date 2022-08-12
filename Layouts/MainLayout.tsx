import React from "react";
import Header from "../Components/Header";

const MainLayout = ({ children }: any) => {
  return (
    <article className="jsx-4178290654">
      <Header />
      {children}
    </article>
  );
};

export default MainLayout;

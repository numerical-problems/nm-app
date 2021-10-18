import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

function Page({ id, children }) {
  return (
    <>
      <SideBar active={id} />
      <Header id={id} />
      {children}
    </>
  );
}

export default Page;

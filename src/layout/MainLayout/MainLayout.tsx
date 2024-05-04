import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import "./MainLayout.scss";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}

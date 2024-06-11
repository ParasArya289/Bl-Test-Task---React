import React from "react";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Navbar />
      <div className="children">{children}</div>
    </main>
  );
};

export default Layout;

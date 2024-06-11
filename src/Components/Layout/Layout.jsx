import React from "react";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      {/* <div className="layout__nav">
      </div> */}
      <Navbar />
      <div className="children">{children}</div>
    </main>
  );
};

export default Layout;

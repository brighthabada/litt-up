import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">{/* Empty for balance */}</div>

        <div className="header-center">
          <h1>Litt Up</h1>
        </div>

        <div className="header-right">
          <div className="auth-buttons">
            <button className="auth-btn">Sign In</button>
            <button className="auth-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

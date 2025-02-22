import React from "react";
import logo from "/src/assets/logo.jpg";
import { Navbar, Typography, Button, IconButton } from "@material-tailwind/react";
import "./Navbar.css";

export function StickyNavbar() {
  return (
    <Navbar className="sticky-navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>

        {/* Navbar Links */}
        <div className="navbar-links">
          <ul className="nav-list">
            <Typography as="li">
              <a href="#" className="flex items-center">Pages</a>
            </Typography>
            <Typography as="li">
              <a href="#" className="flex items-center">Account</a>
            </Typography>
            <Typography as="li">
              <a href="#" className="flex items-center">Blocks</a>
            </Typography>
            <Typography as="li">
              <a href="https://biohealthchain.gitbook.io/biohealthchain-1" className="flex items-center">
                Docs
              </a>
            </Typography>
          </ul>
          <div className="auth-buttons">
            <Button variant="text" size="sm">
              <span>Log In</span>
            </Button>
            <Button variant="gradient" size="sm">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default StickyNavbar;

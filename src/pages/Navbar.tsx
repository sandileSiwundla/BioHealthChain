import React from "react";
import logo from "/src/assets/logo.jpg";
import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import "./Navbar.css"; 


export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
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
  );

  return (
    <div>
      <Navbar className="sticky-navbar">
        <div className="navbar-container">
          {/* Logo Section */}
          <div>
            <img src={logo} alt="Logo" className="navbar-logo" />
          </div>

          {/* Navbar Links */}
          <div className="navbar-links">
            <div className="hidden lg:block">{navList}</div>
            <div className="auth-buttons">
              <Button variant="text" size="sm" className="hidden lg:inline-block">
                <span>Log In</span>
              </Button>
              <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton className="icon-button lg:hidden" onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="mobile-nav">
            <Button fullWidth variant="text" size="sm">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default StickyNavbar;

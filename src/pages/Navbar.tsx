import React from "react";
import logo from '/src/assets/logo.jpg';

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items- lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 font-medium rounded-md transition-all duration-300 hover:bg-sky-300 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 font-medium rounded-md transition-all duration-300 hover:bg-sky-300 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 font-medium rounded-md transition-all duration-300 hover:bg-sky-300 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 font-medium rounded-md transition-all duration-300 hover:bg-sky-300 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none"
      >
        <a href="https://biohealthchain.gitbook.io/biohealthchain-1" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-8 py-4 lg:px-12 lg:py-6 bg-[#F9F7F4] mt-[1cm]">
        <div className="flex items-center justify-between text-blue-gray-900 w-full">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-16 w-16 rounded-full" /> {/* Increased size of logo */}
          </div>

          {/* Navbar Links */}
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button variant="text" size="sm" className="hidden lg:inline-block">
                <span>Log In</span>
              </Button>
              <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12"></div>
    </div>
  );
}

export default StickyNavbar;

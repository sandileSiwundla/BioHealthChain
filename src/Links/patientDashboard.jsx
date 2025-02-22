import React from "react";
import homeIcon from '/src/assets/links/homeicon.jpg';
import { Navbar } from "@material-tailwind/react";  // Make sure to import Navbar

export function PatientNavbar() {
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-8 py-4 lg:px-12 lg:py-6 bg-[#779DA6] mt-[1cm]">
        <div className="flex items-center justify-between text-blue-gray-900 w-full">
          <div className="flex items-center space-x-4">
            <img 
              src={homeIcon} 
              alt="Home" 
              className="h-16 w-16 rounded-full cursor-pointer" 
              onClick={() => window.location.href = '/'}  // This will navigate to the landing page (adjust URL if needed)
            />
          </div>
        </div>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12"></div>
    </div>
  );
}

export default PatientNavbar;

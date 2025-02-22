import React from "react";
import homeIcon from '../assets/links/homeicon.png';  // Use relative path
import { Navbar } from "@material-tailwind/react";

export function PatientNavbar() {
  return React.createElement(
    'div',
    { className: '-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll' },
    React.createElement(
      Navbar,
      { className: 'sticky top-0 z-10 h-max max-w-full rounded-none px-8 py-4 lg:px-12 lg:py-6 bg-[#779DA6] mt-[1cm]' },
      React.createElement(
        'div',
        { className: 'flex items-center justify-between text-blue-gray-900 w-full' },
        React.createElement(
          'div',
          { className: 'flex items-center space-x-4' },
          React.createElement(
            'img',
            {
              src: homeIcon,
              alt: 'Home',
              className: 'h-16 w-16 rounded-full cursor-pointer',
              onClick: function() {
                window.location.href = '/'; 
              }
            }
          )
        )
      )
    ),
    React.createElement('div', { className: 'mx-auto max-w-screen-md py-12' })
  );
}

export default PatientNavbar;

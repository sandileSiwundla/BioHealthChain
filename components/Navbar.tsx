import * as React from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";

const Navbar = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("Button clicked!");
  };

  return (
    <nav className="bg-primary fixed left-0 top-0 h-screen w-55 p-5 text-primary-foreground flex flex-col items-start space-y-6 shadow-lg">
      {/* Logo + title */}
      <div className="flex flex-col items-start space-y-2">
        <Image 
          src="/logo.png" 
          alt="Company Logo"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="text-2xl font-bold text-black">BioHealthChain</div>
      </div>

      {/* Vertical nav links */}
      <div className="flex flex-col space-y-4 w-44 ">
        <Button variant="link" size="sm" className=" !hover:text-red-600 !text-black" onClick={handleClick}>
          About
        </Button>
        <Button variant="link" size="sm" className="!text-black" onClick={handleClick}>
          Services
        </Button>
        <Button variant="link" size="sm" className="!text-black" onClick={handleClick}>
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

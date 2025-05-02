import * as React from "react";
import Button from "@/components/ui/Button"; // Import the custom Button component
import Image from "next/image"; // Import Image component for Next.js

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image 
            src="/logo.png" 
            alt="Company Logo"
            width={60}
            height={60} 
            className="rounded-full" 
          />
          <div className="text-3xl font-bold text-black">BioHealthChain</div>
        </div>

        <div className="space-x-4">
          <Button variant="link" size="sm" className="text-white">
            About
          </Button>
          <Button variant="link" size="sm" className="text-white">
            Services
          </Button>
          <Button variant="link" size="sm" className="text-white">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import * as React from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";

const Navbar = () => {
  // Tracks which parent button is currently active
  const [activeParent, setActiveParent] = React.useState<string | null>(null);

  // Button structure: parent -> children
  const navStructure: Record<string, string[] | null> = {
    About: ["Vlogs", "Vision", "Brand"],
    Services: ["Appointments", "Medical Records", "Consultation"],
    Contact: null,
    Dashboard: ["Patients", "Doctors", "Reports"],
    Help: ["FAQ", "Support", "Tutorials"],
  };

  const handleParentClick = (parent: string) => {
    setActiveParent(parent);
  };

  const handleChildClick = (child: string) => {
    alert(`Clicked ${child}`);
  };

  return (
    <nav className="bg-primary fixed left-0 top-0 h-screen w-60 p-5 text-primary-foreground flex flex-col items-start space-y-6">
      {/* Logo + title */}
      <div className="flex flex-col items-center space-y-5">
        <Image 
          src="/logoPhoto.jpg" 
          alt="Company Logo"
          width={120}
          height={120}
          className="rounded-full"
        />
        <div className="text-2xl font-bold text-white">BioHealthChain</div>
      </div>

      {/* Dynamic nav buttons */}
      <div className="flex flex-col space-y-4 w-full items-start">
        {activeParent
          ? // Show children buttons if a parent is active
            navStructure[activeParent]?.map((child) => (
              <Button
                key={child}
                variant="link"
                size="sm"
                className="!text-black items-start w-full text-left"
                onClick={() => handleChildClick(child)}
              >
                {child}
              </Button>
            ))
          : // Show main parent buttons
            Object.keys(navStructure).map((parent) => (
              <Button
                key={parent}
                variant="link"
                size="sm"
                className="!text-white items-start w-full text-left"
                onClick={() => handleParentClick(parent)}
              >
                {parent}
              </Button>
            ))}
      </div>

      {/* Back button to return to main menu */}
      {activeParent && (
        <Button
          variant="link"
          size="sm"
          className="!text-white-500 !hover:text-white-700 mt-4  w-full text-left"
          onClick={() => setActiveParent(null)}
        >
          ← Back
        </Button>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import Navbar from '@/components/Navbar';
import FloatingElements from '@/components/FloatingElement';
import Team from '@/components/teams';
import Stars from '@/components/ui/stars';
import Cards from "@/components/ui/FeatureGrid";
import Footer from "@/components/footer";


const Home = () => {
  return (
    <div className="bg-[#1d2951] min-h-screen relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
        
      </div>
   
      <div className="relative w-full h-[800px]">
        <Stars/>

        <div className="pt-16 ml-56 p-7 w-full flex items-start">
        <div 
          className="bg-transparent p-8 relative animate-float"
          style={{ width: '20cm', height: '4cm' }}
        >
         <h2
          className="text-6xl font-extrabold text-white drop-shadow-2xl"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Your Health, Your Data, Your Control — Securely on Chain.
        </h2>

        </div>
      </div>
        <div style={{
          position: "absolute",
          top: "100px",
          left: "80%",
          transform: "translateX(-50%)",
          width: "1600px",
          height: "800px",
        }}>
          <FloatingElements />
        </div>
      </div>

        <Cards/>
        <Team/>
        <Footer/>

          

      <style jsx>{`
  @keyframes floatPulse {
    0% {
      transform: translateY(0px) scale(1);
    }
    25% {
      transform: translateY(-5px) scale(1.02);
    }
    50% {
      transform: translateY(0px) scale(1);
    }
    75% {
      transform: translateY(5px) scale(0.98);
    }
    100% {
      transform: translateY(0px) scale(1);
    }
  }

  .animate-floatPulse {
    animation: floatPulse 4s ease-in-out infinite;
  }
`}</style>

    </div>
  );
};

export default Home;

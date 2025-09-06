"use client";

import Navbar from '@/components/Navbar';
import FloatingElements from '@/components/FloatingElement';

const Home = () => {
  return (
    <div className="bg-blue-100 min-h-screen relative overflow-hidden">
      
      <Navbar />
      <FloatingElements />

      <div className="pt-16 ml-56 p-7 w-full flex items-start">
        <div 
          className="bg-transparent p-8 relative animate-float"
          style={{ width: '20cm', height: '4cm' }}
        >
          <h2 
            className="text-6xl font-extrabold text-gray-800 drop-shadow-2xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Your Health, Your Data, Your Control — Securely on Chain.
          </h2>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 50% { transform: translateX(0px); }
          25% { transform: translateX(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;

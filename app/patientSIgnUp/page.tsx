// 'use client'; // Ensure the component is treated as a client component in Next.js

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Gender from '@/components/gender';
// import Map from '@/components/googleAPI';
// import Image from '@/components/uploadImage';

// const Sell: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState(1); // Start at step 1

//   // Function to handle step progression
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentStep < 1) {  
//         setCurrentStep((prevStep) => prevStep + 1);
//       }
//     }, 1);
    
//     // Cleanup the interval on component unmount
//     return () => clearInterval(interval);
//   }, [currentStep]);

//   return (
//     <div className="fixed inset-0 bg-teal-600 bg-opacity-40 flex justify-center items-center z-50 p-4">
//       <div className="bg-teal-700 bg-opacity-60 p-8 rounded-3xl max-w-5xl w-full h-full max-h-[80vh] overflow-y-auto text-white shadow-2xl flex flex-col space-y-8"> {/* Increased space-y-8 for better spacing */}
//         {/* Patient Name Input */}
//         <div className="w-full">
//           <label className="text-xl font-semibold mb-2 block">Name & Surname</label>
//           <input
//             type="text"
//             placeholder="Enter Name & Surname"
//             className="w-full p-3 rounded-md bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//           />
//         </div>

//         {/* Patient Address Input */}
//         <div className="w-full">
//           <label className="text-xl font-semibold mb-2 block">Patient Physical Address</label>
//           <input
//             type="text"
//             placeholder="Enter Physical Address"
//             className="w-full p-3 rounded-md bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//           />
//         </div>

//         {/* Gender Selection */}
//         <div className="w-full">
//           <label className="text-xl font-semibold mb-2 block">Gender</label>
//           <Gender />
//         </div>

//         {/* Patient ID Input */}
//         <div className="w-full">
//           <label className="text-xl font-semibold mb-2 block">Patient South African ID</label>
//           <input
//             type="text"
//             placeholder="Enter Patient ID"
//             className="w-full p-3 rounded-md bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//           />
//         </div>

//         {/* Map Component */}
//         <div className="w-full">
//           <label className="text-xl font-semibold mb-2 block">Patient Location</label>
//           <div className="w-full h-64 rounded-md overflow-hidden"> {/* Fixed height for the map */}
//             <Map />
//           </div>
//         </div>

//         {/* Image Upload */}
//         <div className="w-full">
//           <label className="text-xl font-semibold mb-2 block">Upload Patient Image</label>
//           <Image />
//         </div>

//         {/* Progress Bar (Placeholder) */}
//         <div className="w-full">
//           <div className="h-2 bg-teal-800 rounded-full">
//             <div
//               className="h-full bg-teal-500 rounded-full"
//               style={{ width: `${(currentStep / 1) * 100}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* Next Button */}
//         <div className="w-full text-center mt-8"> {/* Increased margin-top */}
//           <Link href="/submitData">
//             <button
//               className="bg-teal-800 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
//             >
//               LOAD PATIENT DATA
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sell;

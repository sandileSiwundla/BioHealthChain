"use client";

import React, { useState } from "react";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { password });
    // Here you can add authentication logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1d2951] to-[#0f1a2b] px-4 relative">
      {/* Beta Disclaimer Banner */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-400 to-teal-500 text-black text-center py-3 px-4 z-10 shadow-md">
        <div className="flex items-center justify-center space-x-3">
          <span className="font-bold text-lg">🧪</span>
          <p className="font-semibold text-sm">
            BETA ACCESS: Use code <span className="bg-black text-green-300 px-2 py-1 rounded-md mx-1 font-mono">123</span> 
            for quick access or <Link href="/patients/PatientSignUp" className="underline font-bold hover:text-blue-800">create your account</Link>
          </p>
          <span className="font-bold text-lg">⚕️</span>
        </div>
      </div>

      <div className="bg-[#1e3a8a] rounded-xl shadow-xl p-10 w-full max-w-md text-white mt-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Patient Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 font-medium">Patient ID</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="px-4 py-2 rounded-lg bg-[#2a4a8b] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <Link href={"/patients/patientDashboard"}> 
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
          </Link>
        </form>
        <p className="mt-6 text-center text-gray-300">
          Don't have an account? <a href="/patients/PatientSignUp" className="text-blue-400 hover:underline">Sign Up</a>
        </p>
        
        {/* Additional subtle disclaimer at bottom */}
        <div className="mt-6 p-3 bg-blue-900/30 rounded-lg border border-blue-700/50">
          <p className="text-xs text-center text-blue-200">
            <span className="font-semibold">Beta Notice:</span> This is a preview of our patient portal. 
            Your feedback helps us create a better healthcare experience for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
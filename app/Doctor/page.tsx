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
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-center py-2 px-4 z-10">
        <div className="flex items-center justify-center space-x-2">
          <span className="font-bold text-lg">🚀</span>
          <p className="font-semibold text-sm">
            BETA VERSION: For testing purposes, you can use code <span className="bg-black text-yellow-400 px-2 py-1 rounded-md mx-1 font-mono">123</span> 
            or <Link href="/Doctor/DoctorSignUp" className="underline font-bold hover:text-blue-800">create your own profile</Link>
          </p>
          <span className="font-bold text-lg">🔬</span>
        </div>
      </div>

      <div className="bg-[#1e3a8a] rounded-xl shadow-xl p-10 w-full max-w-md text-white mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 font-medium">Healthcare Provider ID (HCP-ID)</label>
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
          <Link href={"/Doctor/DoctorDashbaord"}> 
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
          </Link>
        </form>
        <p className="mt-6 text-center text-gray-300">
          Obtain a Healthcare Provider ID (HCP-ID) <a href="/Doctor/DoctorSignUp" className="text-blue-400 hover:underline">Sign Up</a>
        </p>
        
        {/* Additional subtle disclaimer at bottom */}
        <div className="mt-6 p-3 bg-blue-900/30 rounded-lg border border-blue-700/50">
          <p className="text-xs text-center text-blue-200">
            <span className="font-semibold">Note:</span> This is a beta version of our healthcare platform. 
            Your feedback helps us improve security and functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
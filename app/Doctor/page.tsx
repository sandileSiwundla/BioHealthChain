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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1d2951] to-[#0f1a2b] px-4">
      <div className="bg-[#1e3a8a] rounded-xl shadow-xl p-10 w-full max-w-md text-white">
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
          <Link href={"/components/patients/PatientFiles/SignUp"}> 
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
      </div>
    </div>
  );
};

export default LoginPage;
import React from 'react';
import StickyNavbar from "./Navbar";
import './Home.css'
import { Link } from "react-router-dom";
import Team from './team'
import Pictures from './links'


const Home: React.FC = () => {
    return (
      <div className="">
        {/* Navbar */}
        <div>
  <StickyNavbar />
</div>
  
        {/* Headline Section */}
        <section id="home" className="headline-section">
          <div className="headline-container">
            <h2 className="headline-title">Welcome to BioHealthChain</h2>
            <p className="headline-text">
              Putting your health records in your hands like never before.
            </p>
          </div>
        </section>


  
        {/* Features Section */}
        <section id="features" className="features-section">
          <h3 className="text-3xl font-bold text-center mb-6">Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-box">
              <h4 className="text-xl font-bold mb-2">Account Abstraction</h4>
              <p>Seamless onboarding for users with automated blockchain account creation.</p>
            </div>
            <div className="feature-box">
              <h4 className="text-xl font-bold mb-2">Zero-Knowledge Proofs</h4>
              <p>Doctors can access patient data securely without exposing sensitive details.</p>
            </div>
            <div className="feature-box">
              <h4 className="text-xl font-bold mb-2">Health Buddy</h4>
              <p>AI-powered assistant for instant medical advice.</p>
            </div>
          </div>
        </section>
   
        
      </div>
    );
  };
  
export default Home;

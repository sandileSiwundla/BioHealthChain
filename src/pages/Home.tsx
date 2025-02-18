import React from 'react';
import ReabetsweMothiba from '/src/assets/ReabetsweMothiba.jpg';
import Tshepang from '/src/assets/Tshepang.jpg';
import lwazi from '/src/assets/lwazi.jpg';
import sandile from '/src/assets/sandile.jpeg'
import linkedIN from '/src/assets/linkedin/linkedin4.jpeg'
import github from '/src/assets/github/git.png'
import StickyNavbar from "./Navbar";
import './Home.css'
import { Link } from "react-router-dom";


const Home: React.FC = () => {
    return (
      <div className="min-h-screen">
        {/* Navbar */}
        <StickyNavbar />
  
        {/* Headline Section */}
        <section id="home" className="headline-section">
          <div className="headline-container">
            <h2 className="headline-title">Welcome to BioHealthChain</h2>
            <p className="headline-text">
              Putting your health records in your hands like never before.
            </p>
          </div>
        </section>

        <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of your application.</p>
      <Link to="/patient">Go to Dashboard</Link>
    </div>
  
        {/* About Section */}
        <section id="about" className="about-section">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="about-text">Empowering secure and seamless healthcare data access.</p>
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
  
        {/* Meet the Team */}
        <section className="team-section">
          <h3 className="text-3xl font-bold text-center mb-6">Meet The Team</h3>
  
          {[  
            {
                name: "Reabetswe Mothiba",
                role: "Chief Financial Officer",
                image: ReabetsweMothiba,
                linkedin: "https://www.linkedin.com/in/reabetswe-mothiba-1687b0320/",
                github: "https://github.com/Rheyaa03",
                quote: "I’m a Fullstack Web Developer and Language Practice student with a passion for blockchain and AI. As a member of Africa's Blockchain Club, I’m exploring new technologies to create secure, scalable applications and drive innovation in tech."
              },
            { 
                name: "Tshepang Mokone",
                role: "Chief Technology Officer",
                image: Tshepang, 
                linkedin: "https://www.linkedin.com/in/tshepang-mokone-b44b72310/", 
                github: "https://github.com/mike5t", 
                quote: "Blockchain Innovator and Software Craftsman with 3 years of systems engineering experience. Specializes in secure systems using smart contracts and zk-SNARKs, leveraging the latest tech for scalable blockchain solutions. Passionate about decentralized applications and cryptographic advancements."
            },
            { 
                name: "Lwazi Mashiya",
                role: "Chief Executive Officer", 
                image: lwazi, linkedin: "https://www.linkedin.com/in/lwazi-mashiya-23a057255", 
                github: "https://github.com/MashiyaL", 
                quote: "I’m a blockchain developer with 3 years of experiBlockchain developer with a passion for secure smart contracts and scalable Dapps.ence in computer science and a passion for building secure smart contracts and scalable Dapps. From DeFi to decentralized storage, I create Web3 solutions that are efficient, reliable, and future-proof.building, deploying, and shapening the future—one block at a time." },
            { 
                name: "Sandile Siwundla", 
                role: "Blockchain Developer", 
                image: sandile, 
                linkedin: "https://www.linkedin.com/in/lwazi-mashiya-23a057255", 
                github: "https://github.com/MashiyaL", 
                quote: "Building decentralized applications for the future of secure digital transactions." }
          ].map((member, index) => (
            <figure key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <div className="team-info">
                <blockquote>
                  <p className="text-lg font-semibold text-center">“{member.quote}”</p>
                </blockquote>
                <figcaption>
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                  <div className="social-links">
                    <a href={member.linkedin} target="_blank">
                      <img src={linkedIN} alt="LinkedIn Profile" />
                    </a>
                    <a href={member.github} target="_blank">
                      <img src={github} alt="GitHub Profile" />
                    </a>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </section>
  
        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
          <p className="text-lg mb-6">Reach out to us for more information.</p>
          <a href="mailto:info@brandname.com" className="contact-button">Email Us</a>
        </section>
  
        {/* Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} BioHealthChain. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
export default Home;

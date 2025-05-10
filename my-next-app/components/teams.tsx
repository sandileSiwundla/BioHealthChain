import * as React from "react";
import { Github, Linkedin } from "lucide-react";

const Team = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Team Section */}
      <section className="bg-blue-100 py-10 px-5">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Meet the Team
        </h3>

        {[  
          {
            name: "Reabetswe Mothiba",
            role: "Chief Financial Officer",
            image: "/ReabetsweMothiba.jpg", // Reference image from public
            linkedin: "https://www.linkedin.com/in/reabetswe-mothiba-1687b0320/",
            github: "https://github.com/Rheyaa03",
            quote: "I’m a Fullstack Web Developer and Language Practice student with a passion for blockchain and AI. As a member of Africa's Blockchain Club, I’m exploring new technologies to create secure, scalable applications and drive innovation in tech."
          },
          { 
            name: "Tshepang Mokone",
            role: "Chief Technology Officer",
            image: "/Tshepang.jpg", 
            linkedin: "https://www.linkedin.com/in/tshepang-mokone-b44b72310/", 
            github: "https://github.com/mike5t", 
            quote: "Blockchain Innovator and Software Craftsman with 3 years of systems engineering experience. Specializes in secure systems using smart contracts and zk-SNARKs, leveraging the latest tech for scalable blockchain solutions. Passionate about decentralized applications and cryptographic advancements."
          },
          { 
            name: "Lwazi Mashiya",
            role: "Chief Executive Officer", 
            image: "/lwazi.jpg", 
            linkedin: "https://www.linkedin.com/in/lwazi-mashiya-23a057255", 
            github: "https://github.com/MashiyaL", 
            quote: "I’m a blockchain developer with 3 years of experience in computer science and a passion for building secure smart contracts and scalable Dapps. From DeFi to decentralized storage, I create Web3 solutions that are efficient, reliable, and future-proof."
          },
          { 
            name: "Sandile Siwundla", 
            role: "Blockchain Developer", 
            image: "/sandile.jpeg", // Reference image from public
            linkedin: "https://www.linkedin.com/in/lwazi-mashiya-23a057255", 
            github: "https://github.com/MashiyaL", 
            quote: "Building decentralized applications for the future of secure digital transactions."
          }
        ].map((member, index) => (
          <figure key={index} className="mb-10 flex items-center bg-blue-100 p-8 rounded-lg shadow-lg">
            {/* Profile Image on the Left */}
            <img src={member.image} alt={member.name} className="w-36 h-36 object-cover rounded-full mr-6" />

            {/* Text Section on the Right */}
            <div className="text-left">
              <blockquote className="italic text-gray-600 text-lg mb-4">
                “{member.quote}”
              </blockquote>
              <figcaption>
                <div className="text-xl  text-gray-800">{member.name}</div>
                <div className="text-sm text-gray-500 mb-4">{member.role}</div>
              </figcaption>

              {/* Social Links in the Bottom Right */}
              <div className="flex justify-end gap-4 mt-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-blue-700 transition-transform duration-300 transform hover:scale-110" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 text-gray-800 transition-transform duration-300 transform hover:scale-110" />
                </a>
              </div>
            </div>
          </figure>
        ))}
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-10 px-5 text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h3>
        <p className="text-lg mb-6 text-gray-600">Reach out to us for more information.</p>
        <a href="mailto:info@brandname.com" className="bg-teal-400 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition-colors duration-300">
          Email Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} BioHealthChain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Team;

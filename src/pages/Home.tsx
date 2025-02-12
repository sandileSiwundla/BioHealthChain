import React from 'react';
import ReabetsweMothiba from '/src/assets/ReabetsweMothiba.jpg';
import Tshepang from '/src/assets/Tshepang.jpg';
import lwazi from '/src/assets/lwazi.jpg';
import sandile from '/src/assets/sandile.jpeg'
import linkedIN from '/src/assets/linkedin/linkedin4.jpeg'
import github from '/src/assets/github/git.png'
import StickyNavbar from "./Navbar"; 





const App = () => {
  return (
    
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <StickyNavbar />
      <div className="space-y-7">  {/* Adds vertical spacing between child elements */}
</div>

      {/* Headline Section */}
      <section id="home" className="flex-1 bg-[#779DA6] flex items-center">
        <div className="container mx-auto text-center px-4 py-20">
          <h2 style ={{display: 'flex', alignItems:'center' , justifyContent:'center',}}
          >Welcome to BioHealthchain</h2>
          <p style ={{display: 'flex', alignItems:'center' , justifyContent:'center',}}>
            putting your health records in your hands like never before
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#779DA6] py-20">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
           
          </p>
        </div>
      </section>

     
 
       {/* Features Section */}
 <section id="features" className="bg-[#779DA6] py-20">
 <div className="container mx-auto px-4">
   <h3 className="text-3xl font-bold text-center mb-6">Features</h3>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     <div className="p-6 bg-white rounded shadow text-center">
       <h4 className="text-xl font-bold mb-2">Account Abstarction </h4>
       <p className="text-gray-600">Making onboarding of our clients seamless allowing anyone without the priori knowledge of blockchain to create an account as we create one for you </p>
     </div>
     <div className="p-6 bg-white rounded shadow text-center">
       <h4 className="text-xl font-bold mb-2">Zero-Knowlege proofs </h4>
       <p className="text-gray-600">allowing doctores to acces patients data without revealing sensetive data </p>
     </div>
     <div className="p-6 bg-white rounded shadow text-center">
       <h4 className="text-xl font-bold mb-2">Health Buddy</h4>
       <p className="text-gray-600">Our health companion we built to assit patients with dast medical advise on the go </p>
     </div>
   </div>
 </div>
</section>
<div className="bg-[#779DA6] py-20">
<h3 className="text-3xl font-bold text-center mb-6">Meet The Team</h3>
<figure className="md:flex bg-[#779DA6] rounded-xl p-8 md:p-0">
            
            <img className="w-32 h-32 md:w-48 md:h-auto" src={ReabetsweMothiba} alt="" width="100" height="100" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-7">
                <blockquote>
                    <p className="text-lg font-semibold text-center">
                        “I’m a Fullstack Web Developer and Language Practice student with a passion for blockchain and AI. As a member of Africa's Blockchain Club, I’m exploring new technologies to create secure, scalable applications and drive innovation in tech.
                        ”
                    </p>
                    </blockquote>
                    
                <figcaption className="font-medium">
                <div className="text-cyan-600">
                        Reabetswe Mothiba
                    </div>
                    <div className="text-gray-500">
                        Chief Financial Officer
                    </div>
                    <div className="flex justify-end space-x-7">
  <a href="https://www.linkedin.com/in/reabetswe-mothiba-1687b0320/" target="_blank">
    <img className="w-8 h-8 md:w-12 md:h-12 rounded-full" src={linkedIN} alt="LinkedIn Profile" width="32" height="32" />
  </a>
  <a href="https://github.com/Rheyaa03" target="_blank">
    <img className="w-8 h-8 md:w-12 md:h-12 rounded-full" src={github} alt="GitHub Profile" width="32" height="32" />
  </a>
</div>

                </figcaption>
            </div>
        </figure><figure className="md:flex bg-[#779DA6] rounded-xl p-8 md:p-0">
        <img className="w-32 h-32 md:w-48 md:h-auto" src={Tshepang} alt="" width="100" height="100" />

                <div className="pt-6 md:p-8 text-center md:text-left space-y-7">
                    <blockquote>
                        <p className="text-lg font-semibold text-center">
                            “Blockchain Innovator and Software Craftsman with 3 years of systems engineering experience. Specializes in secure systems using smart contracts and zk-SNARKs, leveraging the latest tech for scalable blockchain solutions. Passionate about decentralized applications and cryptographic advancements.
                            ”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-cyan-600">
                            Tshepang Mokone
                        </div>
                        <div className="text-gray-500">
                            Chief Technology Officer
                        </div>
                       <div className="flex justify-end space-x-7">
  <a href="https://www.linkedin.com/in/tshepang-mokone-b44b72310/" target="_blank">
    <img className="w-8 h-8 md:w-12 md:h-12 rounded-full" src={linkedIN} alt="LinkedIn Profile" width="32" height="32" />
  </a>
  <a href="https://github.com/mike5t" target="_blank">
    <img className="w-8 h-8 md:w-12 md:h-12 rounded-full" src={github} alt="GitHub Profile" width="32" height="32" />
  </a>
</div>
                    </figcaption>
                </div>
            </figure><figure className="md:flex bg-[#779DA6] rounded-xl p-8 md:p-0">
            <img className="w-32 h-32 md:w-48 md:h-auto mx-auto shadow-lg" src={lwazi} alt="" width="100" height="100" />

                <div className="pt-6 md:p-8 text-center md:text-left space-y-7">
                    <blockquote>
                        <p className="text-lg font-semibold text-center">
                            “I’m a blockchain developer with 3 years of experience in computer science and a passion for building secure smart contracts and scalable Dapps. From DeFi to decentralized storage, I create Web3 solutions that are efficient, reliable, and future-proof.
                            building, deploying, and shapeing the future—one block at a time.
                            ”
                        </p>

                    </blockquote>

                    <figcaption className="font-medium">
                        <div className="text-cyan-600">
                            Lwazi Mashiya
                        </div>
                        <div className="text-gray-500">
                            Chief Executive Officer
                        </div>
                        <div className="flex justify-end space-x-7">
  <a href="https://www.linkedin.com/in/lwazi-mashiya-23a057255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
    <img className="w-8 h-8 md:w-12 md:h-12 rounded-full" src={linkedIN} alt="LinkedIn Profile" width="32" height="32" />
  </a>
  <a href="https://github.com/MashiyaL" target="_blank">
    <img className="w-8 h-8 md:w-12 md:h-12 rounded-full" src={github} alt="GitHub Profile" width="32" height="32" />
  </a>
</div>
                  
</figcaption>
                </div>
            </figure><figure className="md:flex bg-[#779DA6] rounded-xl p-8 md:p-0">
            <img className="w-32 h-32 md:w-48 md:h-auto mx-auto shadow-lg " src={sandile} alt="" width="100" height="100" />

            <div className="pt-6 md:p-8 text-center md:text-left space-y-7">
                    <blockquote>
                        <p className="text-lg font-semibold text-center">
                        “I’m a blockchain developer with 3 years of experience in computer science and a passion for building secure smart contracts and scalable Dapps. From DeFi to decentralized storage, I create Web3 solutions that are efficient, reliable, and future-proof.
                            building, deploying, and shapeing the future—one block at a time.
                            ”
                        </p>

                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-cyan-600">
                            Sandile Siwundla
                        </div>
                        <div className="text-gray-500">
                            Something for sure
                        </div>
                        <div className="flex justify-end space-x-7">
  <a href="https://www.linkedin.com/in/lwazi-mashiya-23a057255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
    <img className="w-8 h-8 md:w-12 md:h-12 rounded-full" src={linkedIN} alt="LinkedIn Profile" width="32" height="32" />
  </a>
  <a href="https://github.com/MashiyaL" target="_blank">
    <img className="w-8 h-8 md:w-12 md:h-12 rounded-full" src={github} alt="GitHub Profile" width="32" height="32" />
  </a>
</div>
                    </figcaption>
                </div>
            </figure>
            </div>
       {/* Contact Section */}
       <section id="contact" className="bg-[#F9F7F4] text-blue-900 py-20">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
          <p className="text-lg mb-6">Reach out to us for more information or inquiries.</p>
          <a
            href="mailto:info@brandname.com"
            className="bg-white text-blue-600 py-3 px-6 rounded hover:bg-gray-200 transition duration-300"
          >
            Email Us
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-blue-900 py-4">
        <div style ={{display: 'flex', alignItems:'center' , justifyContent:'center',}}>
          <p>&copy; {new Date().getFullYear()} BioHealthchain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

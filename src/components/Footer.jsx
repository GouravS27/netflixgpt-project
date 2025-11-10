import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 font-bold py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-6">Connect Me? +91-8910468440 / +91-9051829351</p>
        
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/GouravS27" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/gauravsingh27012000/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </a>

           <a
            href="mailto:gauravsingh27012000@gmail.com" 
            className="hover:text-white transition"
          >
            <FaEnvelope size={24} />
          </a>

          <a
            href="https://www.instagram.com/ig_gaurav_____/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-gray-400 font-bold text-center">
          Netflix Clone © 2025 Created by Gaurav Singh
        </div>
      </div>
    </footer>
  );
};

export default Footer;

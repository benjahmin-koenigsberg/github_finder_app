/** @format */

import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-5 bg-neutral text-current-primary footer-center">
      <div>
        <FaGithub className="text-4xl shadow-xl" />
  
        <p className="text-neutral-content shadow-xl">
          GitHub finder copyright &copy; {footerYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

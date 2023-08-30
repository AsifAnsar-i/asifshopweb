import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center">𝔸𝕝𝕝 ℝ𝕚𝕘𝕙𝕥 ℝ𝕖𝕤𝕖𝕣𝕧𝕖𝕕 &copy; 𝕋𝕚𝕞𝕖𝕫𝕒</h3>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
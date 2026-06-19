import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <footer className="bg-[#0B2D5C] text-white pt-16 pb-8 border-t border-white/10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="md:col-span-5 flex flex-col justify-start">
            <h3 className="text-xl font-bold text-white mb-4 font-sans">Go4bill</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6 font-sans">
              is a modern financial platform helping users send money, pay bills, exchange currencies, and access global services securely and seamlessly.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white text-[#0B2D5C] flex items-center justify-center hover:scale-110 hover:bg-slate-100 transition-all duration-200"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white text-[#0B2D5C] flex items-center justify-center hover:scale-110 hover:bg-slate-100 transition-all duration-200"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white text-[#0B2D5C] flex items-center justify-center hover:scale-110 hover:bg-slate-100 transition-all duration-200"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white text-[#0B2D5C] flex items-center justify-center hover:scale-110 hover:bg-slate-100 transition-all duration-200"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Spacer / Middle Column for Company Links */}
          <div className="md:col-span-3 md:pl-8 flex flex-col justify-start">
            <h3 className="text-lg font-bold text-white mb-4 font-sans">Company</h3>
            <ul className="space-y-3 font-sans">
              <li>
                <a href={isHome ? "#about" : "/#about"} className="text-white/80 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <a href={isHome ? "#why" : "/#why"} className="text-white/80 hover:text-white transition-colors text-sm">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href={isHome ? "#faq" : "/#faq"} className="text-white/80 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column for Contact */}
          <div className="md:col-span-4 flex flex-col justify-start">
            <h3 className="text-lg font-bold text-white mb-2 font-sans">Contact</h3>
            <p className="text-white/80 text-sm mb-6 font-sans">+2348118785193</p>

            <h3 className="text-lg font-bold text-white mb-2 font-sans">Email</h3>
            <p className="text-white/80 text-sm mb-6 font-sans">
              <a href="mailto:whitequeenprecious1@gmail.com" className="hover:text-white transition-colors">
                whitequeenprecious1 @gmail.com
              </a>
            </p>

            <h3 className="text-lg font-bold text-white mb-2 font-sans">Address</h3>
            <p className="text-white/80 text-sm leading-relaxed font-sans">
              Suntoy building ,opposite winner church ogbomoso.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 mt-12 mb-8" />

        {/* Bottom copyright */}
        <div className="text-center">
          <p className="text-white/60 text-sm font-sans">
            &copy; 2026 Go4bill Financial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
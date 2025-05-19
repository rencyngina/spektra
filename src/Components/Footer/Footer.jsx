// components/Foot.jsx
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-3">
          <h2 className="text-lg font-bold mb-3">About Us</h2>
          <p className="text-sm leading-relaxed">
          Spektra Consulting Engineers Limited is a fully registered consulting firm specializing in Electrical and Mechanical Engineering services. With over two decades of experience, we are renowned for delivering innovative, efficient, and reliable solutions. Our esteemed team, comprising meticulously selected engineers and technicians, embodies unparalleled expertise, innovation, and an unwavering commitment to excellence.
          </p>
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-lg font-bold text-orange-500 mb-3">Location</h2>
          <p className="text-sm leading-relaxed">10440 Little Patuxent Parkway, Suite 300, Columbia, Maryland 21044</p>
          <p className="mt-2 text-sm">(443) 774-4050</p>
          <p className="text-sm text-blue-200">admin@thesovereignwealth.com</p>
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-lg font-bold text-orange-500 mb-3">Company</h2>
          <ul className="text-sm space-y-1">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="flex flex-col justify-between items-center lg:col-span-1">
          <Image src="/images/loggos.png" alt="Sovereign Wealth Logo" width={140} height={80} />
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-white hover:text-orange-400" />
            <FaInstagram className="text-white hover:text-orange-400" />
            <FaXTwitter className="text-white hover:text-orange-400" />
            <FaYoutube className="text-white hover:text-orange-400" />
            <FaLinkedinIn className="text-white hover:text-orange-400" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 border-t border-white/10 pt-6 flex flex-col lg:flex-row items-center justify-between">
        <p className="text-xs text-center lg:text-left">
          © 2025. © 2024 Sovereign Wealth Management. All Rights Reserved.
        </p>
        <div className="flex space-x-6 text-sm mt-4 lg:mt-0">
          <a href="#" className="hover:text-orange-400">Terms & Conditions</a>
          <a href="#" className="hover:text-orange-400">Privacy Policy</a>
          <a href="#" className="hover:text-orange-400">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

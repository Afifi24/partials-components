import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { FaEuroSign } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] flex items-end justify-end min-h-[15vh] ">
      <div className="w-[90%] text-[#4B5563] border-t-2   gap-4  py-4 flex flex-col md:flex-row m-auto items-center text-[14px] justify-between">
        <ul className="flex gap-2">
          <li>&copy; 2024 Lokoeur, Inc.</li>
          <li>. Privacy</li>
          <li>. Terms</li>
          <li>. Sitemap</li>
        </ul>
        <div className=" flex gap-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <MdLanguage className="text-md"/>
            <p className="underline">Francais(FR)</p>
          </div>
          <div className="cursor-pointer flex items-center gap-1">
            <FaEuroSign />
            <p className="underline">Dollor</p>
          </div>
          <div className="flex items-center text-lg gap-4">
            <MdFacebook className="  cursor-pointer" />
            <FaTwitter className="  cursor-pointer" />
            <FaInstagram className="  cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

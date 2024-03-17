import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray text-white p-5">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-center text-sm md:text-base">
          Copyright © {new Date().getFullYear()} Null Pixel
        </p>
      </div>
    </footer>
  );
};

export default Footer;

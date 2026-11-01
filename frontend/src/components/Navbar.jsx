import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop h-16 max-w-[1440px] mx-auto backdrop-blur-xl bg-surface/70 border-b border-outline-variant shadow-sm">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-blue-600 text-3xl">
            verified_user
          </span>
          <span className="text-2xl font-bold text-blue-600">
            VerifyRx
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-lg">
          <a className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" href="#">Features</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">How It Works</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/dashboard">Dashboard</a>
        </div>
        <div className="flex items-center gap-md">
          <button className="px-lg py-sm bg-primary text-on-primary rounded-xl font-label-md hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

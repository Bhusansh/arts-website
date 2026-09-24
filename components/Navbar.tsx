"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="sticky top-0 z-[60] w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Mobile: Hamburger toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 -ml-2 text-white hover:text-gold transition-colors z-[60] relative" 
            aria-label="Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
          
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="font-heading text-2xl tracking-[0.2em] font-bold text-white hover:text-gold transition-colors relative z-[60]">
            KARMA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium">
            <Link href="/" className={`transition-colors ${isActive('/') ? 'text-gold' : 'hover:text-gold'}`}>Home</Link>
            <Link href="/arts" className={`transition-colors ${isActive('/arts') ? 'text-gold' : 'hover:text-gold'}`}>Arts</Link>
            <Link href="/journey" className={`transition-colors ${isActive('/journey') ? 'text-gold' : 'hover:text-gold'}`}>Journey</Link>
            <Link href="/contact" className={`transition-colors ${isActive('/contact') ? 'text-gold' : 'hover:text-gold'}`}>Contact</Link>
          </nav>

          {/* Empty div for flex balance on mobile */}
          <div className="w-6 md:hidden"></div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col gap-8 text-center text-sm uppercase tracking-[0.3em] font-medium">
          <Link href="/" onClick={closeMenu} className={`transition-colors ${isActive('/') ? 'text-gold' : 'text-white hover:text-gold'}`}>Home</Link>
          <Link href="/arts" onClick={closeMenu} className={`transition-colors ${isActive('/arts') ? 'text-gold' : 'text-white hover:text-gold'}`}>Arts</Link>
          <Link href="/journey" onClick={closeMenu} className={`transition-colors ${isActive('/journey') ? 'text-gold' : 'text-white hover:text-gold'}`}>Journey</Link>
          <Link href="/contact" onClick={closeMenu} className={`transition-colors ${isActive('/contact') ? 'text-gold' : 'text-white hover:text-gold'}`}>Contact</Link>
        </nav>
      </div>
    </>
  );
}

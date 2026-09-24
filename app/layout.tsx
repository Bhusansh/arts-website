import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KARMA | Artist Portfolio",
  description: "Stunning art portfolio showcasing pieces and journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-gold selection:text-black">
        {/* Navigation - Mobile First */}
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between">
            {/* Mobile: Hamburger placeholder */}
            <button className="md:hidden p-2 -ml-2 text-white hover:text-gold transition-colors" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            
            {/* Logo */}
            <Link href="/" className="font-heading text-2xl tracking-[0.2em] font-bold text-white hover:text-gold transition-colors">
              KARMA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <Link href="/arts" className="hover:text-gold transition-colors">Arts</Link>
              <Link href="/journey" className="hover:text-gold transition-colors">Journey</Link>
              <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
            </nav>

            {/* Empty div for flex balance on mobile */}
            <div className="w-6 md:hidden"></div>
          </div>
        </header>

        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>

        {/* Custom Footer with slanted top right line */}
        <footer className="relative bg-neutral-950 text-white overflow-hidden mt-10">
          {/* Slanted Line Decoration using SVG for precision */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg 
              className="relative block w-full h-[60px]" 
              data-name="Layer 1" 
              xmlns="http://www.w3.org/2000/svg" 
              preserveAspectRatio="none" 
              viewBox="0 0 1200 120"
            >
              <path 
                d="M0,120 L1200,120 L1200,0 L600,120 Z" 
                className="fill-black"
              ></path>
              {/* Thin gold line along the slant */}
              <polyline 
                points="1200,0 600,120 0,120" 
                fill="none" 
                stroke="#D4AF37" 
                strokeWidth="2" 
                opacity="0.5"
              />
            </svg>
          </div>

          <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
              
              {/* Logo & Intro */}
              <div className="flex flex-col">
                <Link href="/" className="font-heading text-3xl tracking-[0.2em] font-bold mb-4">
                  KARMA
                </Link>
                <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
                  Fine art pieces crafted with passion. Transforming ordinary spaces into extraordinary experiences.
                </p>
              </div>

              {/* Shortcuts */}
              <div className="flex flex-col">
                <h4 className="text-sm font-heading tracking-widest mb-6 text-gold">Explore</h4>
                <nav className="flex flex-col gap-4 text-xs tracking-widest uppercase">
                  <Link href="/" className="hover:text-gold transition-colors w-fit">Home</Link>
                  <Link href="/arts" className="hover:text-gold transition-colors w-fit">Arts Gallery</Link>
                  <Link href="/journey" className="hover:text-gold transition-colors w-fit">Artist Journey</Link>
                  <Link href="/contact" className="hover:text-gold transition-colors w-fit">Contact & Inquiries</Link>
                </nav>
              </div>

              {/* Socials */}
              <div className="flex flex-col">
                <h4 className="text-sm font-heading tracking-widest mb-6 text-gold">Connect</h4>
                <div className="flex gap-4">
                  {/* Instagram Icon */}
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  {/* Twitter/X Icon */}
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-gray-500 uppercase">
              <p>© {new Date().getFullYear()} KARMA. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 hover:bg-green-400 hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}

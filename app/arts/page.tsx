import Link from 'next/link';

export default function ArtsPage() {
  const arts = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="flex-1 w-full bg-neutral-950 pt-28 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-[0.2em] mb-6 text-white drop-shadow-md">
            THE COLLECTION
          </h1>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-6"></div>
          <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto font-light tracking-widest uppercase leading-relaxed">
            A curated gallery of visionary pieces. Each stroke is an exploration of the soul and the cosmos.
          </p>
        </div>

        {/* Gallery Grid - Strict layout similar to reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
          {arts.map((item) => (
            <div key={item} className="group relative w-full aspect-[3/4] bg-black border border-white/5 overflow-hidden cursor-pointer">
              
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <span className="text-white/20 text-xs tracking-[0.2em] uppercase">Artwork {item}</span>
              </div>
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/50 pointer-events-none transition-colors duration-500 z-20"></div>

              {/* Information Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10 backdrop-blur-sm">
                <h3 className="text-white font-heading text-lg md:text-xl tracking-widest mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Ethereal {item}
                </h3>
                <div className="w-8 h-[1px] bg-gold mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 origin-center"></div>
                <p className="text-gray-300 text-[10px] uppercase tracking-[0.2em] mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  Acrylic on Canvas • 2026
                </p>
                <button className="border border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 text-[10px] uppercase tracking-widest transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-150 font-bold shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="mt-20 text-center">
          <button className="text-white/40 hover:text-gold text-xs uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-gold pb-1 font-light">
            Load More Works
          </button>
        </div>

      </div>
    </div>
  );
}

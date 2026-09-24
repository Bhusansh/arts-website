import Link from 'next/link';

export default function JourneyPage() {
  return (
    <div className="flex-1 w-full bg-neutral-950 pt-28 pb-24 min-h-screen">
      
      {/* 1. Hero / Intro Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Portrait */}
        <div className="w-full md:w-1/2 aspect-[4/5] relative bg-black border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
            <span className="text-white/20 text-xs tracking-[0.2em] uppercase">Artist Portrait Placeholder</span>
          </div>
          {/* Decorative Gold Elements */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold/50"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold/50"></div>
        </div>

        {/* Info & Story */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-[0.2em] mb-2 text-white">KARMA</h1>
          <p className="text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase mb-8">Visionary Fine Artist</p>
          
          <div className="space-y-6 text-gray-400 text-sm md:text-base font-light leading-relaxed">
            <p>
              Art is not just what I do; it is how I breathe. From a very young age, I was fascinated by the unspoken language of colors and forms. Every canvas is a dialogue between my inner world and the universe.
            </p>
            <p>
              My journey has been one of continuous exploration, blending traditional techniques with modern narratives to create pieces that resonate with the soul.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Golden Quote Section */}
      <section className="w-full bg-black py-32 px-6 border-y border-white/5 relative overflow-hidden mb-32 flex items-center justify-center">
        {/* Large background quote marks */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[300px] text-gold opacity-5 font-heading select-none pointer-events-none">
          "
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xl md:text-3xl lg:text-4xl text-white font-heading leading-loose md:leading-loose italic tracking-wide">
            <span className="text-gold mr-2">"</span>
            I want my art to be a mirror where you can see the beauty of your own chaos, and the serenity of your own soul.
            <span className="text-gold ml-2">"</span>
          </p>
        </div>
      </section>

      {/* 3. First Art & Masterpiece */}
      <section className="max-w-6xl mx-auto px-6 space-y-32">
        
        {/* First Art (Left Image, Right Text) */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 aspect-square bg-neutral-900 border border-white/10 flex items-center justify-center relative hover:border-white/30 transition-colors duration-500">
            <span className="text-white/20 text-xs tracking-[0.2em] uppercase">First Art Placeholder</span>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="font-heading text-2xl md:text-3xl tracking-widest mb-2 text-white">The Genesis</h3>
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-6">Her First Creation</p>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              This was the piece that started it all. Painted with sheer intuition rather than technique, it embodies raw, unfiltered emotion. It represents the courage to make the first mark on an empty canvas and the spark that ignited a lifelong passion.
            </p>
          </div>
        </div>

        {/* Masterpiece (Right Image, Left Text on Desktop) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 aspect-square bg-neutral-900 border border-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.05)] flex items-center justify-center relative group">
             {/* Glow effect on hover */}
             <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="text-white/20 text-xs tracking-[0.2em] uppercase z-10">Masterpiece Placeholder</span>
          </div>
          <div className="w-full md:w-1/2 md:text-right">
            <h3 className="font-heading text-2xl md:text-3xl tracking-widest mb-2 text-white">Opus Magnum</h3>
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-6">The Masterpiece</p>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              A culmination of years of practice and a lifetime of observation. This piece required months of dedication, capturing the delicate balance between light and shadow. It is not just a painting; it is a profound experience that transcends words.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

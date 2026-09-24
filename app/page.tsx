import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[calc(100vh-80px)] flex flex-col">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-neutral-900 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black/70 z-10" />
            <div className="border border-white/10 w-[85%] sm:w-[50%] max-w-lg aspect-square sm:aspect-[4/5] flex items-center justify-center bg-black/50 backdrop-blur-sm z-0">
              <span className="text-white/20 text-xs tracking-[0.3em] uppercase text-center px-4">Hero Background Image Placeholder</span>
            </div>
          </div>
        </div>

        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full border border-gold/40 flex items-center justify-center mx-auto bg-black/80 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.15)]">
             <span className="font-heading text-3xl md:text-4xl tracking-widest text-gold">KAR<br/>MA</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-7xl tracking-[0.2em] mb-4 text-white drop-shadow-lg">
            FINE ART
          </h1>
          <p className="max-w-md mx-auto text-xs md:text-sm text-gray-300 mb-10 tracking-[0.3em] uppercase font-light leading-relaxed">
            Crafting stories through canvas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link href="#best-selling" className="border border-white hover:border-gold hover:text-gold px-10 py-4 uppercase tracking-widest text-xs transition-all duration-300">
              Discover
            </Link>
          </div>
        </div>
      </section>

      {/* 2. BEST SELLING SECTION */}
      <section id="best-selling" className="w-full py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-4xl tracking-widest mb-4">Masterpieces</h2>
            <div className="w-16 h-[1px] bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="w-full aspect-[3/4] bg-neutral-900 border border-white/10 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:border-gold/50">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                  <span className="text-white/30 text-xs tracking-widest uppercase z-0 relative">Art Piece {item}</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <h3 className="tracking-widest uppercase text-sm font-light">Title Placeholder</h3>
                  <span className="text-gold text-xs tracking-wider">$$$</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/arts" className="inline-block border border-gold text-gold hover:bg-gold hover:text-black px-10 py-4 uppercase tracking-widest text-xs transition-all duration-300 font-bold">
              View All Arts
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ABOUT ARTIST SUMMARY */}
      <section className="w-full py-24 px-6 bg-neutral-950 border-y border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-neutral-900 border border-white/10 flex items-center justify-center relative">
            <span className="text-white/30 text-xs tracking-widest uppercase px-4 text-center">Artist Portrait Placeholder</span>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 -z-10 hidden md:block"></div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-heading text-2xl md:text-4xl tracking-widest mb-6">The Creator</h2>
            <p className="text-gray-400 text-sm md:text-base leading-loose mb-8 font-light">
              Every stroke tells a story of passion, resilience, and vision. Step into the world of Karma and discover the journey that shapes these timeless creations.
            </p>
            <Link href="/journey" className="inline-block border-b border-white hover:border-gold hover:text-gold pb-1 uppercase tracking-widest text-xs transition-all duration-300">
              Read Her Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="w-full py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-4xl tracking-widest mb-4">Inquiries</h2>
            <div className="w-16 h-[1px] bg-gold mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Do you accept custom commissions?", a: "Details about commission process goes here." },
              { q: "Do you ship internationally?", a: "Shipping information and policies placeholder." },
              { q: "How are the artworks packaged?", a: "Information about safe handling and packaging." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6 group cursor-default">
                <h3 className="text-sm tracking-widest uppercase mb-2 group-hover:text-gold transition-colors">{faq.q}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REVIEWS SECTION */}
      <section className="w-full py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-4xl tracking-widest mb-4">Testimonials</h2>
            <div className="w-16 h-[1px] bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((review) => (
              <div key={review} className="bg-black border border-white/5 p-8 flex flex-col relative">
                <div className="text-gold text-4xl font-heading absolute top-4 left-6 opacity-20">"</div>
                <p className="text-sm text-gray-300 font-light italic mb-6 relative z-10 leading-relaxed">
                  "Absolutely stunning work. The attention to detail and the emotion captured in the piece is breathtaking. A true masterpiece."
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
                     <span className="text-[10px] text-white/50">Img</span>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase text-white">Client Name</h4>
                    <span className="text-[10px] text-gold tracking-widest uppercase">Collector</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

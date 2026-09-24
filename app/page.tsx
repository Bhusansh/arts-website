"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function StarRating({ rating, setRating }: { rating: number; setRating: (r: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="transition-colors duration-150"
          aria-label={`Rate ${star} stars`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill={(hovered || rating) >= star ? '#C9922A' : 'none'}
            stroke={(hovered || rating) >= star ? '#C9922A' : '#444'}
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex-1 flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[calc(100vh-80px)] flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image
            src="/golden-glitter-brush-stroke-background.png"
            alt="Golden Glitter Background"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black z-10" />
        </div>

        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full border border-gold/40 flex items-center justify-center mx-auto bg-black/80 backdrop-blur-md shadow-[0_0_30px_rgba(201,146,42,0.15)]">
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
              <Link href="/arts" key={item} className="group cursor-pointer">
                <div className="w-full aspect-[3/4] bg-neutral-900 border border-white/10 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:border-gold/50">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                  <span className="text-white/30 text-xs tracking-widest uppercase z-0 relative">Art Piece {item}</span>
                </div>
                <div className="mt-4">
                  <h3 className="tracking-widest uppercase text-sm font-light">Title Placeholder</h3>
                  <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">Original — 1 of 1</p>
                </div>
              </Link>
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
                {/* Stars */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="#C9922A" stroke="#C9922A" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  ))}
                </div>
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

          {/* 6. SUBMIT A REVIEW */}
          <div className="mt-20 border-t border-white/5 pt-16">
            <div className="text-center mb-12">
              <h3 className="font-heading text-xl md:text-2xl tracking-widest mb-3">Share Your Experience</h3>
              <p className="text-gray-500 text-xs tracking-widest uppercase">Own a piece? We would love to hear from you.</p>
            </div>

            {submitted ? (
              <div className="max-w-xl mx-auto text-center border border-gold/30 p-10 bg-black">
                <div className="w-12 h-12 border border-gold flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C9922A" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="font-heading tracking-widest text-white text-sm">Thank you for your review.</p>
                <p className="text-gray-500 text-xs mt-2 tracking-wider">It will appear here once approved.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-8 bg-black border border-white/5 p-8 md:p-10">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="reviewer-name" className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2">Your Name</label>
                  <input
                    id="reviewer-name"
                    type="text"
                    required
                    className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors font-light text-sm rounded-none"
                    placeholder="Jane Smith"
                  />
                </div>

                {/* Star Rating */}
                <div className="flex flex-col">
                  <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-3">Rating</label>
                  <StarRating rating={rating} setRating={setRating} />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="reviewer-message" className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2">Your Message</label>
                  <textarea
                    id="reviewer-message"
                    required
                    rows={4}
                    className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors font-light text-sm resize-none rounded-none"
                    placeholder="Tell us about your experience..."
                  />
                </div>

                <button
                  type="submit"
                  className="self-start bg-gold text-black hover:bg-white hover:text-black px-10 py-4 uppercase tracking-widest text-xs font-bold transition-all duration-300"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}

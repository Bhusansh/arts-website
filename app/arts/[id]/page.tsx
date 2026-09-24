"use client";

import { useState, use } from "react";
import Link from "next/link";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

// Placeholder slides — replace with real images per product
const slides = [
  { label: "Front View" },
  { label: "Detail Shot" },
  { label: "Side Angle" },
  { label: "In Frame" },
];

export default function ArtworkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="flex-1 w-full bg-neutral-950 min-h-screen pt-10 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500">
          <Link href="/arts" className="hover:text-gold transition-colors">Collection</Link>
          <span>/</span>
          <span className="text-white">Ethereal {id}</span>
        </div>

        {/* Main layout: slider on top, info below on mobile; side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

          {/* ── LEFT: Image Slider ── */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* Main Slide */}
            <div className="relative w-full aspect-[3/4] bg-black border border-white/10 overflow-hidden">
              {/* Image placeholder */}
              <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center transition-all duration-500">
                <span className="text-white/20 text-xs tracking-widest uppercase">
                  {slides[current].label}
                </span>
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 border border-white/20 bg-black/60 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 border border-white/20 bg-black/60 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                aria-label="Next"
              >
                <ChevronRight />
              </button>

              {/* Slide counter */}
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] text-gray-400 tracking-widest border border-white/10">
                {current + 1} / {slides.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-2">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`aspect-square bg-neutral-900 border flex items-center justify-center transition-all duration-300 text-[9px] text-white/30 tracking-wider uppercase
                    ${i === current ? "border-gold" : "border-white/10 hover:border-white/30"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Product Info ── */}
          <div className="w-full lg:w-1/2 flex flex-col lg:sticky lg:top-28">

            {/* Status Badge */}
            <span className="inline-block border border-gold/50 text-gold text-[10px] uppercase tracking-[0.2em] px-3 py-1 mb-4">Available</span>

            {/* Title & Price */}
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-white mb-2">
              Ethereal {id}
            </h1>
            <p className="text-gold text-xl sm:text-2xl font-bold tracking-widest mb-6">$1,200</p>

            <div className="w-12 h-[1px] bg-gold mb-8"></div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
              A breathtaking piece that captures the dance between light and shadow. Rendered with meticulous brushwork, this painting evokes a profound sense of stillness and wonder. Each detail reveals a new layer of intention and depth.
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 border border-white/5 p-6 bg-black/30">
              {[
                { label: "Medium", value: "Acrylic on Canvas" },
                { label: "Dimensions", value: '24" × 36"' },
                { label: "Year", value: "2026" },
                { label: "Style", value: "Contemporary" },
                { label: "Edition", value: "Original — 1 of 1" },
                { label: "Frame", value: "Gold Framed" },
              ].map((detail) => (
                <div key={detail.label}>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{detail.label}</p>
                  <p className="text-xs text-white font-light">{detail.value}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/?text=I'm interested in acquiring Ethereal ${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gold text-black hover:bg-white hover:text-black py-4 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all duration-300"
              >
                <WhatsAppIcon />
                Inquire on WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex-1 border border-white/30 text-white hover:border-gold hover:text-gold py-4 text-xs uppercase tracking-widest flex items-center justify-center transition-all duration-300"
              >
                Send Enquiry
              </Link>
            </div>

            {/* Note */}
            <p className="mt-6 text-[10px] text-gray-600 tracking-wider uppercase text-center leading-relaxed">
              This is a one-of-a-kind original artwork. Once acquired, it will be marked as sold.
              Worldwide delivery available, carefully packaged.
            </p>
          </div>
        </div>

        {/* ── Related Works ── */}
        <div className="mt-24">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="font-heading text-xl tracking-widest text-white whitespace-nowrap">You May Also Like</h2>
            <div className="flex-1 h-[1px] bg-white/10"></div>
            <Link href="/arts" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-gold transition-colors whitespace-nowrap">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[1, 2, 3, 4]
              .filter((n) => String(n) !== id)
              .slice(0, 4)
              .map((item) => (
                <Link href={`/arts/${item}`} key={item} className="group flex flex-col bg-black border border-white/5 hover:border-gold/40 transition-colors duration-500">
                  <div className="relative w-full aspect-[3/4] bg-neutral-900 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                      <span className="text-white/20 text-[10px] tracking-widest uppercase">Artwork {item}</span>
                    </div>
                  </div>
                  <div className="p-3 flex justify-between items-center border-t border-white/5">
                    <h3 className="font-heading text-xs tracking-widest text-white">Ethereal {item}</h3>
                    <span className="text-gold text-xs font-bold">$1,200</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}

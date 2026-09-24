"use client";

import { useState, useEffect, useRef } from "react";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const arts = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Ethereal ${i + 1}`,
  medium: "Acrylic on Canvas",
  dimensions: '24" × 36"',
  year: "2026",
  description:
    "A breathtaking original piece that captures the interplay between light, shadow, and spirit. Rendered with meticulous brushwork rooted in traditional techniques, this work invites the viewer into a quiet, contemplative world. Every detail is intentional — every stroke, a conversation between the artist and the unseen.",
  slides: ["Front View", "Detail Shot", "Side Angle", "In Frame"],
}));

function ExpandedPanel({
  art,
  onClose,
  panelRef,
}: {
  art: (typeof arts)[0];
  onClose: () => void;
  panelRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? art.slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === art.slides.length - 1 ? 0 : c + 1));

  return (
    <div
      ref={panelRef}
      className="col-span-2 md:col-span-3 border border-gold/40 bg-black overflow-hidden"
      style={{ animation: "expandIn 0.35s ease forwards" }}
    >
      <div className="flex flex-col md:flex-row">

        {/* ── Slider ── */}
        <div className="w-full md:w-[45%] flex flex-col shrink-0">
          {/* Main slide */}
          <div className="relative aspect-[4/3] md:aspect-[3/4] bg-neutral-900 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 text-xs tracking-widest uppercase">{art.slides[current]}</span>
            </div>
            {/* Prev / Next */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 border border-white/20 bg-black/60 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 border border-white/20 bg-black/60 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            {/* Counter */}
            <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-0.5 text-[10px] text-gray-400 tracking-widest border border-white/10">
              {current + 1} / {art.slides.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-1 p-2 bg-neutral-950 border-t border-white/5">
            {art.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`aspect-square bg-neutral-900 border transition-all duration-300 flex items-center justify-center text-[9px] text-white/30
                  ${i === current ? "border-gold" : "border-white/10 hover:border-white/30"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* ── Info ── */}
        <div className="flex-1 flex flex-col justify-between p-6 md:p-10 border-t md:border-t-0 md:border-l border-white/5">
          <div>
            {/* Close */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/40 px-2 py-0.5">Original — 1 of 1</span>
                <h2 className="font-heading text-2xl md:text-3xl tracking-widest text-white mt-3">{art.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-300 shrink-0"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">{art.description}</p>

            {/* Details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/5">
              {[
                { label: "Medium", value: art.medium },
                { label: "Dimensions", value: art.dimensions },
                { label: "Year", value: art.year },
              ].map((d) => (
                <div key={d.label}>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{d.label}</p>
                  <p className="text-xs text-white">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/?text=I'm interested in acquiring "${art.title}"`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gold text-black hover:bg-white py-4 text-xs uppercase tracking-widest font-bold transition-all duration-300 w-full md:w-auto md:self-start md:px-12"
          >
            <WhatsAppIcon />
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ArtsPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [cols, setCols] = useState(3);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateCols = () => setCols(window.innerWidth >= 768 ? 3 : 2);
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const handleSelect = (id: number) => {
    if (selectedId === id) {
      setSelectedId(null);
      return;
    }
    setSelectedId(id);
    setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 60);
  };

  // Index of selected item in the arts array (0-based)
  const selectedIndex = selectedId ? arts.findIndex((a) => a.id === selectedId) : -1;

  // Last index of the row containing the selected item
  const insertAfterIndex =
    selectedIndex >= 0
      ? Math.min(Math.ceil((selectedIndex + 1) / cols) * cols - 1, arts.length - 1)
      : -1;

  const selectedArt = selectedId ? arts.find((a) => a.id === selectedId) : null;

  const gridItems: React.ReactNode[] = [];

  arts.forEach((art, i) => {
    const isSelected = selectedId === art.id;

    gridItems.push(
      <div
        key={art.id}
        onClick={() => handleSelect(art.id)}
        className={`group flex flex-col bg-black border cursor-pointer transition-all duration-300
          ${isSelected ? "border-gold" : "border-white/5 hover:border-gold/40"}`}
      >
        {/* Image */}
        <div className="relative w-full aspect-[3/4] bg-neutral-900 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            <span className="text-white/20 text-xs tracking-widest uppercase">Artwork {art.id}</span>
          </div>
          {/* Gold corner accent when selected */}
          {isSelected && (
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold" />
          )}
        </div>

        {/* Card footer */}
        <div className={`p-3 flex items-center justify-between border-t transition-colors duration-300
          ${isSelected ? "border-gold/30 bg-gold/5" : "border-white/5"}`}>
          <h3 className="font-heading text-xs tracking-widest text-white">{art.title}</h3>
          <div className={`w-5 h-5 flex items-center justify-center transition-transform duration-300 ${isSelected ? "rotate-180 text-gold" : "text-white/40"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>
    );

    // Insert expanded panel after the last card in the row containing the selected item
    if (i === insertAfterIndex && selectedArt) {
      gridItems.push(
        <ExpandedPanel
          key="expanded-panel"
          art={selectedArt}
          onClose={() => setSelectedId(null)}
          panelRef={panelRef}
        />
      );
    }
  });

  return (
    <div className="flex-1 w-full bg-neutral-950 pt-28 pb-24 px-4 sm:px-6 min-h-screen">
      <style>{`
        @keyframes expandIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-[0.2em] mb-6 text-white">
            THE COLLECTION
          </h1>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-6"></div>
          <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto font-light tracking-widest uppercase leading-relaxed">
            Click any piece to explore its story.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {gridItems}
        </div>
      </div>
    </div>
  );
}

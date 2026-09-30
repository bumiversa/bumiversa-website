// src/components/landing/HeroSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pageContent } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  whatsappLink: string;
}

export function HeroSection({ whatsappLink }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Refs untuk elemen konstruksi
  const foundationRef = useRef<HTMLDivElement>(null);
  const structLeftRef = useRef<HTMLDivElement>(null);
  const structRightRef = useRef<HTMLDivElement>(null);
  const structBeamRef = useRef<HTMLDivElement>(null);
  const presenceRef = useRef<HTMLDivElement>(null);
  const amberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          scrub: 1.5, // Sedikit lebih lambat agar terasa "berat" dan arsitektural
        },
      });

      // Phase 1: Foundation Terbentang (Membentuk landasan)
      tl.fromTo(
        foundationRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power2.inOut" }
      )
      // Phase 2: Structure Tumbuh (Kerangka naik dari fondasi)
      .fromTo(
        [structLeftRef.current, structRightRef.current],
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1,
          ease: "power2.out",
          transformOrigin: "bottom center"
        },
        "-=0.5"
      )
      .fromTo(
        structBeamRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          transformOrigin: "center center"
        },
        "-=0.6"
      )
      // Phase 3: Presence Naik (Volume utama menempati ruang)
      .fromTo(
        presenceRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.4"
      )
      // Phase 4: Activation (Sistem hidup)
      .fromTo(
        amberRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(2)"
        },
        "-=0.2"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-navy-grid py-24 md:py-32 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-content mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* KOLOM KIRI: Typography & Message */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:items-start items-center mb-8">
              <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase mb-3">
                Digital Foundation
              </span>
              <div className="w-8 h-[1px] bg-accent/60" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
              {pageContent.hero.headline}
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
              {pageContent.hero.subheadline}
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-green-900/20 hover:shadow-green-900/40"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {pageContent.hero.ctaText}
            </a>
          </div>

          {/* KOLOM KANAN: Architectural Construction Object */}
          <div className="flex-1 w-full max-w-[350px] mx-auto md:mx-0">
            <div className="relative h-[350px] md:h-[420px] w-full flex items-end justify-center pb-10">

              {/* ANNOTATIONS (Sangat kecil, arsitektural) */}
              <div className="absolute bottom-2 left-0 text-[9px] tracking-widest text-white/30 uppercase">Foundation</div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-2 text-[9px] tracking-widest text-white/30 uppercase -rotate-90 origin-left">Structure</div>
              <div className="absolute top-10 right-0 text-[9px] tracking-widest text-accent/70 uppercase">Presence</div>

              {/* 1. FOUNDATION (Base Plane) */}
              <div
                ref={foundationRef}
                className="absolute bottom-10 w-full h-[12px] bg-white/10 border-t border-white/20 rounded-sm"
              />

              {/* 2. STRUCTURE (Framework) */}
              {/* Left Pillar */}
              <div
                ref={structLeftRef}
                className="absolute bottom-[22px] left-[20%] w-[1px] h-[160px] bg-white/20"
              />
              {/* Right Pillar */}
              <div
                ref={structRightRef}
                className="absolute bottom-[22px] right-[20%] w-[1px] h-[160px] bg-white/20"
              />
              {/* Top Beam */}
              <div
                ref={structBeamRef}
                className="absolute bottom-[182px] left-[20%] w-[60%] h-[1px] bg-white/30"
              />

              {/* 3. PRESENCE (Main Volume) */}
              <div
                ref={presenceRef}
                className="absolute bottom-[60px] left-1/2 -translate-x-1/2 w-[50%] h-[120px] bg-bumiversa-800/90 border border-accent/30 rounded-sm shadow-2xl shadow-black/60 flex items-center justify-center"
              >
                {/* Amber Precision Marker */}
                <div
                  ref={amberRef}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_15px_rgba(245,158,11,0.9)]"
                />
                <span className="text-[10px] tracking-widest text-white/80 uppercase font-medium">System</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

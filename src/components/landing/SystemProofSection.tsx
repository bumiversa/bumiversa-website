// src/components/landing/SystemProofSection.tsx
import { pageContent } from "@/lib/content";

export function SystemProofSection() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-neutral-200">
      <div className="max-w-content mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-bumiversa-900 mb-6">
          {pageContent.systemProof.title}
        </h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
          {pageContent.systemProof.description}
        </p>

        {/* Honest Architectural Concept Visualization (No Fake UI) */}
        <div className="mt-8 p-6 md:p-8 bg-neutral-50 border border-neutral-200 rounded-lg max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base font-medium text-neutral-700">
            {/* The Engine */}
            <div className="px-4 py-3 bg-bumiversa-50 text-bumiversa-900 rounded-md border border-bumiversa-500 shadow-sm">
              BUMIVERSA Profile Engine
            </div>

            {/* Connector */}
            <span className="hidden md:block text-neutral-400 text-xl">⟶</span>
            <span className="md:hidden text-neutral-400 text-xl">↓</span>

            {/* The Configurations */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-2 bg-white text-neutral-600 rounded-md border border-neutral-200">Company Profile</span>
              <span className="px-3 py-2 bg-white text-neutral-600 rounded-md border border-neutral-200">Consultant</span>
              <span className="px-3 py-2 bg-white text-neutral-600 rounded-md border border-neutral-200">Organization</span>
            </div>
          </div>
          <p className="mt-6 text-xs text-neutral-500 italic">
            *Representasi konsep arsitektur: Satu fondasi mesin, dikonfigurasi berbeda untuk setiap kebutuhan organisasi.
          </p>
        </div>
      </div>
    </section>
  );
}

// src/components/landing/OutcomeSection.tsx
import { pageContent } from "@/lib/content";

export function OutcomeSection() {
  return (
    <section className="bg-bumiversa-50 py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-bumiversa-900 mb-6">
          {pageContent.outcome.title}
        </h2>
        <p className="text-lg md:text-xl text-neutral-850 max-w-3xl mx-auto leading-relaxed">
          {pageContent.outcome.description}
        </p>
      </div>
    </section>
  );
}

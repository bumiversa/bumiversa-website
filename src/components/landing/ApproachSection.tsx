// src/components/landing/ApproachSection.tsx
import { pageContent } from "@/lib/content";

export function ApproachSection() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-bumiversa-900 mb-12 text-center">
          {pageContent.approach.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pageContent.approach.points.map((point, index) => (
            <div key={index} className="flex flex-col border-t-2 border-accent pt-6">
              <h3 className="text-xl font-semibold text-bumiversa-900 mb-3">
                {point.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

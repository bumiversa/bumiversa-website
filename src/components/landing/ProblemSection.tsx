// src/components/landing/ProblemSection.tsx
import { pageContent } from "@/lib/content";

export function ProblemSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-bumiversa-900 mb-10 text-center">
          {pageContent.problem.title}
        </h2>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {pageContent.problem.points.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bumiversa-50 text-bumiversa-900 flex items-center justify-center text-sm font-semibold border border-bumiversa-500">
                  {index + 1}
                </span>
                <p className="text-neutral-850 text-lg leading-relaxed">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

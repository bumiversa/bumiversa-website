// src/components/landing/FAQSection.tsx
import { pageContent } from "@/lib/content";

export function FAQSection() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-neutral-200">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-bumiversa-900 mb-12 text-center">
          Pertanyaan yang Sering Diajukan
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {pageContent.faq.map((item, index) => (
            <details
              key={index}
              className="group bg-neutral-50 rounded-lg border border-neutral-200 open:bg-white open:border-bumiversa-500 transition-colors duration-200"
            >
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-bumiversa-900 list-none">
                <span>{item.q}</span>
                <span className="transition-transform duration-200 group-open:rotate-180 text-bumiversa-500">
                  {/* Simple Chevron Down Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

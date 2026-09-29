// src/components/landing/ScopeSection.tsx
import { pageContent } from "@/lib/content";

export function ScopeSection() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-bumiversa-900 mb-12 text-center">
          Ruang Lingkup Layanan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* In Scope */}
          <div className="bg-white p-6 md:p-8 rounded-lg border border-neutral-200 shadow-sm">
            <h3 className="text-xl font-semibold text-bumiversa-900 mb-6 flex items-center gap-2">
              <span className="text-green-600 text-2xl">✓</span>
              Fokus Kami
            </h3>
            <ul className="space-y-4">
              {pageContent.scope.focus.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-850">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-bumiversa-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Out of Scope */}
          <div className="bg-white p-6 md:p-8 rounded-lg border border-neutral-200 shadow-sm">
            <h3 className="text-xl font-semibold text-neutral-600 mb-6 flex items-center gap-2">
              <span className="text-neutral-400 text-2xl">✕</span>
              Bukan Fokus Utama
            </h3>
            <ul className="space-y-4">
              {pageContent.scope.notFocus.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-500">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-300 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Jika kebutuhan Anda berada di luar ruang lingkup ini, ceritakan saja. Kita mulai dari{" "}
            <a
              href="https://discovery.bumiversa.dev"
              className="text-bumiversa-500 hover:text-bumiversa-900 font-medium underline underline-offset-4 transition-colors"
            >
              discovery.bumiversa.dev
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

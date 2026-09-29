// src/app/page.tsx
import { pageContent, siteConfig } from "@/lib/content";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { OutcomeSection } from "@/components/landing/OutcomeSection";
import { ApproachSection } from "@/components/landing/ApproachSection";
import { SystemProofSection } from "@/components/landing/SystemProofSection";
import { ScopeSection } from "@/components/landing/ScopeSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";

export default function Home() {
  const whatsappMessage = `Halo ${siteConfig.name}, saya mengunjungi halaman *${siteConfig.domain}*. ${pageContent.hero.ctaText}`;
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="min-h-screen">
      <HeroSection whatsappLink={whatsappLink} />
      <ProblemSection />
      <OutcomeSection />
      <ApproachSection />
      <SystemProofSection />
      <ScopeSection />
      <FAQSection />
      <FinalCTASection whatsappLink={whatsappLink} />
    </main>
  );
}

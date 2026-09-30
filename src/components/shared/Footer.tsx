// src/components/shared/Footer.tsx
export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-neutral-50 py-8">
      <div className="max-w-content mx-auto px-6 text-center">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} BUMIVERSA. Dibangun dengan disiplin dan transparansi.
        </p>
      </div>
    </footer>
  );
}

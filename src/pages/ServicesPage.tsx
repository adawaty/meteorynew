import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";

export default function ServicesPage() {
  const { t, dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen bg-background font-body flex flex-col noise-overlay">
      <div className="gradient-orb-1" />
      <div className="gradient-orb-2" />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="heritage-badge mb-6 justify-center">🏆 LBCP & ISO Certified</div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider mb-4">{t.nav.products}</h1>
                <p className="text-white/80 max-w-2xl mx-auto text-lg">
                  {t.services_page.header_desc}
                </p>
            </div>
        </div>
        
        {/* Catalog */}
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  );
}

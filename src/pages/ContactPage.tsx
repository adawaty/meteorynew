import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  const { t, dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen bg-background font-body flex flex-col noise-overlay">
      <div className="gradient-orb-1" />
      <div className="gradient-orb-2" />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 mb-8 border-b border-border">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-tight mb-4">{t.nav.contact}</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">Get in touch with our team for expert fire safety solutions and consultation</p>
            </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

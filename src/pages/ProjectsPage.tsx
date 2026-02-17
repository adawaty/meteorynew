import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  const { t, dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen bg-background font-body flex flex-col noise-overlay">
      <div className="gradient-orb-1" />
      <div className="gradient-orb-2" />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 mb-8 border-b border-border">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-tight mb-4">{t.nav.projects}</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">Showcasing our expertise across diverse fire safety installations and solutions</p>
            </div>
        </div>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

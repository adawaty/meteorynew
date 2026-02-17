import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Distributors from "@/components/Distributors";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Award, Shield, Zap } from "lucide-react";

export default function Home() {
  const { t, dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen bg-background font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <Distributors />
      
      {/* Heritage & Trust Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Heritage Content */}
            <div className="fade-in">
              <div className="heritage-badge mb-6">
                ⭐ Established 1979 — 45+ Years of Excellence
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                A Legacy of Fire Safety Innovation
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.home.about_teaser_desc}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                For over four decades, we have been the trusted partner for fire safety solutions across Egypt and the Middle East. Our commitment to excellence, innovation, and customer satisfaction remains unwavering.
              </p>
              <Link href="/about">
                <Button className="btn-professional">
                  {t.home.read_more} <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Certifications & Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 slide-up">
              {/* LBCP Certification */}
              <div className="cert-badge">
                <div className="cert-badge-icon">🏆</div>
                <div className="cert-badge-title">LBCP Certified</div>
                <div className="text-xs text-muted-foreground mt-2">Life Safety Code Compliance</div>
              </div>

              {/* ISO Certification */}
              <div className="cert-badge">
                <div className="cert-badge-icon">✓</div>
                <div className="cert-badge-title">ISO Certified</div>
                <div className="text-xs text-muted-foreground mt-2">Quality Management</div>
              </div>

              {/* Experience */}
              <div className="cert-badge">
                <div className="cert-badge-icon">45+</div>
                <div className="cert-badge-title">Years</div>
                <div className="text-xs text-muted-foreground mt-2">Industry Experience</div>
              </div>

              {/* Global Trust */}
              <div className="cert-badge">
                <div className="cert-badge-icon">🌍</div>
                <div className="cert-badge-title">Global Partner</div>
                <div className="text-xs text-muted-foreground mt-2">Trusted Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="trust-indicator">
              <Shield className="w-5 h-5 trust-indicator-icon" />
              <div>
                <div className="font-bold">Advanced Manufacturing</div>
                <div className="text-xs opacity-75">Facility in Egypt</div>
              </div>
            </div>
            <div className="trust-indicator">
              <Award className="w-5 h-5 trust-indicator-icon" />
              <div>
                <div className="font-bold">Global Partnerships</div>
                <div className="text-xs opacity-75">With Leading Labs</div>
              </div>
            </div>
            <div className="trust-indicator">
              <Zap className="w-5 h-5 trust-indicator-icon" />
              <div>
                <div className="font-bold">Integrated Solutions</div>
                <div className="text-xs opacity-75">Complete Fire Safety</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <Services />

      {/* Projects Teaser */}
      <div className="bg-white">
        <Projects />
        <div className="text-center pb-20">
          <Link href="/projects">
            <Button className="btn-professional">
              {t.home.view_all_projects} <ArrowRight className={dir === 'rtl' ? "rotate-180 mr-2" : "ml-2"} />
            </Button>
          </Link>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

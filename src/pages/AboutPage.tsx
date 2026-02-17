import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Shield, Zap, CheckCircle } from "lucide-react";

export default function AboutPage() {
  const { t, dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen bg-background font-body flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="heritage-badge mb-6 justify-center">
              ⭐ Established 1979 — 45+ Years of Excellence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4">{t.nav.about}</h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              A trusted leader in fire safety innovation and excellence
            </p>
          </div>
        </div>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            {/* Story */}
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 1979, we have been at the forefront of fire safety innovation for over 45 years. What started as a vision to provide reliable fire safety solutions has evolved into a comprehensive ecosystem of products and services.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t.home.about_teaser_desc}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, we continue to set industry standards through continuous innovation, rigorous quality control, and an unwavering commitment to customer safety.
              </p>
              <div className="elegant-divider my-8" />
              <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                {[
                  "45+ years of proven expertise and reliability",
                  "LBCP and ISO certified manufacturing facilities",
                  "Advanced technology and continuous innovation",
                  "Global partnerships with leading safety organizations",
                  "Comprehensive support and after-sales service"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values & Certifications */}
            <div className="space-y-8 slide-up">
              {/* Core Values */}
              <div className="premium-card p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">{t.about.values_title}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-primary mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      {t.about.values.integrity.title}
                    </h4>
                    <p className="text-muted-foreground">{t.about.values.integrity.desc}</p>
                  </div>
                  <div className="elegant-divider" />
                  <div>
                    <h4 className="font-bold text-lg text-primary mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent" />
                      {t.about.values.excellence.title}
                    </h4>
                    <p className="text-muted-foreground">{t.about.values.excellence.desc}</p>
                  </div>
                  <div className="elegant-divider" />
                  <div>
                    <h4 className="font-bold text-lg text-primary mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      {t.about.values.safety.title}
                    </h4>
                    <p className="text-muted-foreground">{t.about.values.safety.desc}</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="grid grid-cols-2 gap-4">
                <div className="cert-badge">
                  <div className="cert-badge-icon">🏆</div>
                  <div className="cert-badge-title">LBCP</div>
                  <div className="text-xs text-muted-foreground mt-2">Certified</div>
                </div>
                <div className="cert-badge">
                  <div className="cert-badge-icon">✓</div>
                  <div className="cert-badge-title">ISO</div>
                  <div className="text-xs text-muted-foreground mt-2">Certified</div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">{t.about.consulting.title}</h3>
                <p className="mb-6 opacity-90">{t.about.consulting.desc}</p>
                <a href="/#/contact" className="inline-block bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded transition-colors">
                  {t.about.consulting.button}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-secondary/20 py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">45 years of innovation, growth, and commitment to fire safety</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { year: "1979", title: "Founded", desc: "Established with a vision for fire safety" },
                { year: "1990s", title: "Expansion", desc: "Grew to become regional leader" },
                { year: "2000s", title: "Innovation", desc: "Introduced advanced manufacturing" },
                { year: "2024", title: "Excellence", desc: "45+ years of trusted partnership" }
              ].map((milestone, idx) => (
                <div key={idx} className="premium-card p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{milestone.year}</div>
                  <h4 className="font-bold text-primary mb-2">{milestone.title}</h4>
                  <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

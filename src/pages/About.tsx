import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-foreground text-background py-24">
         <div className="container px-4 text-center max-w-4xl mx-auto space-y-6">
           <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase">{t("about.legacy")}</h1>
           <p className="text-xl md:text-2xl text-muted-foreground">
             {t("about.legacy.desc")}
           </p>
         </div>
      </div>

      <div className="container px-4 py-16 max-w-4xl mx-auto space-y-16">
        <div className="prose prose-lg prose-headings:font-heading prose-headings:uppercase prose-a:text-primary max-w-none">
          <h3>{t("about.story.title")}</h3>
          <p>{t("about.story.p1")}</p>
          <p>{t("about.story.p2")}</p>

          <h3>{t("about.mission.title")}</h3>
          <p className="italic font-medium border-l-4 rtl:border-l-0 rtl:border-r-4 border-primary pl-4 rtl:pr-4">
            {t("about.mission.quote")}
          </p>
          <p className="font-bold">— Waleed A. Diab, CEO</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 border-t border-border pt-16">
          <div>
            <h3 className="text-2xl font-heading font-bold uppercase mb-4">{t("about.partners")}</h3>
            <p className="text-muted-foreground mb-4">
              {t("about.partners.desc")}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold uppercase mb-4">{t("about.tech")}</h3>
            <p className="text-muted-foreground mb-4">
              {t("about.tech.desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

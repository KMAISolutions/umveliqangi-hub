import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import mosqueHero from "@/assets/mosque-hero.jpg";
import academyStudents from "@/assets/academy-students.jpg";
import communityGathering from "@/assets/community-gathering.jpg";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  const items = [
    { src: mosqueHero, alt: "Mosque exterior at Umveliqangi Winterveldt", title: "Masjid & Architecture", category: "Events & Celebrations" },
    { src: academyStudents, alt: "Academy students studying Qur'an", title: "Academy & Student Life", category: "Academy & Student Life" },
    { src: communityGathering, alt: "Community gathering and outreach program", title: "Community Projects", category: "Community Projects & Social Impact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-12">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{t("gallery.title")}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            {t("gallery.description")}
          </p>
        </header>

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Card key={idx} className="overflow-hidden bg-card border-primary/10 shadow-elegant">
              <figure className="aspect-[4/3] overflow-hidden">
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
              </figure>
              <div className="p-4">
                <h2 className="font-semibold text-foreground">{item.title}</h2>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </div>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;

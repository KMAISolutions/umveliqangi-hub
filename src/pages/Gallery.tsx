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

        {/* Gallery Sections */}
        <section id="photos" className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Photo Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <Card key={idx} className="overflow-hidden bg-card border-primary/10 shadow-elegant hover:shadow-mosque transition-all duration-300 hover:-translate-y-2">
                <figure className="aspect-[4/3] overflow-hidden">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
                </figure>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Facilities Gallery */}
        <section id="facilities" className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Facilities Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden bg-card border-primary/10 shadow-elegant hover:shadow-mosque transition-all duration-300">
              <figure className="aspect-square overflow-hidden">
                <img src="https://images.unsplash.com/photo-1466442929976-97f336a657be" alt="Main Mosque" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
              </figure>
              <div className="p-3">
                <h3 className="font-semibold text-foreground text-sm">Main Mosque</h3>
                <p className="text-xs text-muted-foreground">Prayer Hall</p>
              </div>
            </Card>
            
            <Card className="overflow-hidden bg-card border-primary/10 shadow-elegant hover:shadow-mosque transition-all duration-300">
              <figure className="aspect-square overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Academy Classrooms" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
              </figure>
              <div className="p-3">
                <h3 className="font-semibold text-foreground text-sm">Academy</h3>
                <p className="text-xs text-muted-foreground">Classrooms</p>
              </div>
            </Card>
            
            <Card className="overflow-hidden bg-card border-primary/10 shadow-elegant hover:shadow-mosque transition-all duration-300">
              <figure className="aspect-square overflow-hidden">
                <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" alt="Boarding House" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
              </figure>
              <div className="p-3">
                <h3 className="font-semibold text-foreground text-sm">Boarding</h3>
                <p className="text-xs text-muted-foreground">Student Housing</p>
              </div>
            </Card>
            
            <Card className="overflow-hidden bg-card border-primary/10 shadow-elegant hover:shadow-mosque transition-all duration-300">
              <figure className="aspect-square overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Healthcare Center" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
              </figure>
              <div className="p-3">
                <h3 className="font-semibold text-foreground text-sm">Healthcare</h3>
                <p className="text-xs text-muted-foreground">Wellness Center</p>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;

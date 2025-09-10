import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";


const Index = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StatsSection />
      <FeaturedPrograms />
      
      <Footer />
      
    </div>
  );
};

export default Index;

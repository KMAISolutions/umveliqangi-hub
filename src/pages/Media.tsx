import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PrayerTimesWidget from "@/components/PrayerTimesWidget";
import SocialFeed from "@/components/SocialFeed";
import CommunityPoll from "@/components/CommunityPoll";
import { useTranslation } from "react-i18next";

const Media = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Social Media
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Stay connected with our community through social media updates, prayer times, and community engagement
          </p>
        </div>
      </section>

      {/* Social Media & Community Engagement */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("media.stayConnected.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("media.stayConnected.description")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PrayerTimesWidget />
            <SocialFeed />
            <CommunityPoll />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Media;
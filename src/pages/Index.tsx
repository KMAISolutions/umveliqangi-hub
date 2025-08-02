import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import Footer from "@/components/Footer";
import PrayerTimesWidget from "@/components/PrayerTimesWidget";
import SocialFeed from "@/components/SocialFeed";
import CommunityPoll from "@/components/CommunityPoll";
import QuickActions from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StatsSection />
      <FeaturedPrograms />
      
      {/* Community Engagement Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Connected
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our vibrant community through prayer times, social updates, and community polls
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
      <QuickActions />
    </div>
  );
};

export default Index;

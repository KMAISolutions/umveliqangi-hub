import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PrayerTimesWidget from "@/components/PrayerTimesWidget";
import SocialFeed from "@/components/SocialFeed";
import CommunityPoll from "@/components/CommunityPoll";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, PlayCircle, Radio, Award, Users, Share } from "lucide-react";
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

      {/* Media Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card id="blog" className="hover:shadow-mosque transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Community Blog & News</CardTitle>
                <CardDescription>
                  Stay updated with the latest news, announcements, and stories from our community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="islamic" className="w-full">Read Latest Posts</Button>
              </CardContent>
            </Card>
            
            <Card id="videos" className="hover:shadow-mosque transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <PlayCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Video Gallery</CardTitle>
                <CardDescription>
                  Watch recorded lectures, community events, and educational content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="islamic" className="w-full">Browse Videos</Button>
              </CardContent>
            </Card>
            
            <Card id="live" className="hover:shadow-mosque transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Radio className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Live Stream</CardTitle>
                <CardDescription>
                  Join live prayers, lectures, and community events from anywhere
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="islamic" className="w-full">Watch Live</Button>
              </CardContent>
            </Card>
            
            <Card id="donors" className="hover:shadow-mosque transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Donor Stories</CardTitle>
                <CardDescription>
                  Read inspiring stories from our generous donors and community supporters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="islamic" className="w-full">Read Stories</Button>
              </CardContent>
            </Card>
            
            <Card id="facebook" className="hover:shadow-mosque transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Facebook Feed</CardTitle>
                <CardDescription>
                  Follow our latest Facebook updates and community interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="islamic" className="w-full">Visit Facebook</Button>
              </CardContent>
            </Card>
            
            <Card id="social" className="hover:shadow-mosque transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Share className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Social Media Hub</CardTitle>
                <CardDescription>
                  Connect with us across all social media platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="islamic" className="w-full">Follow Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Media;
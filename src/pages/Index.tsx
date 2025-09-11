import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HandCoins, Heart, ClipboardList, Landmark, FileText, Award, Users, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";


const Index = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StatsSection />
      <FeaturedPrograms />
      
      {/* Donate Section */}
      <section id="donate" className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Your generous donations help us continue serving our community with faith-based education, healthcare, and social services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 transition-all">
              <CardContent className="pt-6 text-center">
                <HandCoins className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">General Donation</h3>
                <p className="text-sm opacity-80 mb-4">Support our overall mission</p>
                <Button variant="pearl" size="sm">Donate Now</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 transition-all">
              <CardContent className="pt-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2" id="sponsor">Sponsor a Student</h3>
                <p className="text-sm opacity-80 mb-4">Fund a student's education</p>
                <Button variant="pearl" size="sm">Sponsor Now</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 transition-all">
              <CardContent className="pt-6 text-center">
                <ClipboardList className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2" id="projects">Support Projects</h3>
                <p className="text-sm opacity-80 mb-4">Fund specific initiatives</p>
                <Button variant="pearl" size="sm">View Projects</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 transition-all">
              <CardContent className="pt-6 text-center">
                <Landmark className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2" id="waqf">Waqf Contributions</h3>
                <p className="text-sm opacity-80 mb-4">Endowment for lasting impact</p>
                <Button variant="pearl" size="sm">Contribute</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Reports & Recognition */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div id="reports">
              <h2 className="text-3xl font-bold text-foreground mb-6">Transparency Reports</h2>
              <p className="text-muted-foreground mb-6">
                We believe in complete transparency with our donors. Access our detailed financial reports 
                and impact assessments to see exactly how your contributions are making a difference.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>Annual Financial Report 2023</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>Community Impact Assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>Program Effectiveness Review</span>
                </div>
              </div>
              <Button variant="islamic" className="mt-6">
                <FileText className="w-4 h-4 mr-2" />
                Download Reports
              </Button>
            </div>
            
            <div id="recognition">
              <h2 className="text-3xl font-bold text-foreground mb-6">Donor Recognition</h2>
              <p className="text-muted-foreground mb-6">
                We are deeply grateful to our generous donors whose contributions make our work possible. 
                Your support transforms lives and strengthens our community.
              </p>
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Major Donors 2023</h3>
                    <p className="text-muted-foreground mb-4">
                      Special recognition for donors who contributed R10,000 or more
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total Major Donors:</span>
                        <span className="font-semibold">25</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Contributed:</span>
                        <span className="font-semibold">R485,000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
    </div>
  );
};

export default Index;

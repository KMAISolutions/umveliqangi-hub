import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Heart, Users, Award, ClipboardList } from "lucide-react";
import { useTranslation } from "react-i18next";

const Community = () => {
  const { t } = useTranslation();
  const communityPosts = [
    {
      id: 1,
      title: "Monthly Community Feeding Scheme Serves 500 Families",
      excerpt: "Our February feeding initiative reached a new milestone, providing nutritious meals and essential supplies to families in need across Winterveldt.",
      date: "February 8, 2024",
      author: "Community Services Team",
      category: "community",
      readTime: "3 min read",
      image: "/api/placeholder/400/250",
      tags: ["Feeding Scheme", "Community Impact", "Waqf"]
    },
    {
      id: 2,
      title: "Waqf Project Update: New Healthcare Equipment Donated",
      excerpt: "Thanks to our generous donors, the community clinic received new medical equipment worth R50,000, improving healthcare access for all residents.",
      date: "February 5, 2024",
      author: "Dr. Sarah Mbeki",
      category: "community",
      readTime: "4 min read",
      tags: ["Healthcare", "Waqf", "Donations"]
    },
    {
      id: 3,
      title: "Volunteer Appreciation: Meet Our Community Heroes",
      excerpt: "Celebrating the dedicated volunteers who make our community programs possible. Read their inspiring stories of service and commitment.",
      date: "February 1, 2024",
      author: "Volunteer Coordinator",
      category: "community",
      readTime: "5 min read",
      tags: ["Volunteers", "Community Heroes", "Appreciation"]
    }
  ];

  const upcomingEvents = [
    {
      title: "Community Clean-Up Day",
      date: "February 15, 2024",
      time: "8:00 AM",
      location: "Winterveldt Central"
    },
    {
      title: "Monthly Feeding Scheme",
      date: "February 17, 2024", 
      time: "11:00 AM",
      location: "Community Hall"
    },
    {
      title: "Health Screening Drive",
      date: "February 20, 2024",
      time: "9:00 AM", 
      location: "Clinic"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("community.hero.title")}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t("community.hero.description")}
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-elegant">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">2,500+</h3>
                <p className="text-muted-foreground">Families Served</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-elegant">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">15,000+</h3>
                <p className="text-muted-foreground">Meals Provided</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-elegant">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">25+</h3>
                <p className="text-muted-foreground">Active Projects</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-elegant">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarDays className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">10</h3>
                <p className="text-muted-foreground">Years of Service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BlogSection 
                title={t("community.blog.title")}
                category="community"
                posts={communityPosts}
              />
            </div>
            
            <div>
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5" />
                    {t("community.events.upcoming")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2">{event.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{event.date} at {event.time}</p>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </div>
                  ))}
                <Button variant="outline" className="w-full mt-4">
                  {t("actions.viewAll")}
                </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Outreach Sections */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Community Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services addressing the diverse needs of our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card id="healthcare" className="hover:shadow-mosque transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Healthcare & Wellness</CardTitle>
                <CardDescription>
                  Primary healthcare services, wellness programs, and health education for the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Primary medical checkups</li>
                  <li>• Health screenings</li>
                  <li>• Wellness workshops</li>
                  <li>• Emergency medical support</li>
                </ul>
                <Button variant="islamic" className="w-full mt-4">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card id="feeding" className="hover:shadow-mosque transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Feeding Schemes</CardTitle>
                <CardDescription>
                  Monthly feeding programs providing nutritious meals to families in need
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Monthly meal distribution</li>
                  <li>• Emergency food parcels</li>
                  <li>• Community soup kitchens</li>
                  <li>• Nutritional education</li>
                </ul>
                <Button variant="islamic" className="w-full mt-4">Get Involved</Button>
              </CardContent>
            </Card>
            
            <Card id="volunteer" className="hover:shadow-mosque transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Volunteer Program</CardTitle>
                <CardDescription>
                  Join our dedicated volunteers making a difference in the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Community service projects</li>
                  <li>• Mentorship programs</li>
                  <li>• Skills-based volunteering</li>
                  <li>• Youth leadership development</li>
                </ul>
                <Button variant="islamic" className="w-full mt-4">Register to Volunteer</Button>
              </CardContent>
            </Card>
            
            <Card id="entrepreneurship" className="hover:shadow-mosque transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <ClipboardList className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Entrepreneurship Hub</CardTitle>
                <CardDescription>
                  Business development support and skills training for local entrepreneurs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Business mentorship</li>
                  <li>• Skills development workshops</li>
                  <li>• Microfinance support</li>
                  <li>• Market access programs</li>
                </ul>
                <Button variant="islamic" className="w-full mt-4">Join Program</Button>
              </CardContent>
            </Card>
            
            <Card id="family" className="hover:shadow-mosque transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Family Corner</CardTitle>
                <CardDescription>
                  Programs and activities designed for families and children
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Family counseling services</li>
                  <li>• Children's educational programs</li>
                  <li>• Parenting workshops</li>
                  <li>• Family recreational activities</li>
                </ul>
                <Button variant="islamic" className="w-full mt-4">Explore Programs</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
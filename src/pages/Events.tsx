import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Calendar from "@/components/Calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Landmark, Users, GraduationCap, ClipboardList, FileText, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation();
  
  const eventCategories = [
    {
      id: "religious",
      title: "Religious Events",
      description: "Islamic celebrations, prayer gatherings, and spiritual programs",
      icon: Landmark,
      color: "bg-islamic-gold",
      events: [
        { title: "Jumu'ah Prayer", date: "Every Friday", time: "1:00 PM" },
        { title: "Qur'an Study Circle", date: "Sundays", time: "9:00 AM" },
        { title: "Ramadan Programs", date: "March 2024", time: "Various" }
      ]
    },
    {
      id: "community",
      title: "Community Events", 
      description: "Social gatherings, community meetings, and cultural celebrations",
      icon: Users,
      color: "bg-islamic-crescent",
      events: [
        { title: "Community Clean-Up", date: "Feb 15, 2024", time: "8:00 AM" },
        { title: "Cultural Heritage Day", date: "Sep 24, 2024", time: "10:00 AM" },
        { title: "Neighborhood Meeting", date: "Monthly", time: "7:00 PM" }
      ]
    },
    {
      id: "youth",
      title: "Youth Programs",
      description: "Educational activities, leadership training, and youth development",
      icon: GraduationCap,
      color: "bg-islamic-masjid",
      events: [
        { title: "Youth Leadership Workshop", date: "Feb 20, 2024", time: "2:00 PM" },
        { title: "Student Graduation", date: "Dec 2024", time: "10:00 AM" },
        { title: "Career Guidance Session", date: "Monthly", time: "4:00 PM" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Events</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Join us for spiritual growth, community building, and educational opportunities throughout the year
          </p>
        </div>
      </section>
      
      {/* Interactive Calendar */}
      <section id="calendar">
        <Calendar />
      </section>
      
      {/* Event Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Event Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the variety of programs and events we offer throughout the year
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.map((category) => (
              <Card key={category.id} id={category.id} className="hover:shadow-mosque transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                    <category.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                  <CardDescription className="text-center">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.events.map((event, index) => (
                      <div key={index} className="p-3 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-sm">{event.title}</h4>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-3 h-3" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="islamic" className="w-full mt-4">
                    View All Events
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Training & Workshops */}
      <section id="training" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills Training & Workshops
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Develop new skills and advance your career through our specialized training programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-elegant transition-all">
              <CardContent className="pt-6">
                <ClipboardList className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Digital Skills</h3>
                <p className="text-sm text-muted-foreground mb-3">Computer literacy and online tools</p>
                <Badge variant="outline">Monthly</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-elegant transition-all">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Leadership</h3>
                <p className="text-sm text-muted-foreground mb-3">Develop leadership capabilities</p>
                <Badge variant="outline">Quarterly</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-elegant transition-all">
              <CardContent className="pt-6">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Entrepreneurship</h3>
                <p className="text-sm text-muted-foreground mb-3">Start and grow your business</p>
                <Badge variant="outline">Bi-monthly</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-elegant transition-all">
              <CardContent className="pt-6">
                <ClipboardList className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Life Skills</h3>
                <p className="text-sm text-muted-foreground mb-3">Personal development and wellness</p>
                <Badge variant="outline">Weekly</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* RSVP & Event Management */}
      <section id="rsvp" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Event Registration & Information
              </h2>
              <p className="text-lg text-muted-foreground">
                Easy registration and detailed information for all our events
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Event Registration
                  </CardTitle>
                  <CardDescription>
                    Register for upcoming events and receive confirmations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Online RSVP system</li>
                    <li>• Event reminders</li>
                    <li>• Digital tickets</li>
                    <li>• Capacity management</li>
                  </ul>
                  <Button variant="islamic" className="w-full">
                    Register for Events
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Location & Directions
                  </CardTitle>
                  <CardDescription>
                    Find us easily with detailed location information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Interactive maps</li>
                    <li>• Public transport info</li>
                    <li>• Parking information</li>
                    <li>• Accessibility details</li>
                  </ul>
                  <Button variant="islamic" className="w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Widget */}
      <section id="upcoming" className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Miss Out
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Stay updated with our upcoming events and be part of our growing community
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="pearl" size="lg">
              <CalendarDays className="w-5 h-5 mr-2" />
              View Full Calendar
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
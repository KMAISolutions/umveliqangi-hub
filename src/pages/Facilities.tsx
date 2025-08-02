import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Heart, Calendar, Phone } from "lucide-react";

const Facilities = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: string]: number }>({});

  const facilities = [
    {
      id: "mosque",
      title: "Main Mosque & Prayer Halls",
      description: "The heart of our community, the mosque is where faith and unity meet. Our main prayer hall can accommodate large Jum'a gatherings and daily salah for men, while the dedicated women's prayer hall ensures comfort and dignity for all.",
      features: [
        "Spacious main prayer hall with clear Mihrab and Minbar",
        "Separate ablution (Wudhu) facilities for men and women", 
        "Peaceful atmosphere for Qur'an recitation, reflection, and spiritual growth"
      ],
      images: [
        "https://images.unsplash.com/photo-1466442929976-97f336a657be",
        "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
        "https://images.unsplash.com/photo-1527576539890-dfa815648363"
      ],
      icon: "🕌"
    },
    {
      id: "academy",
      title: "Qur'an & Leadership Academy (UQLA)",
      description: "Our academy is where future leaders are nurtured. Here, students receive Islamic knowledge, leadership training, and life skills, shaping a generation of faith-driven, community-conscious youth.",
      features: [
        "Modern classrooms for Qur'an memorization and leadership lessons",
        "Teacher resource areas and student study corners",
        "Registration and administration office for smooth operations"
      ],
      images: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      ],
      icon: "📚"
    },
    {
      id: "boarding",
      title: "Boys' Boarding House (Hostel)",
      description: "Our boarding facilities offer a safe, structured, and faith-centered environment for students attending the academy full‑time.",
      features: [
        "Dormitory-style accommodation with bunk beds and lockers",
        "Dedicated study and revision rooms to encourage academic focus",
        "Dining hall for healthy, shared meals",
        "Supervised living environment with mentorship and discipline"
      ],
      images: [
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
      ],
      icon: "🏠"
    },
    {
      id: "healthcare",
      title: "Community Healthcare & Wellness Center",
      description: "Our wellness center ensures that health and faith go hand in hand. The clinic provides basic medical services, health education, and Hajj/Umrah assessments, making healthcare accessible to our underserved community.",
      features: [
        "Primary healthcare and medical checkups",
        "Hajj & Umrah health services in partnership with local professionals",
        "Wellness programs and workshops for families and youth"
      ],
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
        "https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
      ],
      icon: "🏥"
    },
    {
      id: "skills",
      title: "Skills & Entrepreneurship Spaces",
      description: "We believe that skills and entrepreneurship break cycles of poverty. Our training spaces host workshops, incubator programs, and community classes that empower local youth and adults.",
      features: [
        "Flexible training rooms for vocational and digital skills",
        "Entrepreneurship sessions for small business development",
        "Incubator programs to support local startups"
      ],
      images: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
      ],
      icon: "⚡"
    },
    {
      id: "sports",
      title: "Sports & Recreation Facilities",
      description: "Physical wellness is key to balanced growth. Our sports and recreation areas bring youth together for play, exercise, and brotherhood.",
      features: [
        "Outdoor playfields for football, athletics, and community sports",
        "Spaces for youth team-building and physical activities",
        "Family-friendly recreation areas for events and programs"
      ],
      images: [
        "https://images.unsplash.com/photo-1517022812141-2362092",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027",
        "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
      ],
      icon: "⚽"
    },
    {
      id: "library",
      title: "Library & Resource Center",
      description: "Our library is a space for reflection, study, and growth, combining Islamic knowledge with modern learning resources.",
      features: [
        "Qur'an, Hadith, and Islamic studies books",
        "Study areas for students and researchers",
        "Access to e‑learning and downloadable materials",
        "Quiet, welcoming environment for reading and reflection"
      ],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      ],
      icon: "📖"
    },
    {
      id: "hall",
      title: "Multipurpose Community Hall",
      description: "Our hall is a flexible community space for events, training, and social upliftment. It's the hub for gatherings, workshops, and ceremonies that bring the community together.",
      features: [
        "Audio-visual setup for seminars and guest talks",
        "Adaptable for weddings, youth programs, and skills training",
        "Available for community-led initiatives"
      ],
      images: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
      ],
      icon: "🎪"
    }
  ];

  const nextImage = (facilityId: string, totalImages: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [facilityId]: ((prev[facilityId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (facilityId: string, totalImages: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [facilityId]: ((prev[facilityId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Facilities
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Purpose-built spaces serving faith, education, health, and community growth
            </p>
            <div className="text-lg opacity-90">
              Every space reflects the dedication of our founders, the generosity of our community, and the vision of an inclusive society.
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <Card key={facility.id} className="group hover:shadow-elegant transition-all duration-300 border-border/50 overflow-hidden">
                {/* Image Slideshow */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={facility.images[activeImageIndex[facility.id] || 0]}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => prevImage(facility.id, facility.images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => nextImage(facility.id, facility.images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                  >
                    →
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                    {facility.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(prev => ({ ...prev, [facility.id]: index }))}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === (activeImageIndex[facility.id] || 0)
                            ? 'bg-white'
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-glow">
                    {facility.icon}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {facility.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {facility.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {facility.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Button variant="outline" size="sm" className="text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      Virtual Tour
                    </Button>
                    <Button variant="islamic" size="sm" className="text-xs">
                      <Heart className="w-3 h-3 mr-1" />
                      Sponsor
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      Book Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Visit Our Facilities
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience our community spaces firsthand. Schedule a guided tour to see how our facilities serve our mission of faith, education, and community empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="islamic" size="lg" className="group">
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Schedule a Tour
            </Button>
            <Button variant="outline" size="lg">
              <Users className="w-4 h-4 mr-2" />
              Sponsor a Facility
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;
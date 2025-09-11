import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart, GraduationCap, Laptop, Stethoscope } from "lucide-react";
import academyStudents from "@/assets/academy-students.jpg";
import communityGathering from "@/assets/community-gathering.jpg";

const FeaturedPrograms = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Qur'an & Leadership Academy",
      description: "Comprehensive Islamic education with modern leadership training for youth and adults",
      image: academyStudents,
      features: ["Qur'an Memorization", "Arabic Language", "Leadership Skills", "Boarding Program"],
      buttonText: "Explore Academy",
      variant: "islamic" as const
    },
    {
      icon: Laptop,
      title: "E-Learning Platform",
      description: "Digital Islamic education accessible anywhere with interactive courses and certificates",
      image: communityGathering,
      features: ["Online Courses", "Interactive Videos", "Digital Certificates", "Mobile Access"],
      buttonText: "Start Learning",
      variant: "masjid" as const
    },
    {
      icon: Heart,
      title: "Community Services",
      description: "Healthcare, feeding schemes, and social development programs for the community",
      image: communityGathering,
      features: ["Primary Healthcare", "Feeding Programs", "Social Services", "Emergency Support"],
      buttonText: "Get Involved",
      variant: "crescent" as const
    }
  ];

  return (
    <section id="highlights" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we're building a stronger community through faith-based education, 
            technology-enabled learning, and comprehensive social services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-card/50 backdrop-blur border-primary/10 hover:shadow-mosque transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <program.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features List */}
                <div className="grid grid-cols-2 gap-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  variant={program.variant} 
                  className="w-full mt-6"
                  size="lg"
                >
                  {program.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-mosque">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Whether you're seeking spiritual growth, educational opportunities, or ways to serve your community, 
              we welcome you with open hearts and minds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="pearl" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Become a Member
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <GraduationCap className="w-5 h-5 mr-2" />
                Apply for Academy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Home, ClipboardList, Trophy, Award, Calendar, Phone, Mail } from "lucide-react";
import academyStudents from "@/assets/academy-students.jpg";
import { useTranslation } from "react-i18next";

const Academy = () => {
  const { t } = useTranslation();
  
  const programs = [
    {
      id: "programs",
      title: "Qur'an & Leadership Programs",
      description: "Comprehensive Islamic education combined with modern leadership training",
      image: academyStudents,
      features: ["Qur'an Memorization (Hifz)", "Arabic Language Studies", "Leadership Development", "Islamic History & Sciences"],
      duration: "3-5 years",
      ageGroup: "8-18 years"
    },
    {
      id: "boarding", 
      title: "Boarding Program",
      description: "Full residential program with structured learning and spiritual development",
      image: academyStudents,
      features: ["24/7 Supervision", "Structured Study Time", "Character Building", "Community Service"],
      duration: "Academic Year",
      ageGroup: "12-18 years"
    },
    {
      id: "workshops",
      title: "Youth Empowerment Workshops", 
      description: "Skills-based workshops for personal and professional development",
      image: academyStudents,
      features: ["Life Skills Training", "Public Speaking", "Project Management", "Digital Literacy"],
      duration: "Weekend/Holiday Programs",
      ageGroup: "14-25 years"
    }
  ];

  const achievements = [
    { title: "Qur'an Competitions Won", count: "25+", icon: Trophy },
    { title: "Students Graduated", count: "500+", icon: Award },
    { title: "Active Students", count: "150", icon: Users },
    { title: "Years of Excellence", count: "15", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Qur'an & Leadership Academy
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Nurturing faith-driven leaders through Islamic education and character development
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="pearl" size="lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive educational programs designed to develop both Islamic knowledge and leadership skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="group hover:shadow-mosque transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {program.ageGroup}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full mt-4" variant="islamic">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Development */}
      <section id="skills" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills Development Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Equipping students with practical skills for success in modern society
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-elegant transition-all">
              <CardContent className="pt-6">
                <ClipboardList className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Leadership Training</h3>
                <p className="text-sm text-muted-foreground">Developing future community leaders</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-elegant transition-all">
              <CardContent className="pt-6">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Digital Literacy</h3>
                <p className="text-sm text-muted-foreground">Modern technology skills</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-elegant transition-all">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Communication</h3>
                <p className="text-sm text-muted-foreground">Public speaking and presentation</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-elegant transition-all">
              <CardContent className="pt-6">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Character Building</h3>
                <p className="text-sm text-muted-foreground">Islamic values and ethics</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitions & Achievements */}
      <section id="competitions" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Competitions & Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating excellence in Islamic education and student accomplishments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center bg-gradient-primary text-primary-foreground shadow-mosque">
                <CardContent className="pt-6">
                  <achievement.icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">{achievement.count}</div>
                  <div className="text-sm opacity-90">{achievement.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section id="stories" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates who are making a difference in their communities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-subtle border-primary/20 shadow-elegant">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <blockquote className="text-lg text-foreground mb-4 italic">
                    "The Academy didn't just teach me the Qur'an - it taught me how to lead with integrity, 
                    serve my community, and balance faith with modern life. Today, I'm proud to be a teacher 
                    and community leader, following the values I learned here."
                  </blockquote>
                  <cite className="text-muted-foreground">
                    - Ahmad Hassan, Class of 2020, Community Teacher
                  </cite>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Enrollment */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Academy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards a transformative Islamic education experience
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="pearl" size="lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Apply for Admission
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Mail className="w-5 h-5 mr-2" />
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;
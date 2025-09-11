import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const timeline = [
    {
      year: "1983",
      title: "Foundation",
      description: "Founded by Mama Appah Zainab Nkumane as Winterveldt Madressah",
      icon: "🌟"
    },
    {
      year: "1995",
      title: "Community Growth",
      description: "Expanded services to include community healthcare and feeding programs",
      icon: "🏥"
    },
    {
      year: "2005",
      title: "Educational Excellence",
      description: "Launched comprehensive Qur'an and leadership education programs",
      icon: "📚"
    },
    {
      year: "2013",
      title: "Official NPO Status",
      description: "Registered as official NPO under Amir Al Hajj Kulungile Nkumane",
      icon: "🏛️"
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Introduced e-learning platform and digital community services",
      icon: "💻"
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Serving over 2,500 students with expanding community programs",
      icon: "🚀"
    }
  ];

  const leadership = [
    {
      name: "Amir Al Hajj Kulungile Nkumane",
      role: "Founder & Spiritual Leader",
      description: "Leading the community with wisdom and dedication for over 40 years",
      achievements: ["Community Development", "Islamic Education", "Youth Mentorship"]
    },
    {
      name: "Dr. Fatima Abdullah",
      role: "Academy Director",
      description: "Overseeing educational programs and student development",
      achievements: ["Educational Leadership", "Curriculum Development", "Student Support"]
    },
    {
      name: "Imam Ahmed Hassan",
      role: "Religious Affairs",
      description: "Guiding spiritual growth and religious education",
      achievements: ["Religious Guidance", "Community Counseling", "Interfaith Relations"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="story" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story of Faith & Service
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over four decades, Umveliqangi Winterveldt has been a beacon of hope, 
              education, and community service in South Africa. Our journey is one of 
              unwavering commitment to Islamic values and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-primary text-primary-foreground shadow-mosque">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl">{t("about.mission.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">
                  {t("about.mission.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-islamic-gold text-primary-foreground shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl">{t("about.vision.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">
                  {t("about.vision.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-islamic-crescent text-primary-foreground shadow-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-primary-foreground/90 space-y-2">
                  <li>• Faith-centered approach to life</li>
                  <li>• Educational excellence</li>
                  <li>• Community service & unity</li>
                  <li>• Inclusive & welcoming environment</li>
                  <li>• Leadership development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to a thriving community center, discover the milestones 
              that have shaped our organization.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeline.map((event, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-3xl">{event.icon}</span>
                      <span className="text-2xl font-bold text-primary">{event.year}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders who guide our community with wisdom, 
              compassion, and unwavering commitment to our shared values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="group text-center hover:shadow-mosque transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-primary-foreground font-bold text-2xl">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {leader.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {leader.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{leader.description}</p>
                  <div className="space-y-1">
                    {leader.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 justify-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Video */}
      <section id="video" className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Welcome to Our Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our founder share the inspiring story of how faith, dedication, and community spirit 
              built this sacred space that serves thousands today.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-primary rounded-2xl p-8 shadow-mosque">
              <div className="aspect-video bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                    A Message from Our Founder
                  </h3>
                  <p className="text-primary-foreground/80 mb-4">
                    Amir Al Hajj Kulungile Nkumane shares our journey from 1983 to today
                  </p>
                  <Button variant="pearl" size="lg">
                    Watch Our Story
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="text-primary-foreground">
                  <div className="text-2xl font-bold mb-1">40+</div>
                  <div className="text-sm opacity-80">Years of Service</div>
                </div>
                <div className="text-primary-foreground">
                  <div className="text-2xl font-bold mb-1">2,500+</div>
                  <div className="text-sm opacity-80">Lives Touched</div>
                </div>
                <div className="text-primary-foreground">
                  <div className="text-2xl font-bold mb-1">1</div>
                  <div className="text-sm opacity-80">United Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join Our Community Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Be part of a community that values faith, education, and service. 
            Together, we can continue building a brighter future for Winterveldt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="pearl" size="lg">
              <Users className="w-5 h-5 mr-2" />
              Become a Member
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Calendar className="w-5 h-5 mr-2" />
              Visit Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
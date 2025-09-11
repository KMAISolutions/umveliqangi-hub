import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Video, Download, User, BarChart2, Radio, PlayCircle, Award, Clock, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const ELearning = () => {
  const { t } = useTranslation();
  
  const courses = [
    {
      id: 1,
      title: "Introduction to Qur'an Studies",
      description: "Foundational course covering Qur'anic principles and interpretation",
      level: "Beginner",
      duration: "8 weeks",
      lessons: 24,
      enrolled: 156,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      id: 2, 
      title: "Arabic Language Fundamentals",
      description: "Learn classical Arabic for better understanding of Islamic texts",
      level: "Beginner",
      duration: "12 weeks", 
      lessons: 36,
      enrolled: 203,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
    },
    {
      id: 3,
      title: "Islamic Leadership Principles",
      description: "Modern leadership skills rooted in Islamic values and ethics",
      level: "Intermediate",
      duration: "10 weeks",
      lessons: 30,
      enrolled: 89,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
    }
  ];

  const features = [
    {
      icon: Video,
      title: "Interactive Video Lectures",
      description: "High-quality video content with engaging presentations from experienced instructors"
    },
    {
      icon: Download,
      title: "Downloadable Resources",
      description: "Access course materials, PDFs, and additional resources for offline study"
    },
    {
      icon: Award,
      title: "Digital Certificates",
      description: "Earn recognized certificates upon successful completion of courses"
    },
    {
      icon: Radio,
      title: "Hybrid Learning Options",
      description: "Combine online learning with in-person sessions at our academy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              E-Learning Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Accessible Islamic education from anywhere, combining traditional knowledge with modern technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="pearl" size="lg">
                <User className="w-5 h-5 mr-2" />
                Create Account
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our E-Learning Platform?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of Islamic education with our comprehensive online learning platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-mosque transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section id="courses" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Course Catalog
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive selection of Islamic education courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      <Users className="w-3 h-3" />
                      <span>{course.enrolled}</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Video className="w-4 h-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                    <span className="text-sm text-muted-foreground">({course.rating})</span>
                  </div>

                  <Button className="w-full mt-4" variant="islamic">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Portal */}
      <section id="auth" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="login" className="w-full">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Student Portal
                </h2>
                <p className="text-lg text-muted-foreground">
                  Access your courses, track your progress, and manage your learning journey
                </p>
              </div>
              
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                <TabsTrigger value="login">Student Login</TabsTrigger>
                <TabsTrigger value="register">New Registration</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-6">
                <Card className="max-w-md mx-auto shadow-elegant">
                  <CardHeader>
                    <CardTitle>Welcome Back</CardTitle>
                    <CardDescription>Sign in to continue your learning journey</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" variant="islamic">
                      <User className="w-4 h-4 mr-2" />
                      Sign In with Email
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">
                      Forgot your password? <a href="#" className="text-primary hover:underline">Reset here</a>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-6">
                <Card className="max-w-md mx-auto shadow-elegant">
                  <CardHeader>
                    <CardTitle>Join Our Community</CardTitle>
                    <CardDescription>Create your account to start learning</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" variant="islamic">
                      <User className="w-4 h-4 mr-2" />
                      Create New Account
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">
                      Already have an account? <a href="#" className="text-primary hover:underline">Sign in</a>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Progress Tracking */}
      <section id="progress" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Track Your Progress
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monitor your learning journey with detailed analytics and earn certificates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center shadow-elegant">
              <CardContent className="pt-6">
                <BarChart2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Learning Analytics</h3>
                <p className="text-muted-foreground">
                  Detailed insights into your study patterns and performance
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-elegant">
              <CardContent className="pt-6">
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Digital Certificates</h3>
                <p className="text-muted-foreground">
                  Earn verified certificates upon course completion
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-elegant">
              <CardContent className="pt-6">
                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Support</h3>
                <p className="text-muted-foreground">
                  Connect with fellow students and instructors
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloads Hub */}
      <section id="downloads" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Downloads Hub
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access course materials, worksheets, and additional resources
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-mosque">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Available Resources</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Download className="w-5 h-5 text-primary" />
                        <span>Course Handbooks & Guides</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Download className="w-5 h-5 text-primary" />
                        <span>Audio Recitations & Lectures</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Download className="w-5 h-5 text-primary" />
                        <span>Worksheets & Exercises</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Download className="w-5 h-5 text-primary" />
                        <span>Supplementary Reading Materials</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Access Requirements</h3>
                    <p className="text-muted-foreground mb-6">
                      Resources are available to enrolled students. Sign in to your account 
                      to access course-specific materials and downloads.
                    </p>
                    <Button variant="islamic" size="lg">
                      <User className="w-5 h-5 mr-2" />
                      Access Downloads
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of students worldwide in deepening their Islamic knowledge through our innovative e-learning platform
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="pearl" size="lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Browse Courses
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Video className="w-5 h-5 mr-2" />
              Watch Introduction
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ELearning;
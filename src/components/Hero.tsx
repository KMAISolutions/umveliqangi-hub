import { Button } from "@/components/ui/button";
import { Play, Users, BookOpen, Heart } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import mosqueHero from "@/assets/mosque-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={mosqueHero} 
          alt="Umveliqangi Winterveldt Mosque" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Islamic Crescent Symbol */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-mosque animate-float">
              <span className="text-primary-foreground font-bold text-2xl">☪</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Umveliqangi Winterveldt
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 bg-gradient-primary bg-clip-text text-transparent">
              Jum'a Masjid & Academy
            </span>
          </h1>

          {/* Motto */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium animate-fade-in" style={{animationDelay: '0.2s'}}>
            "Igniting Excellence, Empowering Communities"
          </p>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            A beacon of faith, education, and community service in Winterveldt since 1983. 
            Join us in building a stronger, more connected Islamic community through worship, learning, and service.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button variant="islamic" size="lg" className="shadow-mosque">
              <Users className="w-5 h-5 mr-2" />
              Join Our Community
            </Button>
            <Button variant="donate" size="lg">
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
            <Button variant="pearl" size="lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Academy Programs
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </Button>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16 animate-fade-in" style={{animationDelay: '1s'}}>
            <SearchBar />
          </div>

          {/* Quick Links Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.8s'}}>
            {[
              { name: "Prayer Times", icon: "🕌" },
              { name: "Donate", icon: "💝" },
              { name: "Academy", icon: "🎓" },
              { name: "E-Learning", icon: "💻" },
              { name: "Events", icon: "📅" },
              { name: "Community", icon: "🤝" },
              { name: "Contact", icon: "📞" }
            ].map((link, index) => (
              <Button
                key={link.name}
                variant="pearl"
                className="flex-col h-auto py-4 px-3 bg-primary-foreground/10 backdrop-blur border-primary-foreground/20 hover:bg-primary-foreground/20"
              >
                <span className="text-2xl mb-2">{link.icon}</span>
                <span className="text-xs text-primary-foreground">{link.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
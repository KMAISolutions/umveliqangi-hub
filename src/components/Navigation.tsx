import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Facilities", href: "/facilities" },
    { name: "Academy", href: "/academy" },
    { name: "E-Learning", href: "/e-learning" },
    { name: "Community", href: "/community" },
    { name: "Events", href: "/events" },
    { name: "Media", href: "/media" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-primary/10 sticky top-0 z-50 shadow-elegant">
      {/* Top Contact Bar */}
      <div className="bg-gradient-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>+27 12 123 4567</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Winterveldt, South Africa</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Prayer Times: Fajr 05:30 | Dhuhr 12:15 | Asr 15:45 | Maghrib 18:20 | Isha 19:45</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-lg">ᕱ</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-foreground">Umveliqangi Winterveldt</h1>
                <p className="text-xs text-muted-foreground">Jum'a Masjid & Academy</p>
              </div>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search mosque, academy, events..." 
                className="pl-10 bg-background/50 border-primary/20 focus:border-primary/40"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-wrap gap-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-foreground hover:text-primary"
                asChild
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
            <Button variant="donate" size="sm" className="ml-4">
              Donate
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary/10 animate-fade-in">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search..." 
                  className="pl-10 bg-background/50 border-primary/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-primary"
                  asChild
                >
                  <a href={item.href}>{item.name}</a>
                </Button>
              ))}
              <Button variant="donate" className="w-full mt-4">
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
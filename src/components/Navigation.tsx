import { useEffect, useState } from "react";
import { Search, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import MegaMenu from "./navigation/MegaMenu";
import MobileNav from "./navigation/MobileNav";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            <span>
              Prayer Times: Fajr 05:30 | Dhuhr 12:15 | Asr 15:45 | Maghrib 18:20 |
              Isha 19:45
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div
          className={
            "flex items-center justify-between transition-[height,padding] duration-200 " +
            (scrolled ? "h-14" : "h-16")
          }
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <div
                className={
                  (scrolled ? "w-9 h-9" : "w-10 h-10") +
                  " bg-gradient-primary rounded-full flex items-center justify-center shadow-glow"
                }
              >
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

          {/* Desktop Mega Menu */}
          <div className="hidden lg:flex items-center gap-3">
            <MegaMenu />
          </div>

          {/* Mobile menu button (slide-out) */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

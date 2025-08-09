import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const subMenus = {
    about: [
      { label: "About", href: "/about" },
      { label: "Facilities", href: "/facilities" },
    ],
    academy: [
      { label: "Academy Overview", href: "/academy" },
      { label: "E-Learning", href: "/e-learning" },
    ],
    community: [
      { label: "Community Projects", href: "/community" },
      { label: "Events", href: "/events" },
    ],
    media: [
      { label: "Media", href: "/media" },
      { label: "Gallery", href: "/gallery" },
    ],
  } as const;
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

          <div className="hidden lg:flex items-center gap-3">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a href="/" className={navigationMenuTriggerStyle()}>Home</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 md:w-[240px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/about" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground">About</a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/facilities" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground">Facilities</a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Academy</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 md:w-[260px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/academy" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground">Academy Overview</a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/e-learning" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground">E-Learning</a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 md:w-[260px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/community" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground">Community Projects</a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/events" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground">Events</a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Media</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 md:w-[240px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/media" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground">Media</a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/gallery" className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground">Gallery</a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a href="/contact" className={navigationMenuTriggerStyle()}>Contact</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="donate" size="sm" className="ml-2" asChild>
              <a href="/donations">Donations</a>
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
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="/">Home</a>
              </Button>

              <div>
                <p className="px-1 text-xs font-medium text-muted-foreground">About</p>
                <div className="mt-1 space-y-1">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="/about">About</a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="/facilities">Facilities</a>
                  </Button>
                </div>
              </div>

              <div>
                <p className="px-1 text-xs font-medium text-muted-foreground">Academy</p>
                <div className="mt-1 space-y-1">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="/academy">Academy Overview</a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="/e-learning">E-Learning</a>
                  </Button>
                </div>
              </div>

              <div>
                <p className="px-1 text-xs font-medium text-muted-foreground">Community</p>
                <div className="mt-1 space-y-1">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="/community">Community Projects</a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="/events">Events</a>
                  </Button>
                </div>
              </div>

              <div>
                <p className="px-1 text-xs font-medium text-muted-foreground">Media</p>
                <div className="mt-1 space-y-1">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="/media">Media</a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="/gallery">Gallery</a>
                  </Button>
                </div>
              </div>

              <Button variant="donate" className="w-full" asChild>
                <a href="/donations">Donations</a>
              </Button>

              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="/contact">Contact</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
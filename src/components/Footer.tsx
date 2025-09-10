import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">{t("footer.newsletter.title")}</h3>
            <p className="text-primary-foreground/80 mb-6">
              {t("footer.newsletter.desc")}
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder={t("footer.newsletter.placeholder")} 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="islamic" className="bg-primary text-primary-foreground">
                <Send className="w-4 h-4 mr-2" />
                {t("footer.newsletter.subscribe")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-xl">ᕱ</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Umveliqangi Winterveldt</h3>
                <p className="text-sm text-primary-foreground/80">Jum'a Masjid & Academy</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Serving the Winterveldt community since 1983 through faith, education, and social development. 
              Building bridges of understanding and empowerment.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://www.facebook.com/p/Umveliqangi-Winterveldt-Juma-Masjid-100068276823921/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.quickLinks.title")}</h4>
            <ul className="space-y-3">
              {[
                "About Us", "Prayer Times", "Academy Programs", "E-Learning Platform", 
                "Community Services", "Events Calendar", "Media Gallery", "Volunteer"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.services.title")}</h4>
            <ul className="space-y-3">
              {[
                "Qur'an Education", "Leadership Training", "Primary Healthcare", "Feeding Programs",
                "Boarding Facilities", "Skills Development", "Community Outreach", "Hajj Services"
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.contact.title")}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-primary-foreground/80">
                    123 Main Street<br />
                    Winterveldt, 0198<br />
                    South Africa
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-primary-foreground/80">+27 12 123 4567</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-primary-foreground/80">info@umveliqangi.org.za</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-primary-foreground/80">
                    <strong>{t("footer.contact.officeHours")}</strong><br />
                    {t("footer.contact.weekdays")}<br />
                    {t("footer.contact.saturday")}<br />
                    {t("footer.contact.sunday")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <p className="text-primary-foreground/80">
                © {currentYear} Umveliqangi Winterveldt Jum'a Masjid & Qur'an Leadership Academy. All rights reserved.
              </p>
              <p className="text-primary-foreground/60 text-xs">
                Powered By: <a href="https://www.kwenamai.co.za" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Kwena Moloto A.I Solutions</a>
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t("footer.bottom.privacy")}
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t("footer.bottom.terms")}
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t("footer.bottom.accessibility")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
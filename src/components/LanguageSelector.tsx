import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Languages } from "lucide-react";
import i18n from "@/i18n";

const LanguageSelector = () => {
  const [value, setValue] = useState(i18n.language);

  useEffect(() => {
    const onChange = (lng: string) => setValue(lng);
    i18n.on("languageChanged", onChange);
    return () => {
      i18n.off("languageChanged", onChange);
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Languages className="w-4 h-4 text-primary-foreground/90" aria-hidden />
      <Select
        value={value}
        onValueChange={(lng) => {
          i18n.changeLanguage(lng);
          setValue(lng);
        }}
      >
        <SelectTrigger className="h-8 w-[110px] bg-background/20 border-primary-foreground/20 text-primary-foreground">
          <SelectValue aria-label="Select language" placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="z-[60]">
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ar">العربية</SelectItem>
          <SelectItem value="zu">IsiZulu</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;

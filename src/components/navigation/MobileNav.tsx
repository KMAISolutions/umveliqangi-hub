import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { menuItems } from "./menuData";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-[88vw] sm:w-[360px]">
        <div className="flex h-full flex-col">
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-semibold">Menu</p>
          </div>
          <div className="flex-1 overflow-y-auto px-2">
            <Accordion type="single" collapsible>
              {menuItems.map((item) => (
                <AccordionItem key={item.label} value={item.label}>
                  <AccordionTrigger className="px-2 text-base text-foreground no-underline">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pb-2">
                      {item.groups?.map((group) => (
                        <div key={group.heading}>
                          {group.heading && (
                            <p className="px-2 mb-1 text-xs font-semibold text-muted-foreground">
                              {group.heading}
                            </p>
                          )}
                          <ul className="space-y-1">
                            {group.links.map(({ label, href, icon: Icon }) => (
                              <li key={label}>
                                <Button variant="ghost" className="w-full justify-start gap-2" asChild>
                                  <Link to={href}>
                                    <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />
                                    {label}
                                  </Link>
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mt-auto p-4 border-t bg-background sticky bottom-0">
            <Button variant="donate" className="w-full" asChild>
              <Link to="/#donate">Donate</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

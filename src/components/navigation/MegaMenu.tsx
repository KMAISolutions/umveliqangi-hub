import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { menuItems } from "./menuData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const triggerClass =
  "px-3 py-2 text-sm font-medium text-foreground hover:underline data-[state=open]:underline focus:outline-none";

export default function MegaMenu() {
  const items = menuItems.filter((i) => i.label !== "Donate");
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-4">
        {items.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.groups ? (
              <NavigationMenuTrigger className={triggerClass}>
                {item.label}
              </NavigationMenuTrigger>
            ) : (
              <NavigationMenuLink asChild>
                <Link to={item.href || "/"} className={triggerClass}>
                  {item.label}
                </Link>
              </NavigationMenuLink>
            )}
            {item.groups && (
              <NavigationMenuContent className="bg-popover text-popover-foreground border shadow-lg">
                <div
                  className={cn(
                    "grid gap-6 p-6 md:w-[720px]",
                    item.groups.length === 1
                      ? "md:grid-cols-2"
                      : item.groups.length === 2
                      ? "md:grid-cols-2"
                      : "md:grid-cols-3"
                  )}
                >
                  {item.groups.map((group) => (
                    <div key={group.heading} className="min-w-0">
                      {group.heading && (
                        <p className="mb-2 text-sm font-semibold text-foreground">
                          {group.heading}
                        </p>
                      )}
                      <ul className="space-y-1">
                        {group.links.map(({ label, href, icon: Icon }) => (
                          <li key={label}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={href}
                                className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-accent/20 focus:bg-accent/20 transition-colors"
                              >
                                <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />
                                <span className="truncate">{label}</span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
        {/* Donate button as distinct */}
        <NavigationMenuItem>
          <Button asChild variant="donate" size="sm" className="ml-2">
            <Link to="/#donate">Donate</Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

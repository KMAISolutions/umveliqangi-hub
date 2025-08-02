import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, X } from "lucide-react";

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

const SearchBar = ({ className = "" }: { className?: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Mock search data - in a real app, this would come from your database/API
  const searchData: SearchResult[] = [
    { title: "Prayer Times", description: "Daily prayer schedule for Winterveldt", url: "/", category: "Religious" },
    { title: "Qur'an Academy", description: "Islamic education and leadership programs", url: "/academy", category: "Education" },
    { title: "Community Services", description: "Healthcare, feeding schemes, and support", url: "/community", category: "Community" },
    { title: "Facilities Tour", description: "Virtual tour of our mosque and facilities", url: "/facilities", category: "Facilities" },
    { title: "Donate", description: "Support our community programs", url: "/donate", category: "Support" },
    { title: "Events Calendar", description: "Upcoming religious and community events", url: "/events", category: "Events" },
    { title: "Boys Boarding House", description: "Hostel accommodation for academy students", url: "/facilities", category: "Facilities" },
    { title: "Healthcare Center", description: "Primary healthcare and Hajj assessments", url: "/facilities", category: "Health" },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const results = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search mosque, academy, events..."
          className="pl-10 pr-10 bg-background/90 border-primary/30 focus:border-primary/60 shadow-sm"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
            onClick={clearSearch}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Search Results */}
      {isSearchOpen && searchResults.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto shadow-elegant">
          <div className="p-2">
            {searchResults.map((result, index) => (
              <a
                key={index}
                href={result.url}
                className="block p-3 hover:bg-accent/50 rounded-md transition-colors border-b border-border/50 last:border-b-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{result.title}</h4>
                    <p className="text-muted-foreground text-xs mt-1">{result.description}</p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {result.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Card>
      )}

      {/* No Results */}
      {isSearchOpen && searchQuery.length > 2 && searchResults.length === 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-elegant">
          <div className="p-4 text-center text-muted-foreground">
            <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>No results found for "{searchQuery}"</p>
            <p className="text-xs mt-1">Try searching for prayer times, academy, events, or facilities</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;
import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, MapPin, Clock, Users, ExternalLink } from "lucide-react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedCategory, setSelectedCategory] = useState("all");

  const eventCategories = [
    { id: "all", name: "All Events", color: "bg-primary" },
    { id: "religious", name: "Religious Events", color: "bg-emerald-500" },
    { id: "community", name: "Community Events", color: "bg-blue-500" },
    { id: "education", name: "Education & Youth", color: "bg-amber-500" },
    { id: "workshops", name: "Workshops & Training", color: "bg-purple-500" }
  ];

  const mockEvents = [
    {
      id: 1,
      title: "Jum'a Prayer & Khutbah",
      date: "2024-02-09",
      time: "12:15 PM",
      category: "religious",
      location: "Main Prayer Hall",
      description: "Weekly Friday congregational prayer with spiritual discourse",
      organizer: "Imam Abdullah",
      recurring: "Every Friday"
    },
    {
      id: 2,
      title: "Youth Leadership Camp",
      date: "2024-02-15",
      time: "9:00 AM",
      category: "education",
      location: "Academy Grounds",
      description: "3-day intensive leadership development program for youth aged 15-25",
      organizer: "Youth Development Team",
      spaces: "Limited to 50 participants"
    },
    {
      id: 3,
      title: "Community Feeding Scheme",
      date: "2024-02-10",
      time: "11:00 AM",
      category: "community",
      location: "Community Hall",
      description: "Weekly community meal distribution for families in need",
      organizer: "Community Services",
      recurring: "Every Saturday"
    },
    {
      id: 4,
      title: "Entrepreneurship Workshop",
      date: "2024-02-12",
      time: "2:00 PM",
      category: "workshops",
      location: "Skills Training Center",
      description: "Small business development and financial literacy training",
      organizer: "Skills Hub Team",
      spaces: "25 seats available"
    }
  ];

  const filteredEvents = selectedCategory === "all" 
    ? mockEvents 
    : mockEvents.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const cat = eventCategories.find(c => c.id === category);
    return cat ? cat.color : "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Community Calendar
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our vibrant community through upcoming religious services, 
            educational programs, and community initiatives.
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {eventCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar Component */}
            <div className="lg:col-span-1">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5" />
                    Select Date
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Events List */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="shadow-elegant hover:shadow-mosque transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge className={`${getCategoryColor(event.category)} text-white`}>
                              {eventCategories.find(c => c.id === event.category)?.name}
                            </Badge>
                            {event.recurring && (
                              <Badge variant="outline">Recurring</Badge>
                            )}
                            {event.spaces && (
                              <Badge variant="secondary">{event.spaces}</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4 text-muted-foreground" />
                          <span>{new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span>{event.organizer}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Button variant="islamic" size="sm">
                          Add to Calendar
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        {event.spaces && (
                          <Button variant="donate" size="sm">
                            RSVP / Register
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Calendar;
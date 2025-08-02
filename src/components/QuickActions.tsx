import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Phone, 
  MapPin, 
  Heart, 
  Calendar, 
  Clock, 
  MessageSquare,
  BookOpen,
  Video,
  ChevronUp,
  ChevronDown
} from "lucide-react";

const QuickActions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const quickActions = [
    {
      icon: Clock,
      label: "Prayer Times",
      action: () => console.log("Show prayer times"),
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Heart,
      label: "Donate",
      action: () => console.log("Open donation page"),
      color: "bg-red-500 hover:bg-red-600"
    },
    {
      icon: Calendar,
      label: "Events", 
      action: () => console.log("Open events"),
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Phone,
      label: "Call",
      action: () => window.open("tel:+27121234567"),
      color: "bg-orange-500 hover:bg-orange-600"
    },
    {
      icon: MapPin,
      label: "Directions",
      action: () => window.open("https://maps.google.com"),
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      icon: Video,
      label: "Live Stream",
      action: () => console.log("Open live stream"),
      color: "bg-indigo-500 hover:bg-indigo-600"
    },
    {
      icon: BookOpen,
      label: "E-Learning",
      action: () => console.log("Open e-learning"),
      color: "bg-teal-500 hover:bg-teal-600"
    },
    {
      icon: MessageSquare,
      label: "Forum",
      action: () => console.log("Open community forum"),
      color: "bg-pink-500 hover:bg-pink-600"
    }
  ];

  const visibleActions = isExpanded ? quickActions : quickActions.slice(0, 4);

  return (
    <div className="fixed bottom-4 right-4 z-50 lg:hidden">
      <Card className="p-2 shadow-elegant bg-background/95 backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-2">
          {visibleActions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={action.action}
              className={`flex flex-col items-center gap-1 h-16 w-16 p-2 text-white ${action.color} hover:scale-105 transition-all duration-200`}
            >
              <action.icon className="w-4 h-4" />
              <span className="text-xs leading-tight text-center">{action.label}</span>
            </Button>
          ))}
        </div>
        
        {quickActions.length > 4 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-2 h-8 text-muted-foreground hover:text-foreground"
          >
            {isExpanded ? (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Less
              </>
            ) : (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                More
              </>
            )}
          </Button>
        )}
      </Card>
    </div>
  );
};

export default QuickActions;
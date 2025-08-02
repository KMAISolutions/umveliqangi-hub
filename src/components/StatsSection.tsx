import { Card } from "@/components/ui/card";
import { Users, Utensils, Building, Calendar } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Students Taught",
      description: "Qur'an and leadership education"
    },
    {
      icon: Utensils,
      number: "15,000+",
      label: "Meals Served",
      description: "Community feeding programs"
    },
    {
      icon: Building,
      number: "50+",
      label: "Projects Completed",
      description: "Community development initiatives"
    },
    {
      icon: Calendar,
      number: "40",
      label: "Years of Service",
      description: "Serving Winterveldt since 1983"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four decades of dedicated service to the Winterveldt community through faith, education, and social development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center bg-card/80 backdrop-blur border-primary/10 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-mosque transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-islamic-gold transition-colors">
                {stat.number}
              </h3>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </h4>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Calendar from "@/components/Calendar";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Calendar />
      <Footer />
    </div>
  );
};

export default Events;
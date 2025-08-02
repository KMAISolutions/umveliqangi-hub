import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

interface PrayerTimes {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  date: string;
}

const PrayerTimesWidget = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes>({
    fajr: "05:30",
    dhuhr: "12:15", 
    asr: "15:45",
    maghrib: "18:20",
    isha: "19:45",
    date: new Date().toLocaleDateString()
  });

  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextPrayer, setNextPrayer] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const now = new Date();
    const currentTimeString = now.toTimeString().slice(0, 5);
    
    const prayers = [
      { name: "Fajr", time: prayerTimes.fajr },
      { name: "Dhuhr", time: prayerTimes.dhuhr },
      { name: "Asr", time: prayerTimes.asr },
      { name: "Maghrib", time: prayerTimes.maghrib },
      { name: "Isha", time: prayerTimes.isha },
    ];

    for (const prayer of prayers) {
      if (currentTimeString < prayer.time) {
        setNextPrayer(prayer.name);
        break;
      }
    }
  }, [currentTime, prayerTimes]);

  return (
    <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Clock className="w-5 h-5" />
          Prayer Times
        </CardTitle>
        <div className="flex items-center gap-1 text-sm opacity-90">
          <MapPin className="w-3 h-3" />
          <span>Winterveldt, South Africa</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-center text-sm opacity-90 mb-3">
          {currentTime.toLocaleTimeString()} • {prayerTimes.date}
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className={`flex justify-between p-2 rounded ${nextPrayer === "Fajr" ? "bg-white/20" : ""}`}>
            <span>Fajr</span>
            <span className="font-mono">{prayerTimes.fajr}</span>
          </div>
          <div className={`flex justify-between p-2 rounded ${nextPrayer === "Dhuhr" ? "bg-white/20" : ""}`}>
            <span>Dhuhr</span>
            <span className="font-mono">{prayerTimes.dhuhr}</span>
          </div>
          <div className={`flex justify-between p-2 rounded ${nextPrayer === "Asr" ? "bg-white/20" : ""}`}>
            <span>Asr</span>
            <span className="font-mono">{prayerTimes.asr}</span>
          </div>
          <div className={`flex justify-between p-2 rounded ${nextPrayer === "Maghrib" ? "bg-white/20" : ""}`}>
            <span>Maghrib</span>
            <span className="font-mono">{prayerTimes.maghrib}</span>
          </div>
          <div className={`flex justify-between p-2 rounded ${nextPrayer === "Isha" ? "bg-white/20" : ""}`}>
            <span>Isha</span>
            <span className="font-mono">{prayerTimes.isha}</span>
          </div>
        </div>
        
        {nextPrayer && (
          <div className="text-center text-sm bg-white/10 rounded p-2 mt-3">
            Next Prayer: <span className="font-semibold">{nextPrayer}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PrayerTimesWidget;
import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber = ({ end, duration = 2000, prefix = "", suffix = "" }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const startTime = Date.now();
    const startCount = 0;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startCount + (end - startCount) * easeOutCubic);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    updateCount();
  };

  // Extract number and convert to display format
  const formatNumber = (num: number) => {
    if (suffix === "+") {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default AnimatedNumber;
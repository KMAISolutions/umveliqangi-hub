import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

interface AnimatedHeadlineProps {
  intervalMs?: number;
}

const AnimatedHeadline = ({ intervalMs = 2500 }: AnimatedHeadlineProps) => {
  const { t } = useTranslation();
  const base = t("hero.empowering");
  const words = t("hero.words", { returnObjects: true }) as string[];
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  const current = useMemo(() => words[index % words.length], [index, words]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
      setKey((k) => k + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, words.length]);

  return (
    <h2
      className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 leading-tight text-primary-foreground"
      aria-live="polite"
    >
      <span className="font-bold">{base}</span>{" "}
      <span className="inline-block align-baseline relative">
        <span
          key={key}
          className="text-primary inline-block animate-fade-in"
          style={{ animationDuration: "700ms" }}
        >
          {current}
        </span>
      </span>
    </h2>
  );
};

export default AnimatedHeadline;

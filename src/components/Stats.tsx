
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 5, label: "Years Experience", suffix: "+" },
  { number: 55, label: "Projects Completed", suffix: "+" },
  { number: 100, label: "Happy Clients", suffix: "+" },
  { number: 25, label: "Employees", suffix: "+" },
];

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000; // Animation duration in milliseconds
        const steps = 60; // Number of steps in the animation
        const increment = stat.number / steps;
        let current = 0;
        let step = 0;

        const interval = setInterval(() => {
          if (step < steps) {
            current += increment;
            setCounts((prev) =>
              prev.map((count, i) =>
                i === index ? Math.min(Math.round(current), stat.number) : count
              )
            );
            step++;
          } else {
            clearInterval(interval);
          }
        }, duration / steps);

        return () => clearInterval(interval);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

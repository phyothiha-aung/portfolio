"use client";
import { useEffect, useState } from "react";

const Sparkle = () => {
  const [stars, setStars] = useState<
    Array<{
      id: number;
      left: string;
      top: string;
      delay: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    const createStar = () => ({
      id: Date.now(),
      left: Math.random() * 85 + 5 + "%",
      top: Math.random() * 70 + 15 + "%",
      delay: 0,
      duration: 700,
    });

    setStars([createStar()]);

    const interval = setInterval(() => {
      setStars((prev) => {
        const filtered = prev.filter((star) => Date.now() - star.id < 2500);
        if (filtered.length < 4) {
          return [...filtered, createStar()];
        }
        return filtered;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <span
          key={star.id}
          className="sparkle"
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            animationDelay: `${star.delay}ms`,
            animationDuration: `${star.duration}ms`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
          </svg>
        </span>
      ))}
    </>
  );
};

export default Sparkle;

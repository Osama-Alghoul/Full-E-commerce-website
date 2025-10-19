import React, { useState, useEffect } from "react";

interface TimerProps {
  targetDate: string; // ISO date string e.g., "2025-12-25T00:00:00"
  theme?: "light" | "dark";
}

const Timer: React.FC<TimerProps> = ({ targetDate, theme = "light" }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [targetDate]);

  function calculateTimeLeft() {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div
      className={`flex items-center justify-center ${
        theme === "dark" ? "text-black" : "text-white"
      }`}
    >
      <div className="flex flex-col items-center mr-4">
        <div className="text-sm font-medium text-gray-700">Days</div>
        <div className="md:text-4xl text-3xl font-bold">
          {String(timeLeft.days).padStart(2, "0")}
        </div>
      </div>
      <span className="text-red-400 text-2xl">:</span>
      <div className="flex flex-col items-center mx-4">
        <div className="text-sm font-medium text-gray-700">Hours</div>
        <div className="md:text-4xl text-3xl font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
      </div>
      <span className="text-red-400 text-2xl">:</span>
      <div className="flex flex-col items-center mx-4">
        <div className="text-sm font-medium text-gray-700">Minutes</div>
        <div className="md:text-4xl text-3xl font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
      </div>
      <span className="text-red-400 text-2xl">:</span>
      <div className="flex flex-col items-center ml-4">
        <div className="text-sm font-medium text-gray-700">Seconds</div>
        <div className="md:text-4xl text-3xl font-bold">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};

export default Timer;

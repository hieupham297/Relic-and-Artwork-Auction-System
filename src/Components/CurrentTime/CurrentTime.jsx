import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import "./CurrentTime.css";

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const vietnameseDay = format(currentTime, "EEEE", { locale: vi });
  return (
    <>
      <div className="current-time-main">
        <div id="time">{currentTime.toLocaleTimeString()}</div>
        <div id="date">
          <span>{vietnameseDay}</span>
          <span>, </span>
          <span>{currentTime.toLocaleDateString()}</span>
        </div>
      </div>
    </>
  );
};

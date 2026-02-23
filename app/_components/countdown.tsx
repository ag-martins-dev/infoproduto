"use client";

import { useEffect, useState } from "react";

import { TWENTY_HOURS_AHEAD } from "@/app/_constants/twenty-hours-ahead";

import { CountdownUnit } from "./countdown-unit";

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const [time, setTime] = useState<Time>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = TWENTY_HOURS_AHEAD;
    let intervalId: ReturnType<typeof setInterval>;

    const updateTimer = () => {
      const hoursDifference = deadline - Date.now();

      if (hoursDifference <= 0) {
        setTime({
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const totalSeconds = Math.max(0, Math.floor(hoursDifference / 1000));

      setTime({
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      });

      const delay = 100 - (Date.now() % 1000);
      intervalId = setInterval(updateTimer, delay);
    };

    updateTimer();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex w-full items-center justify-center gap-5 md:w-3/4">
      <CountdownUnit unit={time.hours} label="Horas" />
      <CountdownUnit unit={time.minutes} label="Minutos" />
      <CountdownUnit unit={time.seconds} label="Segundos" />
    </div>
  );
}

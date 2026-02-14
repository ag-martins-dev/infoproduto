"use client";

import { useEffect, useState } from "react";

import { TWENTY_HOURS_AHEAD } from "@/app/_constants/twenty-hours-ahead";

import { TimeUnit } from "../TimeUnit";

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

const DiscountTimer = () => {
  const [time, setTime] = useState<Time>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const deadline = TWENTY_HOURS_AHEAD;
    let intervalId: ReturnType<typeof setInterval>;

    const updateTimer = () => {
      const hoursDifference = deadline - Date.now();

      if (hoursDifference <= 0) {
        setTime({ hours: 0, minutes: 0, seconds: 0 });
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
    <div className="flex w-full flex-col items-center justify-center gap-5 rounded-2xl bg-rose-500 p-8 shadow-lg ring-2 shadow-rose-500/40 ring-rose-300/50 md:w-3/5 lg:w-2/6">
      <strong className="text-center text-xl/tight font-bold md:text-2xl/tight">
        ⏰ Oferta especial expira em:
      </strong>

      <div className="mx-auto grid w-11/12 grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-5">
          <TimeUnit time={time.hours} />
          <span className="text-xs/relaxed font-medium text-zinc-500 uppercase">
            Horas
          </span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-5">
          <TimeUnit time={time.minutes} />
          <span className="text-xs/relaxed font-medium text-zinc-500 uppercase">
            Min
          </span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-5">
          <TimeUnit time={time.seconds} />
          <span className="text-xs/relaxed font-medium text-zinc-500 uppercase">
            Seg
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiscountTimer;

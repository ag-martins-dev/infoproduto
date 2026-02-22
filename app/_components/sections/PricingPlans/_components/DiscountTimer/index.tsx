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
    <div className="z-1 flex w-full flex-col items-center justify-center gap-5 rounded-3xl bg-linear-to-br from-rose-400 to-rose-800 p-10 shadow-xl ring ring-rose-300 select-none md:w-3/5 lg:w-2/6">
      <strong className="text-center text-xl/tight font-bold text-white md:text-2xl/tight">
        ⏰ Oferta especial expira em:
      </strong>

      <div className="flex w-full items-center justify-center gap-3 md:w-3/4">
        <div className="flex w-full flex-1 flex-col items-center gap-2 select-none">
          <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-rose-400/25 p-5 shadow-md ring ring-rose-300/80 backdrop-blur">
            <TimeUnit time={time.hours} />
          </div>
          <span className="text-sm/relaxed font-medium text-zinc-200 uppercase">
            Horas
          </span>
        </div>

        <div className="flex w-full flex-1 flex-col items-center gap-2 select-none">
          <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-rose-400/25 p-5 shadow-md ring ring-rose-300/80 backdrop-blur">
            <TimeUnit time={time.minutes} />
          </div>
          <span className="text-sm/relaxed font-medium text-zinc-200 uppercase">
            Min
          </span>
        </div>

        <div className="flex w-full flex-1 flex-col items-center gap-2 select-none">
          <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-rose-400/25 p-5 shadow-md ring ring-rose-300/80 backdrop-blur">
            <TimeUnit time={time.seconds} />
          </div>
          <span className="text-sm/relaxed font-medium text-zinc-200 uppercase">
            Seg
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiscountTimer;

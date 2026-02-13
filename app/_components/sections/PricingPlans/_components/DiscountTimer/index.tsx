"use client";

import { useEffect, useState } from "react";

import { TWENTY_HOURS_AHEAD } from "@/app/_constants/twenty-hours-ahead";
import { padNumber } from "@/app/_utils/pad-number";

export const DiscountTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const deadline = TWENTY_HOURS_AHEAD;

    const updateTimer = () => {
      const hoursDifference = deadline - Date.now();

      if (hoursDifference <= 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      const totalSeconds = Math.max(0, Math.floor(hoursDifference / 1000));

      setHours(Math.floor(totalSeconds / 3600));
      setMinutes(Math.floor((totalSeconds % 3600) / 60));
      setSeconds(totalSeconds % 60);
    };

    updateTimer();

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 rounded-2xl bg-rose-500 p-8 shadow-lg ring-2 shadow-rose-500/40 ring-rose-300/50 md:w-3/5 lg:w-2/6">
      <strong className="text-center text-xl/tight font-bold md:text-2xl/tight">
        ⏰ Oferta especial expira em:
      </strong>

      <div className="mx-auto grid w-11/12 grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-5">
          <span className="text-4xl font-bold text-zinc-900">
            {padNumber(hours)}
          </span>
          <span className="text-xs/relaxed font-medium text-zinc-500 uppercase">
            Horas
          </span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-5">
          <span className="text-4xl font-bold text-zinc-900">
            {padNumber(minutes)}
          </span>
          <span className="text-xs/relaxed font-medium text-zinc-500 uppercase">
            Min
          </span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-5">
          <span className="text-4xl font-bold text-zinc-900">
            {padNumber(seconds)}
          </span>
          <span className="text-xs/relaxed font-medium text-zinc-500 uppercase">
            Seg
          </span>
        </div>
      </div>
    </div>
  );
};

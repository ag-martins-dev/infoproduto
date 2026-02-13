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
      const diff = deadline - Date.now();

      if (diff <= 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      const totalSeconds = Math.max(0, Math.floor(diff / 1000));

      setHours(Math.floor(totalSeconds / 3600));
      setMinutes(Math.floor((totalSeconds % 3600) / 60));
      setSeconds(totalSeconds % 60);
    };

    updateTimer();

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl bg-rose-500 p-6 shadow-lg shadow-rose-500/40 md:w-3/5 lg:w-2/6">
      <strong className="text-center text-xl font-black md:text-2xl">
        ⏰ Oferta especial expira em:
      </strong>

      <div className="mx-auto grid w-11/12 grid-cols-3 gap-3">
        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-2">
          <span className="text-4xl font-black text-slate-900">
            {padNumber(hours)}
          </span>
          <span className="text-xs font-semibold text-slate-500 uppercase">
            Horas
          </span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-2">
          <span className="text-4xl font-black text-slate-900">
            {padNumber(minutes)}
          </span>
          <span className="text-xs font-semibold text-slate-500 uppercase">
            Min
          </span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-2">
          <span className="text-4xl font-black text-slate-900">
            {padNumber(seconds)}
          </span>
          <span className="text-xs font-semibold text-slate-500 uppercase">
            Seg
          </span>
        </div>
      </div>
    </div>
  );
};

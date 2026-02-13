"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";

import { CTA_ID } from "@/app/_constants/cta-buy-now-id";
import { TWENTY_HOURS_AHEAD } from "@/app/_constants/twenty-hours-ahead";
import { numberToBrl } from "@/app/_utils/number-to-brl";

import { Button } from "../common/Button";

export const PricingPlansSection = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const padNumber = (number: number) => {
    return String(number).padStart(2, "0");
  };

  useEffect(() => {
    const deadline = TWENTY_HOURS_AHEAD;

    const updatePlansTimer = () => {
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

    updatePlansTimer();

    const interval = setInterval(updatePlansTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-slate-100 px-5 py-20">
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

      <h3 className="text-center text-2xl font-black text-slate-900 md:text-4xl">
        Guia de shapes femininos
      </h3>

      <div className="flex w-full flex-col items-center justify-center gap-8 rounded-3xl border border-slate-300 bg-white p-5 shadow-xl shadow-slate-300/40 md:w-2/3 lg:w-2/6">
        <h4 className="text-center text-2xl font-black text-slate-900 md:text-3xl">
          Acesso completo
        </h4>

        <div>
          <div className="flex flex-col items-center justify-center gap-1">
            <s className="text-slate-500">{numberToBrl(47)}</s>
            <b className="text-6xl font-black text-green-500 md:text-7xl">
              {numberToBrl(10)}
            </b>
            <p className="text-sm text-slate-500 md:text-base">
              pagamento único.
            </p>
            <b className="text-sm text-green-500 md:text-base">
              Você economiza {numberToBrl(37)}!
            </b>
          </div>
        </div>

        <ul className="space-y-5">
          <li className="flex items-center gap-2 text-slate-500 md:text-lg">
            <Check className="size-4 text-green-500" /> 4 fichas de treino por
            shape (A/B/C)
          </li>
          <li className="flex items-center gap-2 text-slate-500 md:text-lg">
            <Check className="size-4 text-green-500" /> Exercícios com séries e
            repetições
          </li>
          <li className="flex items-center gap-2 text-slate-500 md:text-lg">
            <Check className="size-4 text-green-500" /> Foco no shape sem
            negligenciar o resto
          </li>
          <li className="flex items-center gap-2 text-slate-500 md:text-lg">
            <Check className="size-4 text-green-500" /> PDF leve (abre no
            celular)
          </li>
          <li className="flex items-center gap-2 text-slate-500 md:text-lg">
            <Check className="size-4 text-green-500" /> Acesso imediato
          </li>
          <li className="flex items-center gap-2 text-slate-500 md:text-lg">
            <Check className="size-4 text-green-500" /> Garantia de 7 dias
          </li>
        </ul>

        <Button id={CTA_ID} className="w-full">
          Comprar agora
        </Button>
      </div>

      <p className="text-center text-xs text-slate-500 md:text-base lg:text-sm">
        Material educativo. Não substitui acompanhamento profissional.
      </p>
    </section>
  );
};

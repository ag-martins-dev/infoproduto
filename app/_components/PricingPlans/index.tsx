"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";

import { TWENTY_HOURS_AHEAD } from "@/app/_constants/twenty-hours-ahead";

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

      const totalSeconds = Math.floor(diff / 1000);

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
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl bg-rose-500 p-6 shadow-lg shadow-rose-500/40">
        <strong className="text-center text-xl font-black">
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

      <h3 className="text-center text-2xl font-black text-slate-900">
        Guia de shapes femininos
      </h3>

      <div className="flex w-full flex-col items-center justify-center gap-8 rounded-3xl border border-slate-300 bg-white p-5 shadow-xl shadow-slate-300/40">
        <h4 className="text-center text-2xl font-black text-slate-900">
          Acesso completo
        </h4>

        <div>
          <div className="flex flex-col items-center justify-center gap-1">
            <s className="text-slate-500">R$47,00</s>
            <b className="text-6xl font-black text-green-500">R$10,00</b>
            <p className="text-sm text-slate-500">pagamento único.</p>
            <b className="text-sm text-green-500">
              Você economiza{" "}
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(47 - 10)}
            </b>
          </div>
        </div>

        <ul className="space-y-5">
          <li className="flex items-center gap-2 text-slate-500">
            <Check className="size-4 text-green-500" /> 4 fichas de treino por
            shape (A/B/C)
          </li>
          <li className="flex items-center gap-2 text-slate-500">
            <Check className="size-4 text-green-500" /> Exercícios com séries e
            repetições
          </li>
          <li className="flex items-center gap-2 text-slate-500">
            <Check className="size-4 text-green-500" /> Foco no shape sem
            negligenciar o resto
          </li>
          <li className="flex items-center gap-2 text-slate-500">
            <Check className="size-4 text-green-500" /> PDF leve (abre no
            celular)
          </li>
          <li className="flex items-center gap-2 text-slate-500">
            <Check className="size-4 text-green-500" /> Acesso imediato
          </li>
          <li className="flex items-center gap-2 text-slate-500">
            <Check className="size-4 text-green-500" /> Garantia de 7 dias
          </li>
        </ul>

        <button
          id="cta"
          className="w-full cursor-pointer rounded-2xl bg-green-500 px-6 py-3 text-lg font-bold uppercase shadow-lg shadow-green-500/45 transition-all hover:scale-102 hover:brightness-105"
        >
          Comprar agora
        </button>
      </div>
    </section>
  );
};

import { faqs } from "@/app/_constants/faq";

import { Accordion } from "./_components/Accordion";

export const FAQSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 bg-linear-to-b from-white to-zinc-100 px-5 pt-20 pb-10">
      <h3 className="text-center text-4xl/tight font-bold text-zinc-900">
        Perguntas <span className="font-black text-rose-500">frequentes</span>
      </h3>

      <div className="flex w-full flex-col items-center justify-center gap-3">
        {faqs.map((faq, index) => {
          const isFirstQuestion = index === 0;
          return (
            <Accordion key={index} defaultOpened={isFirstQuestion} faq={faq} />
          );
        })}
      </div>
    </section>
  );
};

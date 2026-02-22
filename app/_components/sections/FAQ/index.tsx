import { faqs } from "@/app/_constants/faq";

import { Accordion } from "./_components/Accordion";

export const FAQSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 bg-linear-to-b from-white to-zinc-100 px-5 pb-10">
      <h3 className="text-center text-3xl/tight font-bold text-zinc-900">
        Perguntas frequentes
      </h3>

      <div className="flex w-full flex-col items-center justify-center gap-3">
        {faqs.map((faq, index) => {
          const isFirstQuestion = index === 0;
          return (
            <Accordion key={index} defaultOpened={isFirstQuestion} faq={faq} />
          );
        })}
      </div>

      <p className="text-center text-xs/relaxed text-zinc-500 md:text-base/relaxed lg:text-sm/relaxed">
        Material educativo. Não substitui acompanhamento profissional.
      </p>
    </section>
  );
};

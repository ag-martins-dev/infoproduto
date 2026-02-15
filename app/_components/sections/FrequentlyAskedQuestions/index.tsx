import { faqs } from "@/app/_constants/faq";

import { Accordion } from "./_components/Accordion";

export const FrequentlyAskedQuestionsSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 bg-zinc-100 px-5 pb-20">
      <h3 className="text-center text-3xl/relaxed font-bold text-zinc-900 md:text-4xl/relaxed">
        Perguntas frequentes
      </h3>

      <div className="flex w-full flex-col items-center justify-center gap-3">
        {faqs.map((faq, index) => {
          const isFirstQuestion = index === 0;
          return <Accordion key={index} opened={isFirstQuestion} faq={faq} />;
        })}
      </div>
    </section>
  );
};

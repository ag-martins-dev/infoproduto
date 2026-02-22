import { testimonials } from "@/app/_constants/testimonials";

import { TestimonalCard } from "./_components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="relative z-1 flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-zinc-100 px-5 py-20 before:absolute before:top-40 before:left-10 before:z-0 before:block before:size-120 before:bg-rose-500/20 before:blur-[80px] before:content-[''] after:absolute after:right-10 after:bottom-40 after:z-0 after:block after:size-120 after:bg-emerald-500/20 after:blur-[80px] after:content-['']">
      <div className="z-1 flex w-full flex-col items-center justify-center gap-2">
        <h2 className="text-center text-3xl/tight font-bold text-zinc-900">
          O que dizem quem já{" "}
          <span className="font-black text-rose-500">começou</span>
        </h2>
        <p className="text-center text-sm/relaxed font-medium text-zinc-500">
          Mulheres que pararam de trocar treino e começaram a evoluir de
          verdade.
        </p>
      </div>

      <div className="z-1 flex w-full flex-col gap-4 md:w-3/4 md:flex-row">
        {testimonials.map((testimonial, index) => (
          <TestimonalCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

import { testimonials } from "@/app/_constants/testimonials";

import { TestimonalCard } from "./_components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 bg-zinc-100 px-5 pt-20">
      <h2 className="text-center text-3xl/tight font-bold text-zinc-900">
        Depoimentos
      </h2>

      <div className="flex w-full flex-col gap-4 md:w-3/4 md:flex-row">
        {testimonials.map((testimonial, index) => (
          <TestimonalCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

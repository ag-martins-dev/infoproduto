import { StarIcon } from "lucide-react";

import { Testimonial } from "@/app/_constants/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export const TestimonalCard = ({ testimonial }: TestimonialCardProps) => {
  const authorFirstLetterAvatar = testimonial.author.split("")[0];

  return (
    <article className="flex h-64 w-full cursor-pointer flex-col justify-between gap-2 rounded-2xl bg-white p-5 shadow-md ring shadow-zinc-900/40 ring-zinc-300 transition-all hover:scale-102">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-zinc-300 text-lg font-bold text-white">
          {authorFirstLetterAvatar}
        </div>
        <p className="text-lg/tight font-semibold text-zinc-900">
          {testimonial.author}
        </p>
      </div>

      <q className="text-base/relaxed text-zinc-900/60">
        {testimonial.message}
      </q>

      <div className="flex items-center gap-1">
        <StarIcon className="size-5 fill-yellow-500 text-yellow-500" />
        <StarIcon className="size-5 fill-yellow-500 text-yellow-500" />
        <StarIcon className="size-5 fill-yellow-500 text-yellow-500" />
        <StarIcon className="size-5 fill-yellow-500 text-yellow-500" />
        <StarIcon className="size-5 fill-yellow-500 text-yellow-500" />
      </div>
    </article>
  );
};

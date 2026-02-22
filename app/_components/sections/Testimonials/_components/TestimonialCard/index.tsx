import { StarIcon } from "lucide-react";

import { Testimonial } from "@/app/_constants/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export const TestimonalCard = ({ testimonial }: TestimonialCardProps) => {
  const authorFirstLetterAvatar = testimonial.author.split("")[0];

  return (
    <article className="flex h-64 w-full flex-col justify-between divide-y divide-zinc-200 rounded-3xl bg-white p-5 ring ring-zinc-200 transition-all ease-in-out select-none hover:scale-105 hover:shadow-xl hover:ring-rose-500">
      <div className="flex items-center justify-between gap-3 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-zinc-500 text-lg font-bold text-white">
            {authorFirstLetterAvatar}
          </div>

          <div className="flex flex-col">
            <b className="text-lg/tight font-semibold text-zinc-900">
              {testimonial.author}
            </b>
            <span className="text-sm/relaxed text-zinc-400">
              {testimonial.authorRole}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <StarIcon className="size-3.5 fill-yellow-500 text-yellow-500" />
          <StarIcon className="size-3.5 fill-yellow-500 text-yellow-500" />
          <StarIcon className="size-3.5 fill-yellow-500 text-yellow-500" />
          <StarIcon className="size-3.5 fill-yellow-500 text-yellow-500" />
          <StarIcon className="size-3.5 fill-yellow-500 text-yellow-500" />
        </div>
      </div>

      <q className="text-base/relaxed text-zinc-500">{testimonial.message}</q>
    </article>
  );
};

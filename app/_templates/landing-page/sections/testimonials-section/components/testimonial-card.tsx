import { StarsRating } from "./stars-rating";

type TestimonialCardProps = {
  author: string;
  about: string;
  message: string;
};

export function TestimonialCard({
  author,
  about,
  message,
}: TestimonialCardProps) {
  const testimonialProfile = author.split("")[0];

  return (
    <article className="flex h-64 w-full flex-col justify-between divide-y divide-zinc-200 rounded-3xl bg-white p-5 ring ring-zinc-200 transition-all ease-in-out select-none hover:scale-105 hover:shadow-xl hover:ring-rose-500 md:last-of-type:col-span-2 lg:last-of-type:col-span-1">
      <div className="flex items-center justify-between gap-3 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-zinc-500 text-lg font-bold text-white">
            {testimonialProfile}
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-lg/tight font-semibold text-zinc-900">
              {author}
            </span>

            <span className="text-sm/relaxed font-medium text-zinc-400">
              {about}
            </span>
          </div>
        </div>

        <StarsRating />
      </div>

      <q className="text-base/relaxed text-zinc-500">{message}</q>
    </article>
  );
}

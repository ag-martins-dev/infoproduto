import { benefits } from "@/app/_constants/benefits";

export const Benefits = () => {
  return (
    <div className="z-1 grid grid-cols-1 gap-6 select-none md:grid-cols-2">
      {benefits.map(({ id, title, subtitle, icon: Icon }) => (
        <div
          key={id}
          className="group flex flex-col gap-6 rounded-3xl bg-zinc-900/65 p-8 ring ring-zinc-700 backdrop-blur-md transition-all ease-in-out hover:-translate-y-2 hover:shadow-xl hover:ring-rose-500/80"
        >
          <div className="size-fit rounded-xl bg-rose-500/5 p-4 ring ring-rose-900/60 transition-all ease-in-out group-hover:bg-rose-500/10 group-hover:ring-rose-900/80">
            <Icon className="size-6 text-rose-500" />
          </div>

          <div className="flex w-full flex-col items-start justify-center gap-2">
            <b className="text-left text-lg/tight text-white md:text-lg/tight">
              {title}
            </b>
            <span className="text-left text-xs/relaxed text-zinc-500 md:text-sm/relaxed">
              {subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

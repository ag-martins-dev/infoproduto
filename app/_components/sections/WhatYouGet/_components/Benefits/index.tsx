import { benefits } from "@/app/_constants/benefits";

export const Benefits = () => {
  return (
    <div className="space-y-14 md:grid md:grid-cols-2 md:gap-14 md:space-y-0">
      {benefits.map(({ id, title, subtitle, icon: Icon }) => (
        <div
          key={id}
          className="flex w-full flex-col items-center justify-center gap-4"
        >
          <Icon className="size-12 text-rose-500" />

          <div className="flex w-full flex-col items-center justify-center gap-0.5">
            <b className="text-center text-lg">{title}</b>
            <p className="text-center">{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

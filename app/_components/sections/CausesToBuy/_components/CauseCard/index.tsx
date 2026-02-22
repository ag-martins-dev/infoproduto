import { Cause } from "@/app/_constants/causes-to-buy";

type CauseCardProps = {
  cause: Cause;
};

export const CauseCard = ({ cause: { icon: Icon, text } }: CauseCardProps) => {
  return (
    <li className="group flex w-full items-center gap-4 justify-self-center rounded-2xl bg-white p-5 shadow-md ring ring-zinc-200 transition-all select-none hover:scale-103 hover:shadow-lg hover:ring hover:ring-rose-500">
      <div className="rounded-xl bg-rose-500/10 p-2 group-hover:bg-rose-500 md:rounded-lg">
        <Icon className="size-6 text-rose-500 group-hover:text-white md:size-5" />
      </div>
      <p className="text-sm/relaxed font-medium text-zinc-500">{text}</p>
    </li>
  );
};

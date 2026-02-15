import { CheckIcon } from "lucide-react";

type CauseCardProps = {
  cause: string;
};

export const CauseCard = ({ cause }: CauseCardProps) => {
  return (
    <li className="flex w-full cursor-pointer items-center gap-3 rounded-2xl bg-white p-4 shadow ring shadow-zinc-300 ring-zinc-300 transition-all hover:scale-102">
      <CheckIcon className="size-7 text-emerald-500" />
      <p className="text-sm/relaxed font-medium text-zinc-900/60 lg:text-base/relaxed">
        {cause}
      </p>
    </li>
  );
};

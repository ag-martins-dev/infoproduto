import { CheckIcon } from "lucide-react";

type CauseCardProps = {
  cause: string;
};

export const CauseCard = ({ cause }: CauseCardProps) => {
  return (
    <li className="flex w-full cursor-pointer items-center gap-3 rounded-2xl bg-white p-5 ring ring-zinc-200 transition-all hover:scale-102">
      <CheckIcon className="size-7 text-emerald-500" />
      <p className="text-sm/relaxed font-medium text-zinc-500 lg:text-base/relaxed">
        {cause}
      </p>
    </li>
  );
};

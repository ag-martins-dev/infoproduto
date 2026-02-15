import { CheckCircleIcon } from "lucide-react";

type CauseCardProps = {
  cause: string;
};

export const CauseCard = ({ cause }: CauseCardProps) => {
  return (
    <div className="flex w-full cursor-pointer items-center gap-3 rounded-2xl bg-purple-500 p-5 shadow-md ring-2 shadow-purple-500/40 ring-purple-300 transition-all hover:scale-102">
      <CheckCircleIcon className="size-8 text-white" />
      <p className="text-sm/relaxed font-medium text-white lg:text-base/relaxed">
        {cause}
      </p>
    </div>
  );
};

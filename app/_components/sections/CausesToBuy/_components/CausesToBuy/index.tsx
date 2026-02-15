import { causesToBuy } from "@/app/_constants/causes-to-buy";

import { CauseCard } from "../CauseCard";

export const CausesToBuy = () => {
  return (
    <ul className="flex w-full flex-col items-center gap-4 md:w-5/12">
      {causesToBuy.map((cause, index) => (
        <CauseCard key={index} cause={cause} />
      ))}
    </ul>
  );
};

import { causesToBuy } from "@/app/_constants/causes-to-buy";

import { CauseCard } from "../CauseCard";

export const CausesToBuy = () => {
  return (
    <ul className="grid w-full grid-cols-1 gap-4 md:w-9/12 md:grid-cols-2">
      {causesToBuy.map((cause) => (
        <CauseCard key={cause.id} cause={cause} />
      ))}
    </ul>
  );
};

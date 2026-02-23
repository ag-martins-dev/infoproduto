import { LucideIcon } from "lucide-react";
import { ElementType, memo } from "react";

import type { TargetAudience } from "@/app/_constants/target-audiences";

type TargetAudienceProps = {
  targetAudience: Omit<TargetAudience, "id" | "icon">;
  icon: ElementType & LucideIcon;
};

export const TargetAudienceItem = memo(
  ({ targetAudience, icon: Icon }: TargetAudienceProps) => {
    return (
      <li className="group flex w-full items-center gap-4 justify-self-center rounded-2xl bg-white p-5 shadow-md ring ring-zinc-200 transition-all select-none hover:scale-103 hover:shadow-lg hover:ring hover:ring-rose-500">
        <div className="rounded-xl bg-rose-500/10 p-2 group-hover:bg-rose-500 md:rounded-lg">
          <Icon className="size-6 text-rose-500 group-hover:text-white md:size-5" />
        </div>
        <p className="text-sm/relaxed font-medium text-zinc-500">
          {targetAudience.text}
        </p>
      </li>
    );
  },
);
TargetAudienceItem.displayName = "TargetAudienceItem";

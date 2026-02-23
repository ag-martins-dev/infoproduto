import clsx from "clsx";
import { CircleSmall } from "lucide-react";
import { memo } from "react";

import { ShapeShowcase } from "@/app/_constants/shapes-showcases";

type ShapeTagProps = {
  shape: Pick<ShapeShowcase, "tag" | "color">;
};

const ringColorMap: Record<string, string> = {
  "rose-500": "group-hover:ring-rose-500",
  "cyan-500": "group-hover:ring-cyan-500",
  "blue-500": "group-hover:ring-blue-500",
  "red-500": "group-hover:ring-red-500",
};

const textColorMap: Record<string, string> = {
  "rose-500": "text-rose-500",
  "cyan-500": "text-cyan-500",
  "blue-500": "text-blue-500",
  "red-500": "text-red-500",
};

export const ShapeTag = memo(function ShapeTag({ shape }: ShapeTagProps) {
  return (
    <div className="z-1 flex w-full flex-col items-center justify-center gap-2">
      <div
        className={clsx(
          `flex w-full items-center justify-center gap-2 rounded-full bg-white py-2 shadow-md ring ring-zinc-200 transition-all ease-in-out select-none`,
          ringColorMap[shape.color],
        )}
      >
        <CircleSmall
          className={clsx(`size-3 fill-current`, textColorMap[shape.color])}
        />
        <span
          className={clsx(
            `leading-relaxed font-semibold`,
            textColorMap[shape.color],
          )}
        >
          {shape.tag.label}
        </span>
      </div>

      <p className="text-center text-sm/relaxed font-medium text-zinc-500">
        {shape.tag.description}
      </p>
    </div>
  );
});

import { CircleSmall } from "lucide-react";

import { ShapeShowcase } from "@/app/_constants/shapes-showcases";

type ShapeTagProps = {
  shape: Pick<ShapeShowcase, "tag" | "color">;
};

export function ShapeTag({ shape }: ShapeTagProps) {
  return (
    <div className="z-1 flex w-full flex-col items-center justify-center gap-2">
      <div
        className={`flex w-full items-center justify-center gap-2 rounded-full bg-white py-2 shadow-md ring ring-zinc-200 transition-all ease-in-out select-none group-hover:ring-${shape.color}`}
      >
        <CircleSmall className={`size-3 fill-current text-${shape.color}`} />
        <span className={`leading-relaxed font-semibold text-${shape.color}`}>
          {shape.tag.label}
        </span>
      </div>

      <p className="text-center text-sm/relaxed font-medium text-zinc-500">
        {shape.tag.description}
      </p>
    </div>
  );
}

import { CircleSmall } from "lucide-react";
import { CSSProperties } from "react";

import { ShapeShowcase } from "@/app/_constants/shapes-showcases";

type ShapeTagProps = {
  shape: Pick<ShapeShowcase, "tag" | "color">;
};

export function ShapeTag({ shape }: ShapeTagProps) {
  return (
    <div className="z-1 flex w-full flex-col items-center justify-center gap-2">
      <div
        style={
          {
            "--ring-color": `var(--color-${shape.color})`,
          } as CSSProperties
        }
        className={`flex w-full items-center justify-center gap-2 rounded-full bg-white py-2 shadow-md ring ring-zinc-200 transition-all ease-in-out select-none group-hover:ring-[var(--ring-color)]`}
      >
        <CircleSmall
          style={{
            color: `var(--color-${shape.color})`,
          }}
          className={`size-3 fill-current`}
        />
        <span
          style={{
            color: `var(--color-${shape.color})`,
          }}
          className={`leading-relaxed font-semibold`}
        >
          {shape.tag.label}
        </span>
      </div>

      <p className="text-center text-sm/relaxed font-medium text-zinc-500">
        {shape.tag.description}
      </p>
    </div>
  );
}

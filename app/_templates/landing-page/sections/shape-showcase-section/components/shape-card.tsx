import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import { memo } from "react";
import { twMerge } from "tw-merge";

import { ShapeShowcase } from "@/app/_constants/shapes-showcases";

import { ShapeTag } from "./shape-tag";

type ShapeCardImageProps = ImageProps;

export const ShapeCardImage = memo(function ShapeCardImage({
  src,
  width,
  height,
  alt,
  className,
  ...props
}: ShapeCardImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={twMerge(
        clsx(
          "z-1 object-contain object-top transition-all ease-in-out group-hover:-translate-y-3",
          className,
        ),
      )}
      {...props}
    />
  );
});

type ShapeCardProps = {
  shape: ShapeShowcase;
};

const glowColorMap: Record<string, string> = {
  "rose-500": "bg-rose-500",
  "cyan-500": "bg-cyan-500",
  "blue-500": "bg-blue-500",
  "red-500": "bg-red-500",
};

export const ShapeCard = memo(function ShapeCard({ shape }: ShapeCardProps) {
  return (
    <div className="group relative flex h-136 w-full flex-col items-center justify-between select-none">
      <ShapeCardImage
        src={shape.image.src}
        alt={shape.image.alt}
        style={{
          width: shape.image.relWidth,
          height: shape.image.relHeight,
        }}
      />

      <div
        className={clsx(
          `absolute top-1/2 left-1/2 z-0 block size-50 -translate-x-1/2 -translate-y-3/4 opacity-0 blur-2xl transition-opacity will-change-transform group-hover:opacity-30`,
          glowColorMap[shape.color],
        )}
      />

      <ShapeTag shape={shape} />
    </div>
  );
});

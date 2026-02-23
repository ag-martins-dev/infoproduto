import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import { twMerge } from "tw-merge";

import { ShapeShowcase } from "@/app/_constants/shapes-showcases";

import { ShapeTag } from "./shape-tag";

type ShapeCardImageProps = ImageProps;

export function ShapeCardImage({
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
}

type ShapeCardProps = {
  shape: ShapeShowcase;
};

export function ShapeCard({ shape }: ShapeCardProps) {
  return (
    <div className="group relative flex h-136 w-full flex-col items-center justify-between select-none">
      <ShapeCardImage
        src={shape.image.src}
        alt={shape.image.alt}
        className={`w-${shape.image.relWidth} h-${shape.image.relHeight}`}
      />

      <div
        className={`bg-${shape.color} absolute top-1/2 left-1/2 z-0 block size-50 -translate-x-1/2 opacity-0 blur-[80px] transition-all group-hover:-translate-y-1/2 group-hover:opacity-40`}
      />

      <ShapeTag shape={shape} />
    </div>
  );
}

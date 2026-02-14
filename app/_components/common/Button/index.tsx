import clsx from "clsx";
import {
  ButtonHTMLAttributes,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";
import { twMerge } from "tw-merge";

type ButtonProps = {
  asChild?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  asChild = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;

    return cloneElement(child, {
      className: twMerge(
        clsx([
          "cursor-pointer outline-none rounded-xl ring-2 ring-emerald-300/50 bg-emerald-500 px-8 py-2.5 text-lg font-semibold uppercase shadow-lg text-center shadow-emerald-500/60 transition-all hover:scale-102 hover:brightness-105",
          className,
          child.props.className,
        ]),
      ),
      ...props,
    });
  }

  return (
    <button
      id={props.id}
      className={twMerge(
        clsx([
          "cursor-pointer rounded-xl bg-emerald-500 px-8 py-2.5 text-center text-lg font-semibold uppercase shadow-lg ring-2 shadow-emerald-500/60 ring-emerald-300/50 transition-all outline-none hover:scale-102 hover:brightness-105",
          className,
        ]),
      )}
      {...props}
    >
      {children}
    </button>
  );
};

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
          "cursor-pointer rounded-2xl bg-green-500 px-6 py-3 text-lg font-bold uppercase shadow-lg shadow-green-500/45 transition-all hover:scale-102 hover:brightness-105",
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
          "cursor-pointer rounded-2xl bg-green-500 px-6 py-3 text-lg font-bold uppercase shadow-lg shadow-green-500/45 transition-all hover:scale-102 hover:brightness-105",
          className,
        ]),
      )}
      {...props}
    >
      {children}
    </button>
  );
};

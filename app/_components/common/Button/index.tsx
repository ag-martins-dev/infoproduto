import clsx from "clsx";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tw-merge";

type ButtonProps = {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <a
      {...props}
      id={props.id}
      className={twMerge(
        clsx([
          "cursor-pointer rounded-2xl bg-linear-to-b from-emerald-300 to-emerald-500 px-10 py-2.5 text-center text-lg font-bold uppercase shadow-xl ring-[1.5px] ring-emerald-400 transition-all outline-none hover:scale-102 hover:brightness-102",
          className,
        ]),
      )}
    >
      {children}
    </a>
  );
};

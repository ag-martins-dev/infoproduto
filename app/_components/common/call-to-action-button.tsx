import clsx from "clsx";
import { AnchorHTMLAttributes, ReactElement, ReactNode } from "react";
import { twMerge } from "tw-merge";

type IconProps = {
  children: ReactElement;
};

export function Icon({ children }: IconProps) {
  return <>{children}</>;
}

type LabelProps = {
  text: string;
};

export function Label({ text }: LabelProps) {
  return <span>{text}</span>;
}

type RootProps = {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Root({
  className,
  id,
  href,
  target,
  rel,
  children,
  ...props
}: RootProps) {
  return (
    <a
      id={id}
      href={href}
      target={target}
      rel={rel}
      className={twMerge(
        clsx(
          "z-1 flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-linear-to-b from-emerald-300 to-emerald-500 px-10 py-2.5 text-center text-lg font-bold uppercase shadow-xl ring-[1.5px] ring-emerald-400 transition-all outline-none hover:scale-102 hover:brightness-102",
          className,
        ),
      )}
      {...props}
    >
      {children}
    </a>
  );
}

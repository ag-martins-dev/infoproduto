"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tw-merge";

import { FAQ } from "@/app/_constants/faq";

type AccordionProps = {
  faq: FAQ;
  defaultOpened?: boolean;
};

export const Accordion = ({ faq, defaultOpened }: AccordionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultOpened ?? false);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <article
      className={twMerge(
        clsx(
          "rounded-2xl bg-white p-5 ring ring-zinc-200 transition-all duration-400 ease-in-out md:w-2/3 lg:w-1/2",
          isCollapsed && "shadow-lg ring-rose-500/35",
        ),
      )}
    >
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between"
        onClick={toggleCollapse}
      >
        <p className="text-left text-lg/tight font-semibold text-zinc-900">
          {faq.question}
        </p>

        <div
          className={twMerge(
            clsx(
              "rounded-full bg-zinc-900/10 p-1",
              isCollapsed && "bg-rose-500/10",
            ),
          )}
        >
          <ChevronDown
            className={twMerge(
              clsx(
                "size-5 text-zinc-900 transition-all duration-400 ease-in-out",
                isCollapsed && "rotate-180 text-rose-500",
              ),
            )}
          />
        </div>
      </button>

      <div
        className={clsx("grid transition-all duration-400 ease-in-out", {
          "grid-rows-[1fr] opacity-100": isCollapsed,
          "grid-rows-[0fr] opacity-0": !isCollapsed,
        })}
      >
        <div className="overflow-hidden">
          <p className="pt-2 text-sm/relaxed text-zinc-500">{faq.answer}</p>
        </div>
      </div>
    </article>
  );
};

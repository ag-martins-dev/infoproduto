"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { FAQ } from "@/app/_constants/faq";

type AccordionProps = {
  faq: FAQ;
  opened?: boolean;
};

export const Accordion = ({ faq, opened }: AccordionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(opened ?? false);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <article className="rounded-2xl bg-white p-5 text-zinc-900 shadow-md ring shadow-zinc-900/40 ring-zinc-300 transition-all duration-300 ease-in-out md:w-2/3 lg:w-1/2">
      <button
        onClick={toggleCollapse}
        className="flex w-full cursor-pointer items-center justify-between"
      >
        <span className="text-left text-lg/tight font-semibold">
          {faq.question}
        </span>
        <ChevronDown
          className={clsx(
            "size-6 transition-transform duration-200",
            isCollapsed && "rotate-180",
          )}
        />
      </button>

      <div
        className={clsx("grid transition-all duration-300 ease-in-out", {
          "grid-rows-[1fr] opacity-100": isCollapsed,
          "grid-rows-[0fr] opacity-0": !isCollapsed,
        })}
      >
        <div className="overflow-hidden">
          <p className="pt-2 text-sm/relaxed text-zinc-900/60 italic">
            {faq.answer}
          </p>
        </div>
      </div>
    </article>
  );
};

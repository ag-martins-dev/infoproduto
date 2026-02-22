"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
    <article className="rounded-2xl bg-white p-5 ring ring-zinc-200 transition-all ease-in-out md:w-2/3 lg:w-1/2">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between"
        onClick={toggleCollapse}
      >
        <p className="text-left text-lg/tight font-semibold text-zinc-900">
          {faq.question}
        </p>
        <ChevronDown
          className={clsx(
            "size-6 text-zinc-900 transition-transform duration-200 ease-in-out",
            isCollapsed && "rotate-180",
          )}
        />
      </button>

      <div
        className={clsx("grid transition-all ease-in-out", {
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

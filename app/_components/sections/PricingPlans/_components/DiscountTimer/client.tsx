"use client";

import dynamic from "next/dynamic";

const DiscountTimerClient = dynamic(() => import("./index"), {
  ssr: false,
});

export default DiscountTimerClient;

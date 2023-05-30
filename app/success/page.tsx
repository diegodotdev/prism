"use client";

import React from "react";
import { useCart } from "react-use-cart";
import { windowWidth, windowHeight } from "@/utils";
import Confetti from "react-confetti";
import Link from "next/link";

export default function SuccessPage() {
  const { emptyCart } = useCart();
  const width = windowWidth();
  const height = windowHeight();

  emptyCart();
  return (
    <div className="w-full h-[75vh] flex justify-center items-center gap-2 flex-col">
      <Confetti width={width} height={height} />
      <p className="text-xl">Thank you for your purchase!</p>
      <Link
        className="px-4 py-1 bg-gradient-to-r from-sky-600 via-sky-700 to-sky-400 text-gray-200"
        href="/"
      >
        Home
      </Link>
    </div>
  );
}

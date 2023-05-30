"use client";

import React from "react";
import { useMenuStore } from "@/store/menuStore";
import { AiOutlinePlus } from "react-icons/ai";
import { cn } from "@/utils";
import Link from "next/link";

export default function Menu() {
  const { menuState, handleMenuState } = useMenuStore();
  return (
    <div
      className={cn(
        "px-[4vw] fixed top-0 right-0 w-full h-screen bg-[#111111] flex justify-start items-start flex-col z-[4000] text-gray-200 duration-[1s] xl:hidden",
        menuState
          ? "translate-x-0 opacity-100"
          : "translate-x-[-100%] opacity-0"
      )}
    >
      <div className="w-full h-[15vh] flex justify-start items-center">
        <AiOutlinePlus className="rotate-45" onClick={handleMenuState} />
      </div>
      <div className="w-full h-[75vh] flex justify-start items-start flex-col gap-4">
        <Link
          className="w-full py-2 border-b border-gray-200 text-left"
          href="/"
          onClick={handleMenuState}
        >
          NEW ARRIVALS
        </Link>
        <Link
          className="w-full py-2 border-b border-gray-200 text-left"
          href="/products"
          onClick={handleMenuState}
        >
          SHOP
        </Link>
        <Link
          className="w-full py-2 border-b border-gray-200 text-left"
          href="/"
          onClick={handleMenuState}
        >
          COLLABORATIONS
        </Link>
        <Link
          className="w-full py-2 border-b border-gray-200 text-left"
          href="/"
          onClick={handleMenuState}
        >
          FLAGSHIPS
        </Link>
      </div>
    </div>
  );
}

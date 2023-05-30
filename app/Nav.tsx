"use client";

import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { useMenuStore } from "@/store/menuStore";

export default function Nav() {
  const { totalItems } = useCart();
  const { handleMenuState } = useMenuStore();

  return (
    <div className="w-full sticky top-0 right-0 bg-[#111111] text-gray-200 px-[4vw] z-[1000]">
      <div className="w-full h-[15vh] flex justify-between items-center">
        <div className="w-1/3 justify-start items-center">
          <AiOutlineSearch className="hidden xl:inline" />
          <AiOutlineMenu className="xl:hidden" onClick={handleMenuState} />
        </div>
        <div className="w-1/3 grid place-items-center">
          <Link className="text-2xl" href="/">
            PRISM
          </Link>
        </div>
        <div className="flex items-center gap-5 justify-end w-1/3">
          <AiOutlineUser />
          <Link className="flex items-center gap-1" href="/cart">
            <AiOutlineShopping />
            {totalItems > 0 && <span>{totalItems}</span>}
          </Link>
        </div>
      </div>
      <div className="w-full h-[10vh] xl:flex justify-center items-center gap-10 hidden">
        <Link
          className="inline after:block after:w-0 after:duration-[.5s] after:bg-gray-200 after:h-[1px] after:hover:w-full"
          href="/"
        >
          NEW ARRIVALS
        </Link>
        <Link
          className="inline after:block after:w-0 after:duration-[.5s] after:bg-gray-200 after:h-[1px] after:hover:w-full"
          href="/products"
        >
          SHOP
        </Link>
        <Link
          className="inline after:block after:w-0 after:duration-[.5s] after:bg-gray-200 after:h-[1px] after:hover:w-full"
          href="/"
        >
          COLLABORATIONS
        </Link>
        <Link
          className="inline after:block after:w-0 after:duration-[.5s] after:bg-gray-200 after:h-[1px] after:hover:w-full"
          href="/"
        >
          FLAGSHIPS
        </Link>
      </div>
    </div>
  );
}

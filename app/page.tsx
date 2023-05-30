import React from "react";
import Products from "./Products";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="w-full h-[75vh] flex justify-center items-center gap-4 flex-col">
        <p className="text-2xl">PRISM</p>
        <p className="text-7xl font-[900] bg-gradient-to-r from-sky-600 via-sky-700 to-sky-400 bg-clip-text text-transparent">
          SALE
        </p>
        <p className="text-xl">40% Off The Entire Website</p>
      </div>
      <Products />
      <div className=""></div>
      <div className="w-full h-[10vh] grid place-items-center">
        <Link href="/">PRISM</Link>
      </div>
    </>
  );
}

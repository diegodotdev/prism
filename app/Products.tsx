"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api";
import { client, formatCurrency } from "@/utils";
import { Product } from "@/types";
import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";

export default function Products() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => client.fetch(getProducts()),
  });
  const accessories = data?.filter(
    (item: Product) => item?.category === "accessories"
  );
  const furniture = data?.filter(
    (item: Product) => item?.category === "furniture"
  );
  return (
    <>
      <div className="w-full flex justify-center items-center gap-4 flex-col px-[4vw] py-[4vh] border-b border-[#111111]">
        <div className="w-full h-[10vh] grid place-items-center">
          <p className="text-xl">Featured</p>
        </div>
        {isLoading ? (
          <div className="w-full grid place-items-center">
            <AiOutlineLoading className="animate-spin" />
          </div>
        ) : (
          <div className="w-full grid place-items-start gap-4 grid-cols-1 xl:grid-cols-4">
            {accessories?.map((item: Product) => (
              <Link
                className="w-full"
                key={item?._id}
                href={`/products/${item?._id}`}
              >
                <div className="w-full h-[200px] relative group">
                  <img
                    className="w-full h-full object-cover"
                    src={item?.image}
                    alt={item?.name}
                  />
                  <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-end items-end opacity-0 group-hover:opacity-100">
                    <button className="w-full py-2 grid place-items-center bg-gradient-to-r from-sky-600 via-sky-700 to-sky-400 text-gray-200">
                      Quick View
                    </button>
                  </div>
                </div>
                <div>
                  <p>{item?.name}</p>
                  <p>{formatCurrency(item?.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="w-full flex justify-center items-center gap-4 flex-col px-[4vw] py-[4vh] border-b border-[#111111]">
        <div className="w-full h-[10vh] grid place-items-center">
          <p className="text-xl">Furniture</p>
        </div>
        {isLoading ? (
          <div className="w-full grid place-items-center">
            <AiOutlineLoading className="animate-spin" />
          </div>
        ) : (
          <div className="w-full grid place-items-start gap-4 grid-cols-1 xl:grid-cols-4">
            {furniture?.map((item: Product) => (
              <Link
                className="w-full"
                key={item?._id}
                href={`/products/${item?._id}`}
              >
                <div className="w-full h-[200px] relative group">
                  <img
                    className="w-full h-full object-cover"
                    src={item?.image}
                    alt={item?.name}
                  />
                  <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-end items-end opacity-0 group-hover:opacity-100">
                    <button className="w-full py-2 grid place-items-center bg-gradient-to-r from-sky-600 via-sky-700 to-sky-400 text-gray-200">
                      Quick View
                    </button>
                  </div>
                </div>
                <div>
                  <p>{item?.name}</p>
                  <p>{formatCurrency(item?.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

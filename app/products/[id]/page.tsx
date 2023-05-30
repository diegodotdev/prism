"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/api";
import { client, formatCurrency } from "@/utils";
import { useQtyStore } from "@/store/qtyStore";
import {
  AiOutlineLoading,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useCart } from "react-use-cart";
import { useRouter } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { addItem } = useCart();
  const { qtyState, decrease, increase, reset } = useQtyStore();
  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => client.fetch(getProduct(params?.id)),
  });

  const addToCart = (id: any, qty: number) => {
    addItem(id, qty);
    router.push("/cart");
    reset();
  };
  return (
    <>
      {isLoading ? (
        <div className="w-full h-[75vh] grid place-items-center">
          <AiOutlineLoading className="animate-spin" />
        </div>
      ) : (
        <div className="w-full h-[75vh] flex px-[4vw] flex-col xl:flex-row">
          <div className="w-full xl:w-1/2 h-full grid place-items-center">
            <img
              className="w-4/5 h-4/5 object-cover"
              src={data[0]?.image}
              alt={data[0]?.name}
            />
          </div>
          <div className="w-full xl:w-1/2 h-full grid place-items-center text-lg">
            <div className="w-4/5 flex justify-start items-start flex-col gap-2">
              <p className="text-2xl font-[900]">{data[0]?.name}</p>
              <p>{formatCurrency(data[0]?.price)}</p>
              <div className="flex items-center gap-4">
                <button onClick={decrease} disabled={qtyState === 1}>
                  <AiOutlineMinus />
                </button>
                <p>{qtyState}</p>
                <button onClick={increase}>
                  <AiOutlinePlus />
                </button>
              </div>
              <button
                className="px-4 py-1 bg-[#111111] text-gray-200"
                onClick={() => addToCart(data[0], qtyState)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

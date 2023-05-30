"use client";

import React from "react";
import { useCart } from "react-use-cart";
import { formatCurrency, getStripe } from "@/utils";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function CartPage() {
  const {
    items,
    emptyCart,
    isEmpty,
    cartTotal,
    removeItem,
    updateItemQuantity,
  } = useCart();

  const checkout = async () => {
    const stripe = await getStripe();

    const response: any = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div className="w-full flex justify-start items-start gap-[4vw] px-[4vw] flex-col xl:flex-row">
      <div className="w-full xl:w-3/4 flex justify-start items-start flex-col gap-4">
        {isEmpty ? (
          <div className="w-full xl:w-3/4 h-[75vh] grid place-items-center">
            <p>Cart is Empty</p>
          </div>
        ) : (
          <div className="w-full py-4 flex flex-col gap-4">
            <div className="w-full flex justify-between items-center">
              <p className="font-[500]">Cart</p>
              <p
                className="opacity-50 cursor-pointer text-sm"
                onClick={emptyCart}
              >
                ( Empty )
              </p>
            </div>
            {items?.map((item) => (
              <div className="w-full flex gap-4 items-center" key={item?.id}>
                <img
                  className="w-1/5 xl:w-[10%] aspect-square"
                  src={item?.image}
                  alt={item?.name}
                />
                <div className="w-full">
                  <p className="text-lg font-[500]">{item?.name}</p>
                  <div className="flex items-center gap-4 w-full justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() =>
                          updateItemQuantity(item?.id, item?.quantity! - 1)
                        }
                      >
                        <AiOutlineMinus />
                      </button>
                      <span>{item?.quantity}</span>
                      <button
                        onClick={() =>
                          updateItemQuantity(item?.id, item?.quantity! + 1)
                        }
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <p
                      className="text-sm opacity-50 cursor-pointer"
                      onClick={() => removeItem(item?.id)}
                    >
                      ( Remove )
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full xl:w-1/4 h-[75vh] grid place-items-center">
        <div className="p-2 bg-[#111111] flex justify-center items-center gap-2 flex-col w-full">
          <p className="text-lg text-gray-200">Order Summary</p>
          <div className="w-full flex justify-between items-center text-gray-200">
            <p>Subtotal:</p>
            <p>{formatCurrency(cartTotal)}</p>
          </div>
          <button
            className="w-full py-1 bg-gray-200"
            disabled={cartTotal === 0}
            onClick={checkout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
